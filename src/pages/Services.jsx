import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import ContactBand from '../components/ContactBand.jsx'
import PageIntro from '../components/PageIntro.jsx'
import { services } from '../data/siteData.js'

const packages = [
  {
    name: 'Focused page',
    price: 'From $750',
    description: 'A clear, polished landing page for one service, launch, or offer.',
    includes: ['One custom-designed page', 'Mobile-friendly build', 'Contact call to action'],
  },
  {
    name: 'Small business site',
    price: 'From $1,800',
    description: 'A thoughtful multi-page foundation for an independent business.',
    includes: ['Up to five core pages', 'Contact form setup', 'On-page SEO basics'],
    featured: true,
  },
  {
    name: 'Website refresh',
    price: 'From $1,200',
    description: 'A considered redesign for a site ready for its next chapter.',
    includes: ['Content and structure review', 'Updated visual design', 'Responsive implementation'],
  },
]

export default function Services() {
  return (
    <>
      <PageIntro
        eyebrow="SERVICES"
        title={<>Useful websites,<br /><span>made with care.</span></>}
        text="Practical design and development for independent businesses. Start with the help you need now; keep the next step clear."
        className="page-intro--dark"
      />

      <section className="services-detail section-pad">
        <div className="container">
          <div className="service-detail-list">
            {services.map((service) => (
              <article className="service-detail" key={service.number}>
                <span className="service-detail__number">{service.number}</span>
                <div className="service-detail__main">
                  <h2>{service.title}</h2>
                  <p className="service-detail__summary">{service.description}</p>
                  <div className="service-detail__meta">
                    <div>
                      <h3>Who it’s for</h3>
                      <p>{service.forWhom}</p>
                    </div>
                    <div>
                      <h3>What’s included</h3>
                      <ul>
                        {service.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="service-detail__price">
                  <span>{service.price}</span>
                  <small>{service.timeline}</small>
                  <Link className="text-link" to="/contact">Ask about it <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-section section-pad section-pad--soft">
        <div className="container">
          <div className="pricing-heading">
            <div>
              <p className="eyebrow">A USEFUL PLACE TO START</p>
              <h2>Illustrative starting points.</h2>
            </div>
            <p>These sample ranges are for demonstration only. A real project estimate depends on scope, content, and the needs of your business.</p>
          </div>
          <div className="pricing-grid">
            {packages.map((packageOption) => (
              <article className={`price-card${packageOption.featured ? ' price-card--featured' : ''}`} key={packageOption.name}>
                {packageOption.featured && <span className="price-card__label">A GOOD FOUNDATION</span>}
                <h3>{packageOption.name}</h3>
                <p>{packageOption.description}</p>
                <strong>{packageOption.price}</strong>
                <ul>
                  {packageOption.includes.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <Button to="/contact" variant={packageOption.featured ? 'primary' : 'outline'}>
                  Discuss your project <span aria-hidden="true">↗</span>
                </Button>
              </article>
            ))}
          </div>
          <p className="pricing-note">No guaranteed search rankings or business results. Hosting, domain registration, and third-party services are not included unless agreed in a project scope.</p>
        </div>
      </section>
      <ContactBand />
    </>
  )
}
