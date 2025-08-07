# Go54 UI Clone (Next.js + Tailwind CSS)

This project is a **front-end UI** built with **Next.js** and **Tailwind CSS**, replicating the design of two Go54 pages:
- [Homepage](https://go54.com/)
- [Google Workspace Service Page](https://go54.com/google-workspace-service)

The application uses a **dummy API / mocked JSON data** to populate the **five tabs** on the homepage (`Domain`, `Hosting`, `Email`, `Marketing`, `More`).

---

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Oluwabambi/nextjs-frontend-test.git
   cd nextjs-frontend-test

2. **Install dependencies**
    ```bash
    npm install
    # or
    yarn install

3. **Run the development server**
npm run dev
# or
yarn dev

The app will be available at http://localhost:3000

3. **Build for production (optional)r**
npm run build
npm start

**Approach**
- Tech Stack:
    - Next.js for server-side rendering and page routing
    - Tailwind CSS for utility-first styling
    - TypeScript for type safety
    - Mock API using local JSON data and a free dummy API from mockapi.io

**Design Implementation:**
- Followed the exact layout and styles of Go54’s homepage and Google Workspace service page
- Ensured responsiveness for desktop and mobile
- Tabs on the homepage dynamically render content from mocked API data

**Code Structure:**

src/app/ – Next.js App Router components (index.tsx, google-workspace-service.tsx)

components/ – Reusable UI components (Header, Footer, Tabs, etc.)

data/ – Mock JSON files for API simulation

styles/ – Tailwind global styles and configuration with custom CSS

**Version Control & Deployment:**

Used Git for version control with clear commit messages

Deployed to Netlify for hosting. The two pages hosted on Netlify can be found here:
[Home Page](https://nextjs-assessment.netlify.app/)
[Google Workspace Service Page](https://nextjs-assessment.netlify.app/google-workspace-service)

**Known Limitations**
- The project uses mocked API data, so no real backend integration is present
- Pages are limited to the two specified designs — other Go54 pages are not included
- Certain animations or effects from the original site may be simplified
- SEO optimizations are minimal (can be improved if needed)
