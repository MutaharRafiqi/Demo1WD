import { Link } from 'react-router-dom'
import ProjectVisual from './ProjectVisual.jsx'

export default function ProjectCard({ project, index = 0, featured = false }) {
  return (
    <article className={`project-card${featured ? ' project-card--featured' : ''}`}>
      <Link
        aria-label={`View ${project.name}, a fictional ${project.category.toLowerCase()} project`}
        className="project-card__visual-link"
        to={`/work/${project.slug}`}
      >
        <ProjectVisual className={index % 2 ? 'project-visual--offset' : ''} project={project} />
        <span className="project-card__arrow" aria-hidden="true">↗</span>
      </Link>
      <div className="project-card__caption">
        <div>
          <h3><Link to={`/work/${project.slug}`}>{project.name}</Link></h3>
          <p>{project.descriptor}</p>
        </div>
        <span className="project-card__category">{project.category}</span>
      </div>
    </article>
  )
}
