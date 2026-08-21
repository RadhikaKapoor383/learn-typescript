
Claude finished the response
how to get diff achivements in github


Searched the web
Searched the web
GitHub par 2 alag "achievements" hote hain — clear kar deti hoon:

Jo humne README mein likha, wo sirf tumhara custom text hai (SIMPACT '26 wagera) — automatic nahi hai.
GitHub ke apne official Achievement badges hote hain jo profile page pe (top, bio ke paas) automatically dikhte hain jab tum kuch specific actions complete karti ho.
Yahan wo doosre wale hain — kaise unlock karne hain:

Pull Shark — Apni koi PR merge karwao kisi repo mein (tiers: 2, 16, 128, 1024 merged PRs pe upgrade hota hai)

YOLO — Apni khud ki PR without review merge karo (agar repo mein branch protection nahi hai toh tum khud admin-merge kar sakti ho)

Quickdraw — Ek issue ya PR banao aur usse 5 minute ke andar close kar do

Pair Extraordinaire — Kisi commit mein Co-authored-by: add karke ek PR merge karwao (tiers similarly 2/16/128 pe)

Galaxy Brain — GitHub Discussions mein kisi thread pe apna answer "accepted" mark karwao (2, 8, 16, 32 accepted answers ke tiers)

Starstruck — Apni koi repo banao jisko 16+ stars milein (128, 512, 4096 pe higher tiers)

Open Sourcerer — Multiple alag public repos mein apni PRs merge karwao

Public Sponsor — GitHub Sponsors ke through kisi open-source dev/org ko sponsor karo (credit card add karke chhota sa donation)

Heart On Your Sleeve — Kisi issue, PR, ya discussion pe emoji reaction do

Do purane badges — Arctic Code Vault Contributor aur Mars 2020 Contributor — special historical events (2020) ke liye the, ab naye tareeke se unlock nahi ho sakte, skip kar do unko.

Sabse easy tumhare liye: Pull Shark aur Quickdraw — kisi apni hi repo mein ek chhota sa change PR ke through merge kar do, badge turant unlock ho jayega.

Check/enable karne ke liye: Settings → Profile → "Show Achievements on my profile" checkbox on honi chahiye. Badge unlock hone ke baad kabhi kabhi dikhne mein thoda time (caching) lag sakta hai.

how to get it


Thought for 17s
Thought for 17s
Sabse easy 3 badges (Pull Shark + Quickdraw + YOLO) ek hi scratch repo mein 5 minute mein unlock ho sakte hain — yeh raha step-by-step:

Naya branch banao aur chhota change karo
Repo mein ek naya branch banao (e.g. test-update), README.md mein ek line edit karo, commit karo, aur branch ko push kar do.
1
2
3
4
5
6
Bonus tip: Pair Extraordinaire bhi easily mil jayega agar step 3 wale commit mein Co-authored-by: Friend Name <email> line commit message ke end mein add kar do — kisi doston ka GitHub email daal sakti ho co-author ke liye.



Message collapsed

Created a file, read a file
Created a file, read a file

You are out of free messages until 7:40 AM




Claude is AI and can make mistakes. Please double-check responses.


Learn typescript readme · MD
# learn-typescript
 
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
 
A simple TypeScript learning workspace built around a React + Vite application — used to practice TypeScript fundamentals and typed React patterns.
 
## What this covers
- Core TypeScript concepts: types, interfaces, and generics
- Typed React components, props, and hooks
- Vite as a build tool and dev server
## Project Structure
```
learn-typescript/
└── my-ts-app/
    ├── package.json      # scripts, dependencies, and devDependencies
    ├── tsconfig.json     # TypeScript compiler configuration
    ├── vite.config.ts    # Vite build and dev server configuration
    └── src/               # application source files
```
 
## Prerequisites
- Node.js (v18 or later recommended)
- npm
## Getting Started
1. Open `learn-typescript/my-ts-app` in a terminal
2. Run `npm install`
3. Run `npm run dev` to start the development server
## Available Scripts
 
| Script | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the production bundle |
| `npm run lint` | Run ESLint checks on the source |
| `npm run preview` | Preview the production build locally |
 
## Notes
- The app uses React 19 with TypeScript and Vite.
- For more details on the app setup, see `my-ts-app/README.md`.
 
