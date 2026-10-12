import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import ContactBand from '../components/ContactBand.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ProjectVisual from '../components/ProjectVisual.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { processSteps, projects, services, testimonials } from '../data/siteData.js'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <p className="eyebrow eyebrow--light"><span className="eyebrow__dot" /> INDEPENDENT WEB DESIGN & DEVELOPMENT</p>
            <h1>Good businesses<br />deserve <span>great websites.</span></h1>
            <p className="hero__lead">
              We design and build clear, considered websites that help independent businesses make a
              confident first impression.
            </p>
            <div className="hero__actions">
              <Button to="/contact">Start a project <span aria-hidden="true">↗</span></Button>
              <Button to="/work" variant="text-light">View our work <span aria-hidden="true">↓</span></Button>
            </div>
            <p className="hero__footnote">A fictional studio concept. A real-world approach.</p>
          </div>
          <div className="hero__art">
            <ProjectVisual project={projects[0]} />
            <div className="hero__art-label"><span>01 / 03</span><span>EXAMPLE WEBSITE CONCEPT</span></div>
          </div>
        </div>
        <div className="hero__bottom container">
          <span>DESIGNED WITH INTENTION</span>
          <span>BUILT FOR REAL PEOPLE</span>
          <span>MADE FOR THE EVERYDAY</span>
        </div>
      </section>

      <section className="intro-section section-pad">
        <div className="container intro-section__grid">
          <p className="eyebrow">SMALL STUDIO. THOUGHTFUL WORK.</p>
          <div>
            <h2>Less noise.<br /><span>More of what matters.</span></h2>
            <p className="intro-section__text">
              Your website should make it easier for people to understand what you do—and take the
              next step. We make useful, well-made websites with a personal process and no unnecessary
              fuss.
            </p>
            <Link className="text-link" to="/about">Get to know our approach <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="services-preview section-pad section-pad--soft">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT WE DO"
            title="The right help, right where you need it."
            text="From a first website to a thoughtful refresh, we keep the work practical and the process personal."
          />
          <div className="service-list">
            {services.slice(0, 4).map((service) => (
              <Link className="service-row" key={service.number} to="/services">
                <span className="service-row__number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <span aria-hidden="true" className="service-row__arrow">↗</span>
              </Link>
            ))}
          </div>
          <div className="section-action">
            <Button to="/services" variant="outline">Explore all services <span aria-hidden="true">↗</span></Button>
          </div>
        </div>
      </section>

      <section className="work-preview section-pad">
        <div className="container">
          <div className="split-heading">
            <SectionHeading
              eyebrow="SELECTED CONCEPTS"
              title={<>Made-up names.<br />Thoughtful possibilities.</>}
              text="These fictional projects are design exercises—not client work. Each imagines how a clearer website could help a local business."
            />
            <Link className="text-link split-heading__link" to="/work">See all concepts <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="project-grid">
            {projects.slice(0, 2).map((project, index) => (
              <ProjectCard index={index} key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="process-preview section-pad section-pad--soft">
        <div className="container">
          <SectionHeading
            eyebrow="A CLEAR, HUMAN PROCESS"
            title="Good work starts with a good conversation."
            text="No jargon and no surprises. Just a few thoughtful steps from first idea to launch-ready website."
          />
          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-card" key={step.number}>
                <span className="process-card__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <Link className="text-link process-link" to="/about">A little more about how we work <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section aria-labelledby="testimonial-heading" className="testimonial-section section-pad">
        <div className="container testimonial-layout">
          <div>
            <p className="eyebrow">KIND WORDS, IMAGINED</p>
            <h2 id="testimonial-heading">A taste of what<br />a good process feels like.</h2>
            <p className="testimonial-disclaimer">Fictional testimonials created for this portfolio demo.</p>
          </div>
          <div className="testimonial-list">
            {testimonials.slice(0, 2).map((testimonial) => (
              <blockquote className="testimonial" key={testimonial.role}>
                <p>{testimonial.quote}</p>
                <footer><strong>{testimonial.name}</strong><span>{testimonial.role}</span></footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  )
}
