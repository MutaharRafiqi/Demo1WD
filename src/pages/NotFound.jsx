import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="not-found section-pad">
      <div className="container">
        <p className="eyebrow">404 — PAGE NOT FOUND</p>
        <h1>Looks like this<br />isn’t the right direction.</h1>
        <Link className="text-link" to="/">Back to the homepage <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  )
}
