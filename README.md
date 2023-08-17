### ECOMMERCE NEXTJS 13 SANITY CMS TAILWIND

This app built with the tutorial of JSM as part of developer learning.
The tutorial was made before NextJS 13 launch, so if anyone trying to follow the tutorial make sure you set up your working folder following the old nextjs version so you wont end up using Server Side Rendering as NextJS 13 will automaticall have a folder called app, and all the code inside it will run as SSR unless you put 'use client' at the beginning of your code, still i found out some trouble even using the use client.

Some other things is the capturing the dynamic queries which is different if you compared NextJS 13 and the older version.
Older version route is created in pages folder, and [yourFolderName] and inside it you create [slug].js to capture the dynamic link.
In NextJS 13 you will have to create the folder in app folder (Following the changes to SSR), create [yourFolderName] and another folder [slug], and inside [slug] folder create a page.js which will capture the dynamic query if you go to home/[yourFolderName]/[dynamicQuery/slug]

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
