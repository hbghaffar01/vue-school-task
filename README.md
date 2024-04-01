# Live
- Site link: https://vue-school-task.vercel.app/
- Sanity: https://cms-vue-school.sanity.studio

# User guide for using CMS
1. Create a Sanity access request by emailing hbghaffar01@gmail.com
2. Go to https://cms-vue-school.sanity.studio

# Development guide

## Setup

1. Install `pnpm` if needed

```bash
npm install -g pnpm
```

2. Develop the landing page

```bash
git clone git@github.com:hbghaffar01/vue-school-task.git

cd vue-school-task

pnpm install

pnpm run dev

# By default, the app runs on localhost:3000
```

3. Develop the Sanity CMS

# Repository link
https://github.com/hbghaffar01/vs-sanity.git

```bash
git git@github.com:hbghaffar01/vs-sanity.git

cd vs-sanity

pnpm install

pnpm run dev

# will redirect you to http://localhost:3333/structure
```

4. Tailwind Config Viewer
```bash
pnpm run dev

# This will provide you link http://localhost:3000/_tailwind/
```

## QnA
- step-by-step instructions on tasks:

- Whole content on Hero, lessons, courses, hours, and pricing card bullet points is dynamic when changed from the sanity build it reflect change on deployed site also.
- I had used three schema Hero, Statics, Lesson in which admin can update the data for the content in website
