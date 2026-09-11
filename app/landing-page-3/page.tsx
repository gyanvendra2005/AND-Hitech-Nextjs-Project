'use client';

import { Fragment, useState } from 'react';
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
    name: 'Heat exchanger',
    application: 'HVAC',
    image: '/assets/products/img3.webp',
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
        {/* <div className="product-card-tags">
          <span className="product-app-pill">{product.application}</span>
          <span className="product-badge-pill">{product.badge}</span>
        </div> */}
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
  const [sent, setSent] = useState(false);
  const [selected, setSelected] = useState<Product | null>(null);
  return (
    <main>
  {/* Header */}
  <header className="site-header">
    <a href="#top" aria-label="AND Hitech home">
      <img
        src="/assets/brand/aihl-logo.svg"
        alt="AND Hitech Industries Limited"
        className="logo"
      />
    </a>
    <div className="header-contact">
      <a href="mailto:info@andhitech.in">
        <Mail size={15} /> info@andhitech.in
      </a>
      <a href="tel:+911145527055">
        <Phone size={15} /> +91 11 4552 7055
      </a>
    </div>
    <nav
      className={menuOpen ? 'nav open' : 'nav'}
      aria-label="Primary navigation"
    >
      <a href="#products" onClick={() => setMenuOpen(false)}>
        Products
      </a>
      <a href="#contact" onClick={() => setMenuOpen(false)}>
        Contact
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
    <div className="hero-video" aria-hidden="true">
      <iframe
        src="https://www.youtube.com/embed/JfmCPuR93Do?autoplay=1&mute=1&controls=0&loop=1&playlist=JfmCPuR93Do&playsinline=1&rel=0&modestbranding=1&start=4"
        title="Vande Bharat Express"
        allow="autoplay; encrypted-media"
        tabIndex={-1}
      />
    </div>
    <img src="/assets/hero/railway-hero.png" alt="" className="hero-poster" />
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
      <p>
        Braking and suspension components for LHB coaches, Vande Bharat, metro,
        EMU and freight applications.
      </p>
    </div>
    <div className="product-tabs">
      <div className="product-grid single-product">
        {products.map((product) => (
          <ProductCard
            key={`${product.name}-${product.application}`}
            product={product}
            onOpen={() => setSelected(product)}
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
      <span>Passenger, metro and freight applications</span>
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
        <a href="tel:+911145527055">
          <Phone /> +91 11 4552 7055
        </a>
        <span>
          <MapPin /> New Delhi, India
        </span>
      </div>
    </div>
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      {sent ? (
        <div className="success-message">
          <CheckCircle2 size={42} />
          <h3>Thank you for your enquiry</h3>
          <p>Our team will get back to you shortly.</p>
          <button type="button" onClick={() => setSent(false)}>
            Send another enquiry
          </button>
        </div>
      ) : (
        <>
          <div className="field-row">
            <label>
              Name
              <input required name="name" placeholder="Your name" />
            </label>
            <label>
              Company
              <input required name="company" placeholder="Company name" />
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
              />
            </label>
            <label>
              Phone
              <input name="phone" placeholder="+91" />
            </label>
          </div>
          <label>
            Product category
            <select name="category" defaultValue="">
              <option value="" disabled>
                Select a category
              </option>
              <option>Brake discs</option>
              <option>Brake pads</option>
              <option>Dampers</option>
            </select>
          </label>
          <label>
            Requirement
            <textarea
              required
              name="message"
              rows={4}
              placeholder="Tell us about your application, quantity or technical requirement"
            />
          </label>
          <button className="submit-button" type="submit">
            Submit enquiry <ArrowRight size={18} />
          </button>
        </>
      )}
    </form>
  </section>

  {/* Footer */}
  <footer>
    <img
      src="/assets/brand/aihl-logo.svg"
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

        <div className="modal-header-section">
          <div className="modal-header-title">
            <div className="modal-tags">
              <span className="modal-tag-app">{selected.application}</span>
              <span className="modal-tag-badge">{selected.badge}</span>
            </div>
            <h2>{selected.name}</h2>
          </div>
        </div>

        <div className="modal-layout-body">
          <div className="modal-left-col">
            <div className="modal-left-image">
              <img src={selected.image} alt={selected.name} />
            </div>
            <a
              href="#contact"
              className="modal-cta-action"
              onClick={() => setSelected(null)}
            >
              Request product information <ArrowRight size={16} />
            </a>
          </div>

          <div className="specs-container">
            <h3 className="specs-main-title">{selected.tableTitle}</h3>
            <div className="specs-sections-list">
              {selected.sections.map((sec, idx) => (
                <div key={sec.subheading || idx} className="specs-card">
                  {sec.subheading && (
                    <div className="specs-card-header">
                      <span className="specs-card-accent" />
                      <h4>{sec.subheading}</h4>
                    </div>
                  )}
                  <dl className="specs-card-grid">
                    {sec.items.map((item) => (
                      <div key={item.name} className="specs-card-row">
                        <dt className="specs-row-label">{item.name}</dt>
                        <dd className="specs-row-value">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )}
</main>
  );
}
