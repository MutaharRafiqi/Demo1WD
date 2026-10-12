export default function SectionHeading({ eyebrow, title, text, dark = false }) {
  return (
    <div className={`section-heading${dark ? ' section-heading--dark' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="section-heading__text">{text}</p>}
    </div>
  )
}
