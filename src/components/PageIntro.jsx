export default function PageIntro({ eyebrow, title, text, className = '' }) {
  return (
    <section className={`page-intro ${className}`.trim()}>
      <div className="container">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {text && <p className="page-intro__text">{text}</p>}
      </div>
    </section>
  )
}
