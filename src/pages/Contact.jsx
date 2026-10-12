import { cloneElement, useState } from 'react'
import PageIntro from '../components/PageIntro.jsx'

const websiteTypes = [
  'Business website',
  'Landing page',
  'Website redesign',
  'Website maintenance',
  'SEO or performance improvements',
  'Not sure yet',
]

const budgetRanges = [
  'Under $1,000',
  '$1,000–$2,500',
  '$2,500–$5,000',
  '$5,000+',
  'Not sure yet',
]

export default function Contact() {
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const nextErrors = {}

    for (const field of form.elements) {
      if (!field.name) continue
      const value = typeof field.value === 'string' ? field.value.trim() : ''

      if (field.required && !value) nextErrors[field.name] = 'Please fill out this field.'
      else if (field.name === 'description' && value.length < 20) {
        nextErrors[field.name] = 'Please add at least 20 characters.'
      } else if (!field.validity.valid) {
        if (field.validity.typeMismatch) nextErrors[field.name] = 'Please enter a valid email address.'
        else if (field.validity.tooLong) nextErrors[field.name] = 'Please shorten your answer.'
        else nextErrors[field.name] = 'Please check this field.'
      }
    }

    setErrors(nextErrors)
    setSubmitted(false)

    if (Object.keys(nextErrors).length > 0) {
      form.querySelector(`[name="${Object.keys(nextErrors)[0]}"]`)?.focus()
      return
    }

    setSubmitted(true)
    form.reset()
  }

  function clearFieldError(event) {
    const { name } = event.target
    setSubmitted(false)
    if (!name || !errors[name]) return
    setErrors((currentErrors) => {
      const nextErrors = { ...currentErrors }
      delete nextErrors[name]
      return nextErrors
    })
  }

  return (
    <>
      <PageIntro
        eyebrow="CONTACT"
        title={<>Tell us a little<br /><span>about your idea.</span></>}
        text="A few details will help us understand what you need. No pressure, no commitment—just a useful place to start."
        className="page-intro--dark page-intro--contact"
      />
      <section className="contact-section section-pad">
        <div className="container contact-layout">
          <div className="contact-aside">
            <p className="eyebrow">START WITH THE BASICS</p>
            <h2>Good projects<br />begin with a hello.</h2>
            <p>Share as much as you know. If you’re still figuring it out, that’s a perfectly good place to start too.</p>
            <div className="contact-aside__note">
              <span aria-hidden="true">i</span>
              <p>This is a front-end demo form. It does not send or store your information. Connect a form service or backend before using a contact form for real enquiries.</p>
            </div>
          </div>

          <form className="contact-form" noValidate onSubmit={handleSubmit} onChange={clearFieldError}>
            {submitted && (
              <div className="form-feedback form-feedback--success" role="status" tabIndex="-1">
                <strong>Your demo form looks good.</strong>
                <span>This was a local demonstration only—no message was sent or saved.</span>
              </div>
            )}
            {Object.keys(errors).length > 0 && (
              <div className="form-feedback form-feedback--error" role="alert">
                <strong>There are a few things to check.</strong>
                <span>Please review the highlighted fields before continuing.</span>
              </div>
            )}

            <div className="form-row">
              <FormField error={errors.name} label="Your name" name="name" required>
                <input autoComplete="name" id="name" maxLength="100" name="name" placeholder="Jane Smith" required />
              </FormField>
              <FormField error={errors.business} label="Business name" name="business">
                <input autoComplete="organization" id="business" maxLength="120" name="business" placeholder="Your business (if you have one)" />
              </FormField>
            </div>

            <FormField error={errors.email} label="Email address" name="email" required>
              <input autoComplete="email" id="email" maxLength="254" name="email" placeholder="jane@example.com" required type="email" />
            </FormField>

            <div className="form-row">
              <FormField error={errors.websiteType} label="What kind of website do you need?" name="websiteType" required>
                <select defaultValue="" id="websiteType" name="websiteType" required>
                  <option disabled value="">Choose the closest fit</option>
                  {websiteTypes.map((type) => <option key={type}>{type}</option>)}
                </select>
              </FormField>
              <FormField error={errors.budget} label="Approximate budget" name="budget" required>
                <select defaultValue="" id="budget" name="budget" required>
                  <option disabled value="">Choose a range</option>
                  {budgetRanges.map((range) => <option key={range}>{range}</option>)}
                </select>
              </FormField>
            </div>

            <FormField error={errors.description} label="A little about the project" name="description" required>
              <textarea
                id="description"
                maxLength="2000"
                minLength="20"
                name="description"
                placeholder="What does your business do, and what would you like your website to help with?"
                required
                rows="5"
              />
            </FormField>

            <button className="button button--primary contact-form__submit" type="submit">
              Check my demo message <span aria-hidden="true">↗</span>
            </button>
            <p className="contact-form__privacy">Please don’t enter confidential or sensitive information in this demo form.</p>
          </form>
        </div>
      </section>
    </>
  )
}

function FormField({ children, error, label, name, required = false }) {
  const errorId = `${name}-error`
  const control = cloneElement(children, {
    'aria-describedby': error ? errorId : undefined,
    'aria-invalid': error ? 'true' : undefined,
  })

  return (
    <div className={`form-field${error ? ' form-field--error' : ''}`}>
      <label htmlFor={name}>
        {label}{required ? <span aria-hidden="true"> *</span> : <small> (optional)</small>}
      </label>
      {control}
      {error && <span className="form-field__error" id={errorId}>{error}</span>}
    </div>
  )
}
