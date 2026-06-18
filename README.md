# TalentDash Frontend

A salary intelligence dashboard built as a frontend engineering trial task.

TalentDash helps users explore software engineer compensation data, filter salary records, view company-level salary insights, and compare compensation between companies.

---

## Live Demo

Live URL:

https://talentdash-frontend.vercel.app/

---

## Repository

GitHub:

https://github.com/Disha-1012/talentdash-frontend

---

# Tech Stack

- Next.js 16 (App Router)
- React Server Components
- TypeScript (Strict Mode)
- Tailwind CSS
- ESLint
- Vercel Deployment
- Mock JSON Seed Data

---

# Features Implemented

## 1. Salary Dashboard

### Route:

`/salaries`

### Features:

- Salary records table
- 60+ mock salary records
- Company search with URL state
- Role filtering
- Location filtering
- Level multi-select filtering
- Currency toggle (INR/USD)
- Shareable URL filters

Example:

/salaries?company=amazon&level=L4&location=Bengaluru

- Sorting:
  - Total Compensation
  - Base Salary
  - Experience
  - Recently Added

- Pagination (25 records/page)
- Empty state handling
- Level badge system:
  - L3 / SDE-I
  - L4 / SDE-II
  - L5 / SDE-III
  - L6 / Staff
  - Principal

- Missing bonus/stock handled as "—"
- Salary records validated against schema


---

## 2. Company Profile Pages

### Features:

- Dynamic company profile pages

Route:

/companies/[slug]


- Static generation using generateStaticParams()

- Company header:
  - Industry
  - Founded year
  - Headcount
  - Headquarters

- Compensation overview:
  - Median Total Compensation
  - Minimum compensation
  - Maximum compensation
  - Record count

- Dynamic level distribution bar

- Company filtered salary table

- Compare button:
/compare?s1={id}

- Invalid slug returns 404


---

## 3. Salary Comparison

### Route:

`/compare`

### Features:

- Salary record comparison

Route:

/compare


- Two salary record selectors

- URL state:

/compare?s1={id}&s2={id}


- Shareable comparison URL

- Side-by-side comparison:

  - Company
  - Role
  - Level
  - Location
  - Experience
  - Base
  - Bonus
  - Stock
  - Total Compensation


- Delta calculation:

Positive:
Record A pays higher

Negative:
Record B pays higher


- Higher TC winner badge


---

# Project Architecture

The application follows a Next.js App Router architecture.

```
talentdash-frontend/

│
├── app/
│
│ ├── salaries/
│ │ └── page.tsx
│ │
│ ├── companies/
│ │ └── [slug]/
│ │     └── page.tsx
│ │
│ ├── compare/
│ │ └── page.tsx
│ │
│ ├── layout.tsx
│ └── globals.css
│
│
├── components/
│
│ ├── features/
│ │
│ │ ├── FilterBar.tsx
│ │ ├── SortSelect.tsx
│ │ ├── SalaryTable.tsx
│ │ ├── SalaryPageClient.tsx
│ │ └── CompareSalary.tsx
│ │
│ └── ui/
│     └── Navbar.tsx
│
│
├── lib/
│
│ ├── mock-data.ts
│ └── company-data.ts
│
│
├── types/
│
│ └── salary.ts
│
├── package.json
└── README.md

```

---

# SEO Implementation

Implemented:

- Page metadata
- Canonical URLs
- Open Graph metadata
- JSON-LD structured data
- sitemap.xml
- robots.txt


Structured data:

Schema.org Dataset

Used for salary dataset indexing.

# Getting Started

## Prerequisites

Make sure you have installed:

- Node.js 18+
- npm


---

# Performance

Optimizations:

- Salary table remains Server Component
- Client JS minimized
- Interactive components isolated
- No unnecessary layout shift
- Loading states added
- Lighthouse tested


Targets:

LCP < 2 seconds
CLS < 0.1

# Installation

## Clone Repository

```bash
git clone <repository-url>

cd talentdash-frontend
```


---

## Install Dependencies

```bash
npm install
```


---

## Run Development Server

```bash
npm run dev
```

---

## Architecture Overview

The project follows a component-based Next.js App Router architecture.

- App routes handle page-level rendering.
- Feature components handle reusable UI and interactions.
- Mock data layer simulates salary records.
- URL query parameters maintain filter state.
- Server components handle data processing.
- Client components handle interactive UI.


---

## Trade-off Decisions

- Used mock salary data instead of an external API because the task focuses on frontend implementation and UI behavior.
- Used URL query parameters for filters because it makes filtered pages shareable and preserves application state.
- Used client components only where interactivity was required, keeping other pages server-rendered for better performance.
- Calculated median compensation dynamically instead of storing derived values to keep the data consistent.


---

# Author

Disha Dutta

Frontend Engineering Trial Project