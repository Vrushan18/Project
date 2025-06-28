# 💬 Feedback Collector using Cloud

A simple web-based application designed to collect feedback from users through a lightweight frontend and a planned backend integration using Google Cloud Platform.

## 🌐 Overview

This project is aimed at creating a basic system where users can submit feedback (name + message) through a frontend form. The backend, although not fully functional at this stage, is intended to be powered by:

- **Google Cloud Functions** for serverless handling of submissions
- **Cloud Firestore** to store feedback data securely
- **GitHub Pages** to host the frontend

## 💡 Features

- Clean and simple HTML interface
- Form submission for feedback
- Backend integration plan using:
  - HTTP-triggered Cloud Function
  - NoSQL storage via Firestore

## 🛠️ Current Status

> ⚠️ **Note:**  
> This project is still in progress. While the frontend is functional, the backend services on GCP are not fully configured or deployed yet. The repo reflects the intended architecture and setup.

## 📁 Project Structure

```
feedback-collector/
├── frontend/          # Static HTML frontend
│   └── index.html
├── backend/           # Planned GCP Cloud Function (Node.js)
│   ├── index.js
│   └── package.json
└── README.md          # Project description and credits
```

## 🚀 Planned Technologies

- **Google Cloud Platform**
- **Cloud Functions (Node.js)**
- **Firestore Database**
- **GitHub Pages** for static hosting

## 📌 How it Works (Intended)

1. User submits feedback via the HTML form.
2. A Cloud Function receives the request and stores the data in Firestore.
3. (Optionally) an admin panel or dashboard can be added later for review.

---

## 👤 Made by

**Vrushan Patil**  
Student – Electronics and Computer Science Engineering  
Vidyalankar Institute of Technology  
