# 📝 MyBlog – A Modern Blogging Platform

Welcome to *MyBlog, a feature-rich and user-friendly blogging platform built with the **MERN stack* (MongoDB, Express.js, React, Node.js). This app offers a smooth writing and reading experience with modern UI design, authentication, and content management.

---

## 🚀 Features

- 🔐 User Authentication (Login/Register)
- 📝 Create, edit, and delete blog posts
- 📄 View single posts with tags, author info, and publication date
- 🌐 Responsive UI using *SCSS* and *Material UI (MUI)*
- 📬 Contact the author via email
- 🔎 Search posts by title or tags
- 💬 (Planned) Add comments under posts
- 📊 (Planned) Admin dashboard for analytics

---

## 🧠 AI Involvement

We used AI in different stages of building the *MyBlog* website to make development faster, easier, and better:

### 🔧 Planning the Project
- AI tools like ChatGPT helped us plan the website structure, select the tech stack, and define key features.

### 💻 Writing and Fixing Code
- AI assisted in generating boilerplate code for features like login, sign-up, and CRUD operations for posts.
- It helped identify and fix bugs by analyzing errors and suggesting better practices.

### ✍ Improving Blog Content
- AI formatted content into readable sections, suggested tags, and made the post text more engaging.

### 🎨 Design & UI Decisions
- Helped choose cleaner labels for buttons and messages.
- Provided layout suggestions to improve user experience.

---
### 🔧 Project Planning
- Helped define the folder structure and feature set.
- Assisted in choosing libraries and organizing routes.

### 💻 Code Writing & Debugging
- Generated reusable code (e.g., authentication, post CRUD APIs).
- Identified and fixed common coding bugs.

### ✍ Content Formatting
- Enhanced blog readability through proper formatting and structure.
- Suggested tags and improved clarity in blog content.

### 🎨 UI/UX Enhancements
- Suggested intuitive button labels, spacing, and layout improvements.
- Helped make the interface cleaner and more user-friendly.

---

## 📦 Tech Stack

| Frontend       | Backend        | Styling      | State Mgmt    | Database     |
|----------------|----------------|--------------|---------------|--------------|
| React          | Node.js        | SCSS, MUI    | Redux Toolkit | MongoDB      |
| React Router   | Express.js     |              |               |              |

---

## ⚙ Installation & Setup

### 1. Clone the Repository

\\\`bash
git clone https://github.com/anandpathak07/myblog_mittarv-.git
\\\`

### 2. Setup Frontend (Client)

\\\`bash
cd blog  # Navigate to frontend directory
npm install
npm run dev
\\\`

### 3. Setup Backend (Server)

\\\`bash
cd blog_backend  # Navigate to backend directory
npm install
npm run dev
\\\`

---

## 📁 Folder Structure

\\\`
myblog/
│
├── blog/               # React frontend
│   ├── components/
│   ├── pages/
│   ├── redux/
│   └── ...
│
├── blog_backend/       # Node.js + Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── ...
│
└── README.md
\\\`

---

## 🌐 Environment Variables

Create a .env file in both blog and blog_backend folders:

**Live At **
\\\`
https://myblog-mittarv-frontend.onrender.com
\\\`
*Frontend (.env)*
\\\`
VITE_REACT_APP_BACKEND_URL=https://myblog-mittarv-backend.onrender.com
\\\`

*Backend (.env)*
\\\`
PORT=8000
MONGO_URI=mongodb://localhost:27017/myblog
JWT_SECRET=your_jwt_secret

\\\`

---

## 📬 Contact

For feedback or questions, feel free to reach out via the *Contact Me* form in the app.# myblog_mittarv-
