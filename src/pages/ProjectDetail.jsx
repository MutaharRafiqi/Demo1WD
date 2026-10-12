import { Link, useParams } from 'react-router-dom'
import Button from '../components/Button.jsx'
import ContactBand from '../components/ContactBand.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ProjectVisual from '../components/ProjectVisual.jsx'
import { projects } from '../data/siteData.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <section className="not-found section-pad">
        <div className="container">
          <p className="eyebrow">PROJECT NOT FOUND</p>
          <h1>That concept isn’t here.</h1>
          <Link className="text-link" to="/work">Back to all concepts <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    )
  }

  const otherProjects = projects.filter((item) => item.slug !== project.slug)

  return (
    <>
      <section className="project-detail-hero">
        <div className="container">
          <Link className="back-link" to="/work">← All concepts</Link>
          <div className="project-detail-hero__intro">
            <div>
              <p className="eyebrow">{project.category.toUpperCase()} · FICTIONAL CONCEPT</p>
              <h1>{project.name}<span>.</span></h1>
              <p>{project.intro}</p>
            </div>
            <span className="project-detail-hero__year">{project.year}</span>
          </div>
          <ProjectVisual className="project-detail-hero__visual" project={project} />
        </div>
      </section>

      <section className="project-detail-content section-pad">
        <div className="container project-detail-layout">
          <div className="project-detail-story">
            <p className="eyebrow">THE THINKING</p>
            <h2>Good design begins with the real question.</h2>
            <h3>The challenge</h3>
            <p>{project.challenge}</p>
            <h3>The direction</h3>
            <p>{project.solution}</p>
          </div>
          <aside className="project-detail-aside">
            <h3>Project snapshot</h3>
            <dl>
              {project.details.map(([label, value]) => (
                <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
              ))}
            </dl>
            <h3>What this concept explores</h3>
            <ul>{project.services.map((service) => <li key={service}>{service}</li>)}</ul>
            <p className="project-detail-aside__note">A fictional portfolio exercise. No business or client results are implied.</p>
          </aside>
        </div>
      </section>

      <section className="more-work section-pad section-pad--soft">
        <div className="container">
          <div className="split-heading">
            <div><p className="eyebrow">KEEP LOOKING</p><h2>Another point of view.</h2></div>
            <Button to="/work" variant="outline">All concepts <span aria-hidden="true">↗</span></Button>
          </div>
          <div className="project-grid">
            {otherProjects.map((item, index) => <ProjectCard index={index} key={item.slug} project={item} />)}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  )
}
