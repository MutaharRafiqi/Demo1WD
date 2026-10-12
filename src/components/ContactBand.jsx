import Button from './Button.jsx'

export default function ContactBand() {
  return (
    <section className="contact-band">
      <div className="container contact-band__inner">
        <div>
          <p className="eyebrow">HAVE A GOOD ONE IN MIND?</p>
          <h2>Let’s make your<br />next website count.</h2>
        </div>
        <Button to="/contact" variant="light">Tell us what you need <span aria-hidden="true">↗</span></Button>
      </div>
    </section>
  )
}
