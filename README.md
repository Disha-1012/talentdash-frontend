# TalentDash Frontend

A salary intelligence dashboard built as a frontend engineering trial task.

TalentDash helps users explore software engineer compensation data, filter salary records, view company-level salary insights, and compare compensation between companies.

---

## Live Demo

Live URL:

(Add deployed URL here)

---

## Repository

GitHub:

(Add repository URL here)

---

# Tech Stack

- Next.js 16 (App Router)
- TypeScript
- React
- Tailwind CSS
- JavaScript
- Vercel Deployment

---

# Features Implemented

## 1. Salary Dashboard

### Route:

`/salaries`

### Features:

- Salary records table
- 60+ mock salary records
- Company search
- Role filtering
- Location filtering
- Level filtering
- Currency filtering
- URL-based filter state management
- Sorting functionality:
  - Total Compensation
  - Base Salary
  - Experience
  - Recently Added
- Pagination
- Empty state handling


---

## 2. Company Profile Pages

### Route:

`/companies/[slug]`

### Features:

- Dynamic company profile pages
- Static generation using `generateStaticParams()`
- Company information display:
  - Industry
  - Founded year
  - Employee count
  - Headquarters
- Median compensation calculation
- Level distribution visualization
- Company-specific salary records


---

## 3. Salary Comparison

### Route:

`/compare`

### Features:

- Two company selectors
- Median compensation comparison
- Compensation difference calculation
- Percentage difference calculation


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

# Getting Started

## Prerequisites

Make sure you have installed:

- Node.js 18+
- npm


---

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