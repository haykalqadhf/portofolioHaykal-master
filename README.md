# Personal Portfolio Website

A personal portfolio website built to showcase my background, projects, technical skills, and experience as a Junior Frontend Developer.

The website is designed with a clean and responsive interface, featuring interactive components and a dark/light theme to provide a comfortable browsing experience across different devices.

## Overview

This portfolio serves as a central place to introduce myself, highlight selected projects, and demonstrate my growing interest in frontend development and user interface design.

It is built using React and Vite, with Bootstrap 5 for responsive layouts and reusable UI components.

## Features

- **Responsive Design** – Adapts to different screen sizes and devices.
- **Dark & Light Mode** – Switch between dark and light themes.
- **Project Showcase** – Display selected projects with image previews, descriptions, and external links.
- **Technology Showcase** – Highlight technologies and development tools.
- **Contact Section** – Provide direct links to professional and social profiles.
- **Dynamic Content Management** – Portfolio content is organized in a centralized JSON file for easier updates.

## Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Building reusable UI components |
| JavaScript | Application logic and interactivity |
| Vite | Development server and build tooling |
| Bootstrap 5 | Responsive layout and styling |
| CSS3 | Custom styling and visual presentation |
| Swiper.js | Interactive project image sliders |
| React Icons | Icon components |
| Git & GitHub | Version control and source code management |

## Project Structure

```text
portfolio/
├── public/
│   └── assets/
│       ├── project-images/
│       └── resume.pdf
│
├── src/
│   ├── component/
│   │   ├── Navbar/
│   │   ├── Header/
│   │   ├── Project/
│   │   ├── Technology/
│   │   ├── Contact/
│   │   └── Footer/
│   │
│   ├── jsonData/
│   │   └── data.json
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── package.json
└── vite.config.js
```

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### Installation

1. Clone the repository:

```bash
git clone (https://github.com/haykalqadhf/portofolioHaykal-master.git)
```

2. Navigate to the project directory:

```bash
cd portofolioHaykal-master
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL provided by Vite in your browser.

### Production Build

To generate an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Customization

Most portfolio content can be updated through:

```text
src/jsonData/data.json
```

This file contains the main content for:

- Personal information and introduction
- Project descriptions and image paths
- Technology and tools
- Navigation links
- Contact information

Project images, profile pictures, and other static assets are stored in:

```text
public/assets/
```

## Project Goals

Through this project, I aim to:

- Strengthen my understanding of React component-based development.
- Practice building responsive and interactive user interfaces.
- Improve code organization and maintainability.
- Apply frontend development concepts through a practical project.
- Continuously improve my skills in modern web development.

## Author

**Muhammad Haykal Qadhafi**

Junior Frontend Developer focused on JavaScript and UI Development.

- GitHub: [@haykalqadhf](https://github.com/haykalqadhf)
- LinkedIn: [Haykal Qadhafi](https://www.linkedin.com/in/haykal-qadhafi/)
- Instagram: [@kalqadhf](https://www.instagram.com/kalqadhf/)

---

*Built with React, curiosity, and continuous learning.*
