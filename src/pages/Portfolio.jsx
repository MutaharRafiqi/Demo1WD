import { Link } from 'react-router-dom'
import ContactBand from '../components/ContactBand.jsx'
import PageIntro from '../components/PageIntro.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/siteData.js'

export default function Portfolio() {
  return (
    <>
      <PageIntro
        eyebrow="SELECTED CONCEPTS"
        title={<>Small-business ideas,<br /><span>imagined online.</span></>}
        text="A collection of fictional projects exploring how a thoughtful website could serve different kinds of local businesses."
        className="page-intro--dark"
      />
      <section className="portfolio-section section-pad">
        <div className="container">
          <div className="portfolio-note">
            <span className="portfolio-note__mark" aria-hidden="true">i</span>
            <p><strong>Demo work, not client work.</strong> These concepts, business names, and project descriptions are fictional examples made to show design possibilities.</p>
          </div>
          <div className="project-grid project-grid--portfolio">
            {projects.map((project, index) => (
              <ProjectCard index={index} key={project.slug} project={project} />
            ))}
          </div>
          <div className="portfolio-back">
            <Link className="text-link" to="/services">Explore services <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  )
}
