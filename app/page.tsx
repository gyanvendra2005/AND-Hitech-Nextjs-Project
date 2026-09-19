'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, MapPin, Menu, Phone, ShieldCheck, TrainFront, X } from 'lucide-react';

type ParamItem = {
  name: string;
  value: string;
};

type ParamSection = {
  subheading?: string;
  items: ParamItem[];
};

type Product = {
  name: string;
  application: string;
  image: string;
  badge?: string;
  tableTitle: string;
  sections: ParamSection[];
};

const products: Product[] = [
  {
    name: 'Heat Exchanger',
    application: 'HVAC',
    image: './assets/products/img3.webp',
    badge: 'Coil Systems',
    tableTitle: 'Basic Technical Parameter',
    sections: [
      {
        items: [
          { name: 'Length Range', value: '200 to 2500 mm' },
          { name: 'Width Range', value: '200 to 1500 mm' },
          { name: 'Rows', value: '1R, 2R, 3R, 4R, 5R, 6R' },
          { name: 'Tube Material & Size', value: 'Copper: φ 9.52 mm & φ 7 mm' },
          { name: 'Fin Material', value: 'Aluminum & Copper (Blue Hydrophilic & Bare)' },
          { name: 'Fin Type', value: 'Sine Wave — with & without louvers' },
          { name: 'Pitch', value: '• φ 7 mm: 21 × 12.7 mm\n• φ 9.52 mm: 25.4 × 22 mm' },
          { name: 'FPI Range', value: '7 ~ 14' },
          { name: 'Design Software', value: '• Unilab Coils Design\n• SolidWorks' },
        ],
      },
    ],
  },
];

function ProductCard({ product, onOpen }: { product: Product; onOpen: () => void }) {
  return (
    <article className="product-card group">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-copy">
        <h3>{product.name}</h3>
        <button className="product-link" onClick={onOpen}>
          View specifications <ArrowRight size={15} />
        </button>
      </div>
    </article>
  );
}

export default function LandingPage3() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [selected, setSelected] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  async function handleContactSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);
    setSubmitting(true);
    try {
      const response = await fetch('contact.php', { method: 'POST', body: new FormData(event.currentTarget) });
      if (!response.ok) throw new Error('Server error');
      const data = await response.json();
      if (data.success) {
        window.location.href = 'thank-you.html';
      } else {
        setFormError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setFormError('Something went wrong. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <main>
  {/* Header */}
  <header className="site-header">
    <a href="#top" aria-label="AND Hitech home">
      <img
        src="./assets/brand/aihl-logo.svg"
        alt="AND Hitech Industries Limited"
        className="logo"
      />
    </a>
    <div className="header-contact">
      <a href="mailto:info@andhitech.in">
        <Mail size={15} /> info@andhitech.in
      </a>
      <a href="tel:+911144766444">
        <Phone size={15} /> +91 1144766444
      </a>
    </div>
    <nav
      className={menuOpen ? 'nav open' : 'nav'}
      aria-label="Primary navigation"
    >
      <a href="#products" onClick={() => setMenuOpen(false)}>
        Products
      </a>
      <a
        className="nav-cta"
        href="#contact"
        onClick={() => setMenuOpen(false)}
      >
        Enquire now <ArrowRight size={15} />
      </a>
    </nav>
    <button
      className="menu-button"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle menu"
    >
      {menuOpen ? <X /> : <Menu />}
    </button>
  </header>

  {/* Hero Section */}
  <section id="top" className="hero">
    {/* <div className="hero-video" aria-hidden="true">
      <iframe
        src="https://www.youtube.com/embed/JfmCPuR93Do?autoplay=1&mute=1&controls=0&loop=1&playlist=JfmCPuR93Do&playsinline=1&rel=0&modestbranding=1&start=4"
        title="Vande Bharat Express"
        allow="autoplay; encrypted-media"
        tabIndex={-1}
      />
    </div> */}
    <img src="./assets/products/banner.webp" alt="" className="hero-poster" />
    <div className="hero-overlay" />
    <div className="hero-content">
      <p className="eyebrow">Railway braking and suspension systems</p>
      <h1>
        Engineering confidence
        <br />
        into every journey
      </h1>
      <p className="hero-lead">
        Critical railway components developed for reliable braking and
        controlled motion in demanding operating conditions.
      </p>
      <div className="hero-actions">
        <a href="#products" className="button-primary">
          Explore products <ArrowRight size={17} />
        </a>
        <a href="#contact" className="button-ghost">
          Talk to our team
        </a>
      </div>
    </div>
  </section>

  {/* Products Section */}
  <section id="products" className="products-section">
    <div className="section-intro">
      <div>
        <p className="section-kicker">Product portfolio</p>
        <h2>
          Components engineered
          <br />
          for rail applications
        </h2>
      </div>
      {/* <p>
        Braking and suspension components for LHB coaches, Vande Bharat, metro,
        EMU and freight applications.
      </p> */}
    </div>
    <div className="product-tabs">
      <div className="product-grid single-product">
        {products.map((product) => (
          <ProductCard
            key={`${product.name}-${product.application}`}
            product={product}
            onOpen={() => {
              setSelected(product);
              setActiveTab(0);
            }}
          />
        ))}
      </div>
    </div>
  </section>

  {/* Quality Strip */}
  <section className="quality-strip">
    <div>
      <ShieldCheck />
      <span>Standards-led engineering</span>
    </div>
    <div>
      <TrainFront />
      <span>Passenger, Metro and Freight applications</span>
    </div>
    <div>
      <CheckCircle2 />
      <span>Technical product documentation</span>
    </div>
  </section>

  {/* Contact Section */}
  <section id="contact" className="contact-section">
    <div className="contact-copy">
      <p className="section-kicker light">Get in touch</p>
      <h2>Let’s discuss your application.</h2>
      <p>
        Share your requirement and our team will help identify the right braking
        or suspension component.
      </p>
      <div className="contact-details">
        <a href="mailto:info@andhitech.in">
          <Mail /> info@andhitech.in
        </a>
        <a href="tel:+911144766444">
          <Phone /> +91 1144766444
        </a>
        <span>
          <MapPin /> New Delhi, India
        </span>
      </div>
    </div>
    <form className="contact-form" onSubmit={handleContactSubmit}>
      <div className="field-row">
        <label>
          Name
          <input required name="name" placeholder="Your name" disabled={submitting} />
        </label>
        <label>
          Company
          <input required name="company" placeholder="Company name" disabled={submitting} />
        </label>
      </div>
      <div className="field-row">
        <label>
          Email
          <input
            required
            type="email"
            name="email"
            placeholder="you@company.com"
            disabled={submitting}
          />
        </label>
        <label>
          Phone
          <div className="phone-input-group">
            <select name="country_code" defaultValue="+91" disabled={submitting}>
              <option value="+91">🇮🇳 +91 — India</option>
              <option value="+1">🇺🇸 +1 — United States</option>
              <option value="+44">🇬🇧 +44 — United Kingdom</option>
              <option value="+971">🇦🇪 +971 — UAE</option>
              <option value="+65">🇸🇬 +65 — Singapore</option>
              <option value="+49">🇩🇪 +49 — Germany</option>
              <option value="+33">🇫🇷 +33 — France</option>
              <option value="+86">🇨🇳 +86 — China</option>
              <option value="+81">🇯🇵 +81 — Japan</option>
              <option value="+61">🇦🇺 +61 — Australia</option>
              <option value="+1">🇨🇦 +1 — Canada</option>
              <option value="+966">🇸🇦 +966 — Saudi Arabia</option>
              <option value="+974">🇶🇦 +974 — Qatar</option>
              <option value="+82">🇰🇷 +82 — South Korea</option>
              <option value="+31">🇳🇱 +31 — Netherlands</option>
              <option value="+39">🇮🇹 +39 — Italy</option>
              <option value="+34">🇪🇸 +34 — Spain</option>
              <option value="+55">🇧🇷 +55 — Brazil</option>
              <option value="+27">🇿🇦 +27 — South Africa</option>
              <option value="+7">🇷🇺 +7 — Russia</option>
              <option value="+880">🇧🇩 +880 — Bangladesh</option>
              <option value="+92">🇵🇰 +92 — Pakistan</option>
              <option value="+977">🇳🇵 +977 — Nepal</option>
              <option value="+94">🇱🇰 +94 — Sri Lanka</option>
              <option value="+60">🇲🇾 +60 — Malaysia</option>
              <option value="+62">🇮🇩 +62 — Indonesia</option>
              <option value="+66">🇹🇭 +66 — Thailand</option>
              <option value="+63">🇵🇭 +63 — Philippines</option>
              <option value="+84">🇻🇳 +84 — Vietnam</option>
              <option value="+90">🇹🇷 +90 — Turkey</option>
              <option value="+972">🇮🇱 +972 — Israel</option>
              <option value="+965">🇰🇼 +965 — Kuwait</option>
              <option value="+968">🇴🇲 +968 — Oman</option>
              <option value="+973">🇧🇭 +973 — Bahrain</option>
              <option value="+964">🇮🇶 +964 — Iraq</option>
              <option value="+48">🇵🇱 +48 — Poland</option>
              <option value="+46">🇸🇪 +46 — Sweden</option>
              <option value="+41">🇨🇭 +41 — Switzerland</option>
              <option value="+234">🇳🇬 +234 — Nigeria</option>
              <option value="+254">🇰🇪 +254 — Kenya</option>
              <option value="+251">🇪🇹 +251 — Ethiopia</option>
              <option value="+52">🇲🇽 +52 — Mexico</option>
              <option value="+54">🇦🇷 +54 — Argentina</option>
            </select>
            <input name="phone" type="tel" placeholder="Phone number" disabled={submitting} />
          </div>
        </label>
      </div>
      <label>
        Product category
        <select name="category" defaultValue="" disabled={submitting}>
          <option value="" disabled>
            Select a category
          </option>
          <option>Heat Exchanger</option>
        </select>
      </label>
      <label>
        Requirement
        <textarea
          required
          name="message"
          rows={4}
          placeholder="Tell us about your application, quantity or technical requirement"
          disabled={submitting}
        />
      </label>
      {formError && <p className="form-error">{formError}</p>}
      <button className="submit-button" type="submit" disabled={submitting}>
        <span>{submitting ? 'Sending...' : 'Submit enquiry'}</span>
        {submitting ? null : <ArrowRight size={18} />}
      </button>
    </form>
  </section>

  {/* Footer */}
  <footer>
    <img
      src="./assets/brand/Footer logo.svg"
      alt="AND Hitech Industries Limited"
    />
    <p>Railway braking and suspension components.</p>
    <div className="footer-links">
      <a href="#products">Products</a>
      <a href="#contact">Contact</a>
    </div>
    <p className="copyright">
      © {new Date().getFullYear()} AND Hitech Industries Limited
    </p>
  </footer>

  {/* Product Specification Modal */}
  {selected && (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={() => setSelected(null)}
    >
      <section
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-label={selected.name}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={() => setSelected(null)}
          aria-label="Close specifications"
        >
          <X />
        </button>

        <div className="modal-layout-body">
          <div className="modal-left-col">
            <img src={selected.image} alt={selected.name} />
          </div>

          <div className="specs-container">
            <p className="modal-eyebrow">{selected.application}</p>
            <h2 className="modal-title">{selected.name}</h2>

            {/* <div className="specs-tabs" role="tablist">
              {selected.sections.map((sec, index) => (
                <button
                  key={sec.subheading}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === index}
                  className={activeTab === index ? 'specs-tab active' : 'specs-tab'}
                  onClick={() => setActiveTab(index)}
                >
                  {sec.subheading}
                </button>
              ))}
            </div> */}
            {selected.sections.map((sec, index) => (
              <dl
                key={sec.subheading}
                role="tabpanel"
                hidden={activeTab !== index}
                className="specs-card-grid"
              >
                {sec.items.map((item) => (
                  <div key={item.name} className="specs-card-row">
                    <dt className="specs-row-label">{item.name}</dt>
                    <dd className="specs-row-value">{item.value}</dd>
                  </div>
                ))}
              </dl>
            ))}

            <a
              href="#contact"
              className="modal-cta-action"
              onClick={() => setSelected(null)}
            >
              Request product information <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )}
</main>
  );
}
