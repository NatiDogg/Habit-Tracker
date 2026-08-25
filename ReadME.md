# 🌱 Habit Tracker

> **Build better habits. Track your progress. Stay consistent.**

Habit Tracker is a full-stack web application built with the **MERN stack** that helps users create, manage, and track their daily habits.

Users can record their daily progress, maintain streaks, and view statistics to understand their consistency and improve their habits over time.

---

## ✨ Features

### 🔐 Authentication

* User registration
* User login
* Secure password hashing with bcrypt
* JWT-based authentication
* Protected routes
* User-specific data access

### 🎯 Habit Management

* Create habits
* Edit habits
* Delete habits
* View habit details
* Set habit descriptions
* Customize habit colors and icons
* Define target days

### ✅ Daily Tracking

* Mark habits as completed
* Undo daily completion
* Prevent duplicate completion records for the same day
* View habit completion history

### 🔥 Streak Tracking

* Current streak
* Longest streak
* Daily completion tracking
* Consistency tracking

### 📊 Statistics & Analytics

* Total habits
* Completed habits
* Completion rate
* Weekly progress
* Monthly progress
* Habit performance
* Activity history

### 🎨 User Interface

* Clean and modern design
* Responsive layout
* Light/white theme
* HabitFlow branding
* Interactive dashboard
* Loading states
* Empty states
* Error handling
* User feedback and confirmations

---

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Tailwind CSS
* React Router
* Axios

### Backend

* Node.js
* Express.js
* TypeScript
* JWT
* bcrypt

### Database

* MongoDB
* Mongoose

### Development Tools

* Git
* GitHub
* Postman / Thunder Client
* npm

---

## 🏗️ Architecture

The application follows a client server architecture:

```text
┌──────────────────────┐
│      React App       │
│      Frontend        │
└──────────┬───────────┘
           │
           │ HTTP / REST API
           ▼
┌──────────────────────┐
│    Express + Node    │
│       Backend        │
└──────────┬───────────┘
           │
           │ Mongoose
           ▼
┌──────────────────────┐
│       MongoDB        │
│       Database       │
└──────────────────────┘
```

---

## 📁 Project Structure

```text
habit-tracker/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── context/
│   │   ├── types/
│   │   └── App.tsx
│   │
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── config/
│   │   └── server.ts
│   │
│   └── package.json
│
└── README.md
```

---

## 🗄️ Database Models

The application uses three primary collections.

### User

Stores user account information.

```text
User
├── _id
├── name
├── email
├── password
└── createdAt
```

### Habit

Stores the habits created by users.

```text
Habit
├── _id
├── userId
├── title
├── description
├── color
├── icon
├── targetDays
├── createdAt
└── updatedAt
```

### HabitLog

Stores daily habit completion records.

```text
HabitLog
├── _id
├── habitId
├── date
└── completed
```

Relationship:

```text
User
 │
 └── Habit
       │
       └── HabitLog
```

---

## 🔑 API Overview

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Habits

```http
GET    /api/habits
POST   /api/habits
GET    /api/habits/:id
PATCH  /api/habits/:id
DELETE /api/habits/:id
```

### Habit Completion

```http
POST   /api/habits/:id/complete
DELETE /api/habits/:id/complete
GET    /api/habits/:id/logs
```

### Statistics

```http
GET /api/stats
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/NatiDogg/habit-tracker.git
```

```bash
cd habit-tracker
```

---

### 2. Install backend dependencies

```bash
cd server
npm install
```

---

### 3. Configure environment variables

Create a `.env` file inside the `server` directory:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:5173
```

---

### 4. Start the backend

```bash
npm run dev
```

The backend should run on:

```text
http://localhost:5000
```

---

### 5. Install frontend dependencies

Open another terminal:

```bash
cd client
npm install
```

---

### 6. Start the frontend

```bash
npm run dev
```

The frontend should run on:

```text
http://localhost:5173
```

---

## 🔒 Environment Variables

Never commit your `.env` file to GitHub.

Example:

```env
MONGODB_URI=
JWT_SECRET=
PORT=
CLIENT_URL=
```

Make sure `.env` is included in `.gitignore`.

---

## 🚀 Future Improvements

Possible future features include:

* 🔔 Habit reminders
* 📱 Progressive Web App support
* 📅 Advanced calendar tracking
* 🏆 Achievement system
* 🥇 Habit milestones
* 📈 More advanced analytics
* 👥 Social habit challenges
* 🔄 Recurring habit schedules
* 🌍 Timezone-aware habit tracking
* 📧 Email reminders

---

## 🎯 Project Goals

This project was created to practice and demonstrate full stack development using the MERN stack.

The main learning goals include:

* REST API development
* MongoDB database design
* Mongoose relationships and queries
* Authentication and authorization
* React application architecture
* TypeScript
* API integration
* CRUD operations
* Data validation
* Error handling
* Git and GitHub workflow
* Full stack application development

---

## 👨‍💻 Author

**Natnael Wondimu**

MERN Stack Developer

---


