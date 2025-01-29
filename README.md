This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), with a Nextra Docs Template : https://github.com/shuding/nextra-docs-template

## Developpement

To run the development server:

```bash
npm run dev
```

Now you can go to :
`http://localhost:3000/nextra-4-doc-boilerplate`
to see the result

## Deploy (github-pages)

Go to the `next.config.ts` and edit the folowing parameters :

```
    basePath: "/<your-repository-name>",
    assetPrefix: "/<your-repository-name>",
```

and run :
`npm run deploy`

This will build your application, create a `gh-pages` branch and deploy the page for you

> a `/out` folder will be generated

## Files and Folders

Since the application is based on NextJs 15 with `app router`, to add a page you to respect the folowing structure :

```
docs
| page1
| | page.mdx
| page2
| | page.mdx
| subfolder
| | subpage1
| | | page.mdx
| | subpage2
| | | page.mdx
```

Each page must have properties that describe the page's identity:

```
---
title: MainPage
sidebarTitle: main
asIndexPage: true
---
```
