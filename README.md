## [Next.js Portfolio Website](https://paul-lorenc.com)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). 

## Overview
The website features 4 main pages `/`, `/code`, `/images`, and `/links`:

- `/` - displays the 10 most recent [`Slates`](https://slate.host/lorenc) and [`MDX`](https://mdxjs.com/) posts in order.
- `/code` - displays all of my code projects, with most recently updated posts first, which are held in mdx files under the hood.
- `/images` - displays all of my [`Slates`](https://slate.host/lorenc), with most recently updated slates first. 
- `/links` - a static page displaying a small bio and links to my other webpages.

#### Dynamic Pages
The website also features two [`dynamic routes`](https://nextjs.org/docs/routing/dynamic-routes):

- `/code/[slug]` - displays the detailed content of the corresponding code project
- `/images/[slug]` - displays the contents of the corresponding Slate

## Content Management
This website was built because my first react website was hard coded, which made content management a pain. For this website, I add new code projects by writing up the post in [`MDX`](https://mdxjs.com/), and adding it to the `/data/code` directory, then pushing to the main branch which will automatically redeploy my app with [`Vercel`](https://vercel.com/). As long as I correctly add the [`Front Matter`](https://jekyllrb.com/docs/front-matter/) to the post, I am able to parse it programatically using [`next-mdx-advanced`](https://github.com/hashicorp/next-mdx-enhanced) and add it to the website's feeds automatically. 

For image hosting I use [`Slate`](slate.host). They give you access to simple REST API which allows you to get all of your slates, and get slates by ID, which is really all you need for a simple portfolio like I have made. Slate has been continuing to add support for more filetypes which could be useful in the future. To add new images I simply upload new files, then add them to existing slates or create a new slate and add them there.  

## Styling
I styled this website using [`Tailwind CSS`](https://tailwindcss.com/) 

## Running Locally

```
bash
$ git clone https://github.com/paul-lorenc/next-portfolio.git
$ cd next-portfolio
$ npm install
```

and then add your Slate API key:

create a `.env.local` file in the root directory and add an environment variable called `SLATE_API_KEY=yourapikeyhere` in order for the site to build correctly. You can find a slate API key under the "API" section of the main Slate menu. After you complete this, run the website using:
```
npm run dev
```

## Deploy on Vercel
I deployed my Nextjs site using Vercel, this was relatively straightforward, I needed to add an environment variable using their interface and also needed to make my purge entry of my `tailwind.config.ts` account for `.ts` and `.tsx` files:
```
purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**",
]
```
## Built Using
- [`Next.js`](https://nextjs.org/)
- [`Vercel`](https://vercel.com/)
- [`Typescript`](https://www.typescriptlang.org/)
- [`Tailwind CSS`](https://tailwindcss.com/)
- [`next-seo`](https://github.com/garmeeh/next-seo)
- [`MDX`](https://mdxjs.com/)
- [`next-mdx-remote`](https://github.com/hashicorp/next-mdx-remote)
- [`@mdx-js/react`](https://www.npmjs.com/package/@mdx-js/react)
- [`globby`](https://www.npmjs.com/package/globby)

## Resources
I would not have been able to make this site without the help of extensive online resources surrounding these technologies, here are the resources I used to put together this site:

- [`Nextjs MDX Blog`](https://dev.to/jashnm/making-mdx-blog-with-next-js-part-1-1c0j)
- [`Lee Robinson`](leerob.io) - Reference Site [`Github`](https://github.com/leerob/leerob.io) and also his numerous blog posts about the above technologies.
- [`Next.js Docs`](https://nextjs.org/docs/basic-features/pages)
