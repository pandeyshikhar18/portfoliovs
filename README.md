# Shikhar Pandey Portfolio

![Portfolio Screenshot](https://via.placeholder.com/800x400.png?text=Portfolio+Screenshot)

Welcome to my personal portfolio! This project showcases my research publications, GitHub repositories, and contact information. Built with **Next.js** and **TypeScript**, it is fully responsive and deployed on **Vercel**.

## Features

- **Publications Section**: Display of research papers and technical publications with links to sources.
- **GitHub Section**: Shows my favorite repositories and top projects dynamically fetched from GitHub API.
- **Contact Section**: Includes social media links and a resume download link.
- **Responsive Design**: Works beautifully on mobile, tablet, and desktop.
- **Dark/Light Mode**: Toggle between dark and light themes (if implemented).

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) - Scoped styling
- [Vercel](https://vercel.com/) - Deployment platform

## Project Structure

/pages
├─ index.tsx # Home page
├─ articles.tsx # Publications page
├─ github.tsx # GitHub repos page
└─ contact.tsx # Contact page
/components
├─ ArticleCard.tsx
├─ RepoCard.tsx
└─ ContactCode.tsx
/styles
├─ ArticlesPage.module.css
├─ GithubPage.module.css
├─ ContactPage.module.css
└─ ContactCode.module.css
/types
└─ index.ts # Article, Repo, User types
/public
└─ logos # Publication logos

bash
Copy
Edit

## Deployment

This portfolio is deployed on **Vercel**.  
Live demo: [https://shikharportfolio.vercel.app](https://shikharportfolio.vercel.app)

To deploy locally:

```bash
git clone https://github.com/pandeyshikhar18/portfoliovs.git
cd portfoliovs
npm install
npm run dev
Contact
Email: pandeyshikhar07@gmail.com

GitHub: pandeyshikhar18

LinkedIn: Shikhar Pandey

Resume: View Resume

License
This project is open-source and available under the MIT License.
