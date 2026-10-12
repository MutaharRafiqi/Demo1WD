export default function ProjectVisual({ project, className = '' }) {
  return (
    <div
      aria-label={`${project.name} fictional ${project.category.toLowerCase()} website design`}
      className={`project-visual project-visual--${project.visual} ${className}`.trim()}
      role="img"
    >
      <div className="mock-browser">
        <div className="mock-browser__bar">
          <span /><span /><span />
          <i />
        </div>
        <div className={`mock-site mock-site--${project.visual}`}>
          <div className="mock-site__nav">
            <span className="mock-site__brand">{project.name}</span>
            <span className="mock-site__links">ABOUT&nbsp;&nbsp;&nbsp; VISIT&nbsp;&nbsp;&nbsp; ↗</span>
          </div>
          {project.visual === 'restaurant' && (
            <div className="mock-restaurant">
              <div className="mock-restaurant__copy">
                <span>GOOD FOOD, GATHERED</span>
                <strong>A little<br />more local.</strong>
                <i>Seasonal plates. A seat at the table.</i>
              </div>
              <div className="mock-restaurant__dish" aria-hidden="true">
                <div className="mock-restaurant__plate"><span /></div>
              </div>
              <span className="mock-site__action">COME ON IN&nbsp; ↗</span>
            </div>
          )}
          {project.visual === 'fitness' && (
            <div className="mock-fitness">
              <span>YOUR NEIGHBORHOOD TRAINING CLUB</span>
              <strong>Find your<br />strong.</strong>
              <div className="mock-fitness__bottom">
                <span>TRAIN TO FEEL GOOD.<br />STAY FOR THE PEOPLE.</span>
                <span className="mock-fitness__sun" aria-hidden="true">✳</span>
              </div>
            </div>
          )}
          {project.visual === 'retail' && (
            <div className="mock-retail">
              <div className="mock-retail__copy">
                <span>THE EVERYDAY EDITION</span>
                <strong>Less, but<br />better.</strong>
                <i>Made to go places. Made to stay.</i>
                <span className="mock-site__action">SHOP THE COLLECTION&nbsp; ↗</span>
              </div>
              <div className="mock-retail__garment" aria-hidden="true">
                <div />
              </div>
            </div>
          )}
        </div>
      </div>
      <span aria-hidden="true" className="project-visual__note">CONCEPT WEBSITE — FICTIONAL BRAND</span>
    </div>
  )
}
