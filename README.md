# DomcolJS

This project is a website that plots the domain coloring of complex-valued
functions. It utilizes a parser written in ANTLR that accepts a mathematical
equation and outputs code in GLSL, which is then rendered using ThreeJS.
Because of this, renders are extremely fast and can therefore be interacted
with, e.g. by dragging the plot around or zooming into it.

## Screenshots

![screenshot 1](public/screenshots/screenshot1.png)
![screenshot 2](public/screenshots/screenshot2.png)

## Tech Stack

This website utilizes the following technologies:
- [NextJS](https://nextjs.org/)
- [ThreeJS](https://threejs.org/)
- [ANTLR](https://www.antlr.org/)
- [Redux](https://redux-toolkit.js.org/)
- [Storybook](https://storybook.js.org/)
- [Cypress](https://www.cypress.io/)

## Project Structure

This project takes on the following structure:
-  `/.storybook`: Storybook configuration files.
- `/components`: Any isolated components for the application. Each
   component is placed in its own directory along with its stylesheet,
   storybook and component tests. For example, in the directory
   `/components/Base` are located the files `Base.tsx`, `Base.module.scss`,
   `Base.stories.tsx` and `Base.test.tsx`.
   - Any directory that starts with an underscore, like `/components/_plot`,
     belongs to a page.
- `/cypress`: Cypress-related files (except for component tests).
- `/data`: Non-JSX files, such as the ANTLR parser used to parse LaTeX
   to GLSL.
- `/hooks`: Custom React hooks.
- `/pages`: The websites pages rendered by Next.JS.
- `/public`: Statically served files.
- `/redux`: Any Redux-related data, such as the Redux-store.
- `/styles`: Global stylesheets and stylesheets for the pages.

## Storybook

Ideally, every component has its own story. To view them,
execute `yarn storybook`.

## Testing

Cypress is the testing library of choice for this application.
Useful Tests will be added soon.

## Deployment

This website was uploaded on *Vercel* and is publicly accessible
[here](https://domcol-js.vercel.app).
