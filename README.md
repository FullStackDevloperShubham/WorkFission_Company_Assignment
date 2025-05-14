# WorkFission_Company_Assignment

# 🛍️ Mini E-Commerce Platform with Two Tabs

A lightweight, full-stack web application that allows users to **submit products** and **view them** in a clean, card-style layout — with an optional smart **search feature** for enhanced usability.

---

## 🎯 Goal

Build a mini e-commerce-style platform where users can:
- ✅ Add and submit their products (e.g., chairs, tables, phones)
- ✅ View submitted products in a clean, responsive layout
- 🔍 Optionally search products using contextual or semantic search

---

## 🧱 Tech Stack

## What is used

| Layer             |Technology                                                                                    |
|-------------------|----------------------------------------------------------------------------------------------|
| Frontend          | React.js + Tailwind CSS + Axios + React Router                                               |
| Backend           | Node.js + Express + Prisma + Cloudinary (image handling) + Keyword Matching Based Searching  |
| Database          | PostgreSQL                                                                                   |
| Versioning        | Git & GitHub                                                                                 |
| External Services | Cloudinary (Image Upload & Delivery)                                                         |

## 📸 Screenshots

### 🧾 Product Submission Tab
![Product Submission Tab](./Front-end/public/Screenshot%20from%202025-05-14%2017-08-16.png)

### 📦 My Products Tab
![My Products Tab](./Front-end/public/Screenshot%20from%202025-05-14%2017-07-57.png)

### 🔍 Search Feature
![Search Feature](./Front-end/public/Screenshot%20from%202025-05-14%2017-08-31.png)

---

## 🖼️ Web App Layout

### 🧾 Tab 1: Product Submission
**Name:** `Product Submission`

Allows users to input and submit:
- 🏷️ Product Name  
- 💲 Price  
- 📝 Description  
- 🖼️ Image URL 

---

### 📦 Tab 2: My Products
**Name:** `My Products`

Displays a list of all submitted products in a responsive card layout:
- Shows **name**, **price**, **description**, and **image**
- Fetches product list from the backend
- Updates dynamically as new products are added

---

### 🔍 Optional Feature: Smart Search (Bonus)
Add a search bar at the top of the "My Products" tab:
- Basic search: by product name or keywords in the description
- Advanced : keyword-based matching

---

## 🔌 API Integration

## Includes experience working with:
- Backend API endpoints for POST (add product) and GET (fetch products)

---

## 🚀 Getting Started
Follow the steps below to set up and run the application locally.

---

1. Clone the Repository
First, clone the main repository:

git clone https://github.com/FullStackDevloperShubham/WorkFission_Company_Assignment
cd WorkFission_Company_Assignment
2. Set Up the Frontend
For the frontend:

Clone the frontend repository:


git clone https://github.com/FullStackDevloperShubham/WorkFission_Company_Assignment_Front-end

cd Front-end

npm install

Install the necessary dependencies:

npm run dev



3. Set Up the Backend

For the backend:

cd Back-end

npm install

Install the necessary dependencies

npm run dev


4. Set Up Environment Variables
You'll need to set up the following environment variables for both the frontend and backend.

Backend:
Create a .env file and add your PostgreSQL and Cloudinary credentials:

PostgreSQL credentials:

plaintext

DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
DB_PORT=your_database_port
Cloudinary credentials:

plaintext

CLOUDINARY_URL=your_cloudinary_url

If you're using Cloudinary for image handling, you may need to add your Cloudinary credentials in the frontend config.

5. Run the Development Server
Backend:
npm run dev
Start the backend server by running the following command:


Frontend:
npm run dev
Start the frontend server by running:



