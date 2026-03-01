🛒 Product Store – MERN Stack Application

A full-stack Product Store web application built using the MERN stack where users can create, view, update, and delete products.

🌍 Live Demo: https://product-store-rgx0.onrender.com

📂 Repository: https://github.com/aryan-main027/Product-Store

🚀 Features

✅ Create new products

📦 View all products

✏️ Update product details

🗑 Delete products

🌙 Modern responsive UI

☁️ Deployed on Render

🗄 MongoDB Atlas database integration

🛠 Tech Stack
Frontend

React (Vite)

Tailwind CSS

Axios

Backend

Node.js

Express.js

MongoDB

Mongoose

Deployment

Render (Backend + Frontend)

MongoDB Atlas (Cloud Database)

📁 Project Structure
Product-Store/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── index.js
│
├── frontend/
│   ├── src/
│   └── dist/ (generated after build)
│
├── package.json
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/aryan-main027/Product-Store.git
cd Product-Store
2️⃣ Install Dependencies

For backend:

cd backend
npm install

For frontend:

cd frontend
npm install
3️⃣ Setup Environment Variables

Create a .env file inside the backend folder:

MONGO_URI=your_mongodb_connection_string
PORT=5000

⚠️ If deploying on Render, DO NOT manually set PORT.
Use:

const PORT = process.env.PORT || 5000;
4️⃣ Run Locally

Backend:

npm run start

Frontend:

npm run dev
🏗 Build for Production

From frontend folder:

npm run build

Backend serves the built frontend using:

app.use(express.static(path.join(__dirname, "frontend", "dist")));
🌐 Deployment

This project is deployed on:

Render (Web Service)

MongoDB Atlas (Database)

Steps followed:

Used process.env.PORT

Added MongoDB Atlas IP whitelist (0.0.0.0/0)

Configured production build

Served frontend from backend

📸 Screenshots (Optional – You Can Add Later)

You can add images like:

![Homepage Screenshot](./screenshots/home.png)
🧠 What I Learned

MERN stack integration

Connecting cloud MongoDB database

Handling environment variables

Deployment debugging (PORT & DB issues)

Serving React build from Express server

✨ Future Improvements

User authentication (JWT)

Admin dashboard

Image upload (Cloudinary)

Pagination & search

Category filtering

👨‍💻 Author

Aryan Shashwat
GitHub: https://github.com/aryan-main027
