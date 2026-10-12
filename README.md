# Northstar Digital — portfolio demo

A responsive agency website built with React, Vite, and plain CSS. All project examples and testimonials are fictional; this is a front-end portfolio demo, not a real agency or a live enquiry service.

## Run it locally

1. Install [Node.js](https://nodejs.org/) (the current LTS version includes npm).
2. Open a terminal in this folder and run `npm install`.
3. Run `npm run dev` and open the local address printed in the terminal.
4. Run `npm run build` to make a production build in `dist/`, or `npm run preview` to preview that build locally.

## Project structure

- `src/main.jsx` starts React and loads the stylesheets.
- `src/App.jsx` defines the page routes.
- `src/components/` contains the shared navigation, footer, buttons, and project visuals.
- `src/data/siteData.js` contains the editable fictional projects, services, process, and testimonials.
- `src/pages/` contains the page-level components.
- `src/styles/` contains design tokens, shared styles, and page layouts.

The contact form validates its fields in the browser and shows a local demo confirmation. It does **not** send or store a message. To receive real enquiries, connect the form to a backend or a form-handling service, configure secure spam protection, and update the on-page explanation before collecting submissions.

## Publishing

After `npm run build`, deploy the generated `dist/` directory to a static hosting service. Because the app uses client-side routes, configure the host to serve `index.html` as the fallback for page URLs such as `/services` and `/work/little-fig`. Do not publish the demo contact form as a real enquiry channel without first connecting and testing a form service.
