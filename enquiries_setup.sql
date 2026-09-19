-- AND Hitech Industries — Enquiries Table
-- Upload this file in cPanel → phpMyAdmin → Import tab

CREATE TABLE IF NOT EXISTS enquiries (
  id           INT UNSIGNED    AUTO_INCREMENT PRIMARY KEY,
  name         VARCHAR(255)    NOT NULL,
  company      VARCHAR(255)    NOT NULL,
  email        VARCHAR(255)    NOT NULL,
  country_code VARCHAR(10)     NOT NULL DEFAULT '+91',
  phone        VARCHAR(50)     NOT NULL DEFAULT '',
  category     VARCHAR(100)    NOT NULL DEFAULT '',
  message      TEXT            NOT NULL,
  created_at   TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
