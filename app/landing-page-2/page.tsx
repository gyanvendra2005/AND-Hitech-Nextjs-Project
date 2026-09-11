'use client';

import { Fragment, useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, MapPin, Menu, Phone, ShieldCheck, TrainFront, X } from 'lucide-react';

type ParamItem = {
  name: string;
  value: string;
};

type ParamSection = {
  subheading: string;
  items: ParamItem[];
};

type Product = {
  name: string;
  application: string;
  image: string;
  badge: string;
  tableTitle: string;
  sections: ParamSection[];
};

const products: Product[] = [
  {
    name: 'CAB AC - CLW - 2 TR / 7 KW',
    application: 'HVAC',
    image: '/assets/products/img2.webp',
    badge: "CLW APPROVED – SEPT'2025",
    tableTitle: 'Basic Technical Parameters',
    sections: [
      {
        subheading: 'Electrical Requirement',
        items: [
          { name: 'Power Supply', value: '3 Phase, 415 V ±5%, 50 Hz ±3%' },
          { name: 'Power Consumption', value: '3.5 kW' },
        ],
      },
      {
        subheading: 'Capacity',
        items: [
          { name: 'Cooling Capacity', value: '7 kW/2 Tr' },
          { name: 'Heating Capacity', value: '2.0 kW' },
        ],
      },
      {
        subheading: 'Constructional Requirement',
        items: [
          { name: 'Design to Ambient (Cooling)', value: '50°C / 35°C' },
          { name: 'Max Operating Temperature', value: '60°C' },
          { name: 'Dimension (LxWxH)', value: '1146x1000x290 mm' },
          { name: 'Material for Housing', value: 'SS 304 grade S2 Confirming to IS:6911' },
          { name: 'Noise Level(Inside the Coach)', value: '65 dB' },
          {
            name: 'Controller',
            value: 'Electronic Thermostat/Solid stat temp control to RDSO/PE/SPEC/AC/0020. (Latest Alt.)',
          },
          { name: 'Refrigrant', value: 'R-407C' },
          { name: 'Weight', value: '150 kg Approx.' },
        ],
      },
      {
        subheading: 'Service condition',
        items: [
          { name: 'Ambient', value: '-4 to 50°C' },
          { name: 'Max. Roof Temp.', value: '70°C' },
          { name: 'Train Speed', value: '160 Km/h' },
          { name: 'Relative Humidity', value: 'Up to 100% during rainy season' },
          {
            name: 'Atmosphere',
            value: 'Very dusty atmosphere with dust of composite brake block shoe.',
          },
          { name: 'Shock & Vibration Standard', value: 'IEC 61373' },
        ],
      },
    ],
  },
  {
    name: 'LHB RMPU - 7 TR / 24.6 KW',
    application: 'HVAC',
    image: '/assets/products/img1.webp',
    badge: "RDSO APPROVED – APRIL'2025",
    tableTitle: 'Basic Technical Parameters',
    sections: [
      {
        subheading: 'Electrical Requirement',
        items: [
          { name: 'Power Supply', value: '3 Phase, 415 V ±10%, 50 Hz ±2.5%' },
          { name: 'Power Consumption', value: '16.5 kVA (max)' },
        ],
      },
      {
        subheading: 'Capacity',
        items: [
          { name: 'Cooling Capacity', value: '25.4 kW/7.2 Tr' },
          { name: 'Heating Capacity', value: '6.0 kW' },
        ],
      },
      {
        subheading: 'Constructional Requirement',
        items: [
          { name: 'Design to Ambient', value: '50°C' },
          { name: 'Max Operating Temperature', value: '57°C' },
          { name: 'Dimension (LxWxH)', value: '2220x2100x500 mm' },
          { name: 'Material for Housing', value: 'SS 304 grade S2 Confirming to IS:6911' },
          { name: 'Noise Level(Inside the Coach)', value: '60dB as per UIC 553' },
          {
            name: 'Controller',
            value: 'Microprocessor Controller as per RDSO Spec. No.: RDSO/PE/SPEC/AC/0139-(Rev.1)-2009',
          },
          { name: 'Refrigrant', value: 'R-407C' },
          { name: 'Weight', value: '610 kg Approx' },
        ],
      },
      {
        subheading: 'Service condition',
        items: [
          { name: 'Ambient', value: '-4 to 57°C' },
          { name: 'Max. Roof Temp.', value: '70°C' },
          { name: 'Train Speed', value: '200 Km/h' },
          { name: 'Relative Humidity', value: 'Maximum Up to 100%' },
          { name: 'Atmosphere', value: 'Extremly dusty & desert weather' },
          { name: 'Shock & Vibration Standard', value: 'IEC 61373' },
        ],
      },
    ],
  },
  {
    name: 'EMU RMPU – 15 TR / 52.7 KW',
    application: 'HVAC',
    image: '/assets/products/img4.webp',
    badge: "Proto under development | RDSO TARGET: OCT'2026",
    tableTitle: 'Technical Parameters',
    sections: [
      {
        subheading: 'Electrical Requirement',
        items: [
          { name: 'Power Supply', value: '3 Phase, 415 V ± 5%, 50 Hz ± 3%' },
          { name: 'Power Consumption', value: '21 kW' },
        ],
      },
      {
        subheading: 'Capacity',
        items: [
          { name: 'Cooling Capacity', value: '52.5 kW/15 Tr' },
          { name: 'Heating Capacity', value: 'N/A' },
        ],
      },
      {
        subheading: 'Constructional Requirement',
        items: [
          { name: 'Design to Ambient', value: '38°C' },
          { name: 'Max Operating Temperature', value: '48°C' },
          { name: 'Dimension (LxWxH)', value: '3400 x 2065 x 405 mm' },
          { name: 'Material for Housing', value: 'SS 304 grade S2 Confirming to IS:6911' },
          { name: 'Noise Level', value: '70dB from 1 meter distance' },
          { name: 'Controller', value: 'Microprocessor Controller as per RDSO' },
          { name: 'Refrigrant', value: 'R-407C' },
          { name: 'Weight', value: '910 kg Approx' },
        ],
      },
      {
        subheading: 'Service condition',
        items: [
          { name: 'Ambient', value: '40°C' },
          { name: 'Max. Temp. inside coach Under Sun', value: '70°C' },
          { name: 'Train Speed', value: '120 Km/h' },
          { name: 'Relative Humidity', value: 'Maximum Up to 98%' },
          { name: 'Atmosphere', value: 'Extremely dusty & desert weather' },
          { name: 'Shock & Vibration Standard', value: 'IEC 61373' },
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
        <div className="product-card-tags">
          <span className="product-app-pill">{product.application}</span>
          <span className="product-badge-pill">{product.badge}</span>
        </div>
        <h3>{product.name}</h3>
        <button className="product-link" onClick={onOpen}>
          View specifications <ArrowRight size={15} />
        </button>
      </div>
    </article>
  );
}

export default function LandingPage2() {
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
      <a href="tel:+9101144766444">
        <Phone size={15} /> +91 01144766444
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
    {/* <div className="hero-video" aria-hidden="true">
      <iframe
        src="https://www.youtube.com/embed/JfmCPuR93Do?autoplay=1&mute=1&controls=0&loop=1&playlist=JfmCPuR93Do&playsinline=1&rel=0&modestbranding=1&start=4"
        title="Vande Bharat Express"
        allow="autoplay; encrypted-media"
        tabIndex={-1}
      />
    </div> */}
    <img src="/assets/products/banner.webp" alt="" className="hero-poster" />
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
      <div className="product-grid">
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
              <div className="phone-input-group">
                <select name="country_code" defaultValue="+91">
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
                <input name="phone" type="tel" placeholder="Phone number" />
              </div>
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
              {selected.sections.map((sec) => (
                <div key={sec.subheading} className="specs-card">
                  <div className="specs-card-header">
                    <span className="specs-card-accent" />
                    <h4>{sec.subheading}</h4>
                  </div>
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
