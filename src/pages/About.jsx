import Button from '../components/Button.jsx'
import ContactBand from '../components/ContactBand.jsx'
import PageIntro from '../components/PageIntro.jsx'
import { processSteps } from '../data/siteData.js'

const values = [
  {
    number: '01',
    title: 'Make it make sense.',
    text: 'A good website is easy to understand before it is clever. We start with useful content and clear paths, then make it feel distinctive.',
  },
  {
    number: '02',
    title: 'Treat the details with care.',
    text: 'Readable type, considered spacing, a page that works on a phone—small decisions shape the whole experience.',
  },
  {
    number: '03',
    title: 'Keep it human.',
    text: 'You should know what is happening and why. We explain the work in plain language, listen closely, and leave room for honest feedback.',
  },
]

export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="ABOUT THE STUDIO"
        title={<>Good websites start<br /><span>with listening.</span></>}
        text="Northstar Digital is a fictional small-studio concept with a simple idea: independent businesses deserve thoughtful websites without a complicated process."
        className="page-intro--dark"
      />
      <section className="about-manifesto section-pad">
        <div className="container about-manifesto__grid">
          <p className="eyebrow">WHAT WE BELIEVE</p>
          <div>
            <h2>Clear thinking.<br />Useful design.<br /><span>A website that feels like you.</span></h2>
            <p>We imagine working closely with local owners to understand the everyday details that make their business special—then turning that into a digital experience people can actually use.</p>
          </div>
        </div>
      </section>
      <section className="values-section section-pad section-pad--soft">
        <div className="container">
          <div className="split-heading">
            <div><p className="eyebrow">A FEW PRINCIPLES</p><h2>What guides the work.</h2></div>
            <p>Not a grand manifesto. Just a few practical beliefs we bring to every project.</p>
          </div>
          <div className="values-grid">
            {values.map((value) => (
              <article className="value-card" key={value.number}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="about-process section-pad">
        <div className="container">
          <div className="split-heading">
            <div><p className="eyebrow">HOW WE’D WORK TOGETHER</p><h2>A clear path, from hello to handoff.</h2></div>
            <p>Every project starts with a real conversation and a plan you can understand before work begins.</p>
          </div>
          <div className="about-process-list">
            {processSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p>
              </article>
            ))}
          </div>
          <p className="about-disclaimer">Northstar Digital and its examples are fictional demo content. No real team credentials, client history, or results are claimed.</p>
        </div>
      </section>
      <section className="about-cta">
        <div className="container about-cta__inner">
          <div><p className="eyebrow">READY WHEN YOU ARE</p><h2>Have a website idea<br />taking shape?</h2></div>
          <Button to="/contact">Let’s talk about it <span aria-hidden="true">↗</span></Button>
        </div>
      </section>
      <ContactBand />
    </>
  )
}
