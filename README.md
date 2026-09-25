# 🏋️ FitLog — Workout Library

FitLog is a modern workout library web application that helps users discover exercises, create a daily workout plan, save workouts for later, and track completed exercises.

The application provides a clean dark-themed interface with responsive design for desktop, tablet, and mobile devices.

---

## 🚀 Technologies Used

- Next.js
- React.js
- TypeScript
- Tailwind CSS
- React Context API
- React Toastify
- Lucide React
- Next/Image
- REST API
- Vercel

---

## ✨ Key Features

### 1. 🏋️ Workout Library
Browse a collection of workouts with useful information such as:

- Exercise name
- Muscle groups
- Equipment
- Duration
- Calories burned
- Rating
- Difficulty level

Users can click on any workout to view its complete details.

### 2. 📋 Today's Workout Plan
Users can add workouts to their daily plan.

The My Plan page shows:

- Total exercises
- Total workout minutes
- Total calories
- Workout details
- Maximum 5 workouts per plan

### 3. ❤️ Save Workouts for Later
Users can save their favorite workouts for later.

Saved workouts are available from the **Saved** tab inside the My Plan page.

### 4. ✅ Mark Workout as Done
Users can mark a workout as completed.

When a workout is completed:

- The workout gets visually marked as done
- The title gets a line-through effect
- A success toast notification is displayed

Users can also undo the completed status.

### 5. 🔍 Workout Sorting
Users can sort their workouts based on:

- Duration
- Calories burned
- Rating

Both ascending and descending sorting are supported.

---

## 📱 Responsive Design

FitLog is designed to work across different screen sizes:

- 💻 Desktop
- 📱 Mobile
- 📟 Tablet

The layout automatically adapts to different screen sizes using Tailwind CSS responsive utilities.

---

## 📄 Pages

The project includes the following pages:

- `/` — Workout Library
- `/library/[id]` — Workout Details
- `/my-plan` — Today's Plan and Saved Workouts
- `404` — Custom Not Found Page

---

## 🔄 Data Source

Workout data is loaded from the FitLog REST API.

The application fetches workout information dynamically and displays it throughout the application.


