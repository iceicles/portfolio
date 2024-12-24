## Tools

---

- React Framework: NextJS
- JS Library: React
- Styling Library: Tailwind, Framer Motion
- Coding Languages: Javascript, Typescript

## Third-party libraries

---

- DOMPurify
- React type animation
- React hook form
- EmailJS

## Production

---

- Deployed via Cloudflare (Initial deployment: Nov 15, 4:30pm)

## Project Struture

---

Used the guideline - https://medium.com/@mertenercan/nextjs-13-folder-structure-c3453d780366

- app

  - routes for different pages - /about, /tools etc

- components

  - different types of components include (buttons, cards, header, footer, forms, etc)

- containers

  - pages sub components (for example, home page can have a hero section but contact page may not need one)

- global constants

  - self explanatory lol

- types

  - expected properties and values for data

- utils

  - any one of functions that can be used in multiple components

- interface
  - shared interface within multiple components

## Some final thoughts:

- First app built with NextJS, Tailwind, and deployed using Cloudflare
- Used /src folder at first, deleted it and prefer this way
- As for the project structure, I've come to not like the splitting of components into containers and also components. I feel
  as though the components folder should suffice to store component-page-related code.
  For instance:
  Components folder
  -> UI -> Card, Footer, Buttons, etc...
  -> Some other component
  -> home-page -> Header, Footer, Some other component, etc...
  -> about-page -> Header, Footer, Some other compnent, etc...
  and so on...
  The goal is to open a page, for ex., home page, and see every components related to it instead of having it split into another folder like the Components folder
