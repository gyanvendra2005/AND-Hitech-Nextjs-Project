<?php
/**
 * AND Hitech Industries — Contact Form Handler
 *
 * SETUP INSTRUCTIONS:
 * 1. In cPanel → MySQL Databases, create a database and user, then assign the user to the database.
 * 2. Fill in DB_HOST, DB_NAME, DB_USER, DB_PASS below.
 * 3. Run this SQL once to create the enquiries table (e.g. via cPanel phpMyAdmin):
 *
 *    CREATE TABLE IF NOT EXISTS enquiries (
 *      id           INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 *      name         VARCHAR(255)  NOT NULL,
 *      company      VARCHAR(255)  NOT NULL,
 *      email        VARCHAR(255)  NOT NULL,
 *      country_code VARCHAR(10)   DEFAULT '+91',
 *      phone        VARCHAR(50)   DEFAULT '',
 *      category     VARCHAR(100)  DEFAULT '',
 *      message      TEXT          NOT NULL,
 *      created_at   TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
 *    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 *
 * 4. Upload this file alongside the static site files on cPanel.
 */

// ── Configuration ─────────────────────────────────────────────────────────────
define('DB_HOST',   'localhost');
define('DB_NAME',   'drupalabacusdesk_andhitech');
define('DB_USER',   'drupalabacusdesk_andhitech');
define('DB_PASS',   '8s7+P,ds^x3qt+Q-');
define('MAIL_TO',   'tanisha@abacusdesk.co.in');
define('MAIL_FROM', 'enquiries@andhitech.in'); // must match a domain on this cPanel account
// ─────────────────────────────────────────────────────────────────────────────

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit;
}

header('Content-Type: application/json; charset=UTF-8');

// Prevent direct browser access sniffing
header('X-Content-Type-Options: nosniff');

function clean(string $val): string {
    return htmlspecialchars(strip_tags(trim($val)), ENT_QUOTES, 'UTF-8');
}

$name         = clean($_POST['name']         ?? '');
$company      = clean($_POST['company']      ?? '');
$email        = trim($_POST['email']         ?? '');
$country_code = clean($_POST['country_code'] ?? '+91');
$phone        = clean($_POST['phone']        ?? '');
$category     = clean($_POST['category']     ?? '');
$message      = clean($_POST['message']      ?? '');

// Basic validation
if (!$name || !$company || !$message) {
    echo json_encode(['success' => false, 'error' => 'Please fill in all required fields.']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'error' => 'Please enter a valid email address.']);
    exit;
}
$email = filter_var($email, FILTER_SANITIZE_EMAIL);

// ── Save to database ──────────────────────────────────────────────────────────
try {
    $pdo = new PDO(
        'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4',
        DB_USER,
        DB_PASS,
        [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]
    );

    $stmt = $pdo->prepare(
        'INSERT INTO enquiries (name, company, email, country_code, phone, category, message)
         VALUES (:name, :company, :email, :country_code, :phone, :category, :message)'
    );
    $stmt->execute([
        ':name'         => $name,
        ':company'      => $company,
        ':email'        => $email,
        ':country_code' => $country_code,
        ':phone'        => $phone,
        ':category'     => $category,
        ':message'      => $message,
    ]);
} catch (PDOException $e) {
    error_log('[AND Hitech contact] DB error: ' . $e->getMessage());
    echo json_encode(['success' => false, 'error' => 'Unable to save your enquiry. Please email us directly at info@andhitech.in']);
    exit;
}

// ── Send notification email ───────────────────────────────────────────────────
$subject = "New Enquiry from {$name} — AND Hitech Industries";

$body  = "New enquiry submitted via the AND Hitech Industries website.\n\n";
$body .= "Name:           {$name}\n";
$body .= "Company:        {$company}\n";
$body .= "Email:          {$email}\n";
$body .= "Phone:          {$country_code} {$phone}\n";
$body .= "Product area:   {$category}\n\n";
$body .= "Message:\n";
$body .= str_repeat('-', 60) . "\n";
$body .= $message . "\n";

$headers  = "From: AND Hitech Website <" . MAIL_FROM . ">\r\n";
$headers .= "Reply-To: {$name} <{$email}>\r\n";
$headers .= "X-Mailer: PHP/" . PHP_VERSION . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

@mail(MAIL_TO, $subject, $body, $headers);

echo json_encode(['success' => true]);
