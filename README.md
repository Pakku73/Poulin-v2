# MKGBBOX - NextJS 14 - website boilerplate

This is a boilerplate for a NextJS 14 - website project. It includes a basic structure and some useful tools to start a project, including :

- [NextJS](https://nextjs.org/) as a React framework
- [TypeScript](https://www.typescriptlang.org/) for static typing
- [ESLint](https://eslint.org/) for linting
- [TailwindCSS](https://tailwindcss.com/) as a CSS framework

## Getting started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Build the project with `npm run build`

## Structure

```
app/
 (home)/
  page.tsx
 layout.tsx
 global.css
components/
  common/
   index.ts
  index.ts
containers/
  common/
   Button.tsx
   CustomHead.tsx
   Section.tsx
   index.ts
  index.ts
 data/
 hooks/
 layouts/
  Footer.tsx
  Header.tsx
  index.ts
 libs/
  fonts.ts
 types/
  index.ts
 public/
  assets/
   images/
   icons/
   fonts/
  favicon.ico

```

- `public/` : Contains all the static file ( images, fonts, etc. )
- `app/` : Contains all the pages and global styles
- `components/` : Contains all the components
- `containers/` : Contains all the reusable sections code
- `data/` : Contains all the static data
- `hooks/` : Contains all the custom hooks
- `layouts/` : Contains all the layout components ( Header, Footer, etc. )
- `libs/` : Contains all the global libraries ( fonts configuration, etc. )
- `types/` : Contains all the global types
