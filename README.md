#  Product Listing Page – Frontend Intern Test (SoftDef)

## Overview

This project is my submission for the **Frontend Developer Internship Test** at **SoftDef**.
The goal is to build a **pixel-perfect, responsive Product Listing Page** based on the given **Figma design**, using **Next.js** and **Tailwind CSS**.

---

##  Live Demo & Repository

* **Live Demo:** [https://product-listing-black.vercel.app/](https://product-listing-black.vercel.app/)
* **GitHub Repository:** [https://github.com/tsujit74/product-listing](https://github.com/tsujit74/product-listing)

---

## 🛠️ Tech Stack

* **Framework:** Next.js (React + TypeScript)
* **Styling:** Tailwind CSS
* **State Management:** React Hooks (no external libraries)
* **Icons:** Lucide / Heroicons
* **Deployment:** Vercel

---

## 📂 Project Structure

```
src/
├── app/                     
│   ├── favicon.ico
│   ├── globals.css       
│   ├── layout.tsx           
│   └── page.tsx             
│
├── components/
│   ├── Badge/
│   │   └── HotBadge.tsx    
│   │
│   ├── ProductGrid/
│   │   ├── Pagination.tsx   # Pagination component
│   │   ├── ProductGrid.tsx  # Product listing grid
│   │   ├── ProductCard.tsx  # Individual product card
│   │   └── ProductControl.tsx # Sorting & items per page
│   │
│   ├── Rating/
│   │   └── Rating.tsx       # Star rating
│   │
│   ├── Sidebar/
│   │   ├── Brand.tsx        # Brand filter with counts
│   │   ├── ColorFilter.tsx  
│   │   ├── HotDeals.tsx     # Hot deals section
│   │   ├── More.tsx         
│   │   ├── PriceFilter.tsx  # Price range filter
│   │   └── Sidebar.tsx      # Sidebar wrapper
│   │
│   ├── Footer.tsx           # Footer section
│   ├── Hero.tsx             # Hero section
│   └── Navbar.tsx           # Top navigation bar
│
├── data/
│   └── product.ts           # Mock dataset (24+ products)
│
└── types/
    └── product.ts           # TypeScript interface for products

```

---

## 🎯 Features Implemented

* **Pixel-perfect UI** matching Figma (spacing, typography, hover states).
* **Reusable Components:** Navbar, Sidebar, ProductCard, Badge, Rating, Pagination, Footer.
* **Sidebar Filters:** Expand/collapse with "view more" option.
* **Product Grid:** Responsive grid with image, HOT badge, title, price, discount, rating, quick actions.
* **Color Filter:** Select color → updates visual feedback on ProductCard.
* **Sorting & Pagination:** Name, Price, Popularity + client-side pagination (URL synced).
* **Responsiveness:** Fully responsive across desktop, tablet, and mobile.
* **Accessibility:** Alt text, ARIA attributes, keyboard navigation, focus states.
* **Performance:** Lazy-loaded images, responsive sizes.
* **Empty State:** Shown when no product matches filter.
* **Clean Commit History:** Step-by-step commits.

---

## 📊 Dataset

A mock dataset (`products.ts`) with 24+ products including:

* `id, name, price, discountPrice, discountPercent, ratingValue, ratingCount, isHot, colors[], category, imageUrl`

---

## ⚡ Setup & Run Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/tsujit74/product-listing.git
   cd product-listing
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Run the development server:

   ```bash
   npm run dev
   ```
4. Open in browser:

   ```
   http://localhost:3000
   ```

---

## 📌 Internship Test Rules (SoftDef)

* Pixel-perfect replication of Figma design.
* No UI libraries (MUI, Ant, Bootstrap).
* No state management libraries (Redux, Zustand, MobX).
* Only React/Next.js + Tailwind CSS.
* Mock dataset (no backend).
* Responsive + Accessible.
* Submit GitHub repo link + Vercel live URL.
* **No AI tools (strict rule). AI-generated code = disqualification.**

---

## 👤 Author

* **Name:** Sujit Thakur
* **Email:** [tsujeet440@gmail.com](mailto:tsujeet440@gmail.com)
* **Phone:** 7479713290
* **Portfolio:** [https://sujit-porttfolio.vercel.app/](https://sujit-porttfolio.vercel.app/)
* **GitHub:** [https://github.com/tsujit74](https://github.com/tsujit74)

---

**Declaration:** This project is developed individually by me without the use of AI tools, in compliance with SoftDef’s internship test rules.
