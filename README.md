[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FBrianRuizy%2Fb-r.io)

# Website

This website is a clone of Brian Ruiz's personal portfolio website. All credit goes to Brian Ruiz for the design, features, and implementation.

The original website was designed to be simplistic and clean while including features like MDX blog posts with view counts, a dark mode toggle, an about page, and more. I am grateful for their work and the permission to use it.

You can check out his profile and projects here: [https://www.b-r.io/](https://github.com/BrianRuizy)

## Tech Stack

backend:

- [Next.js](nextjs.org) / TypeScript
- [MDX](https://mdxjs.com) / [Contentlayer](https://contentlayer.dev/) (Blog Posts)
- [Vercel Postgres](https://vercel.com/storage/postgres) (Database)

frontend:

- [Tailwind CSS](https://tailwindcss.com) (Styling)
- [Radix Primitives](https://www.radix-ui.com/primitives) (Headless UI components)
- [Radix UI Colors](https://www.radix-ui.com/colors) (Color system)
- [Framer Motion](https://www.framer.com/motion/) (Animations)

## Getting Started

Make sure you have Node.js v18.17.0+ installed on your machine.

1. **Install Dependencies**: `npm install`
2. **Environment variables**: Copy `.env.example` to a new `.env.local`
3. **Database Setup**: See [Database Setup](#database-setup)
4. **Start Developing**: `npm run dev`, this will automatically create the .contentlayer files and start the Next.js development server.

## Deployment

This project can be [quickly deployed to Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FBrianRuizy%2Fb-r.io). Simply connect your Vercel account to your GitHub repository, and Vercel will automatically build and deploy your application with each new push to the main branch.

Add the project .env variables to your Vercel project settings.

```

```
