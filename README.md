# 🏡 StayVista

**StayVista** is a full-stack accommodation listing web application inspired by platforms like Airbnb. Users can explore properties, create accounts, add and manage listings, upload images, leave reviews, and interact with location-based features.

🚀 **Live Demo:** https://stayvista-r2m6.onrender.com

📦 **GitHub:** https://github.com/devbyharsh/StayVista

---

## ✨ Features

* 🔐 User registration, login & logout
* 🛡️ Authentication & authorization
* 🏠 Create, edit & delete property listings
* 🖼️ Upload and manage listing images
* ⭐ Add and delete reviews
* 🗺️ Location and map integration
* 🔍 Browse property listings
* 📄 Detailed listing pages
* ⚠️ Server-side validation & error handling
* 📱 Responsive user interface
* ☁️ Cloud-based image storage
* 💾 MongoDB database

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript
* EJS
* EJS-Mate

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* Passport.js
* Passport-Local-Mongoose
* Express Session

### Cloud & APIs

* Cloudinary
* Multer
* Map API

### Development Tools

* Git
* GitHub
* Render
* VS Code
* Nodemon

---

## 🏗️ Application Architecture

StayVista follows a structured **MVC-style architecture**:

```text
User
  ↓
Routes
  ↓
Middleware
  ↓
Controllers
  ↓
Models
  ↓
MongoDB
```

The application also integrates external services such as Cloudinary for image storage and map services for location-based functionality.

---

## 📂 Project Structure

```text
StayVista/
│
├── controllers/
│
├── init/
│
├── models/
│
├── public/
│   ├── css/
│   └── js/
│
├── routes/
│
├── utils/
│
├── views/
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   ├── reviews/
│   └── users/
│
├── app.js
├── middleware.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/devbyharsh/StayVista.git
```

### 2. Navigate to the project

```bash
cd StayVista
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Create a `.env` file in the root directory:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_map_api_token
```

> ⚠️ Never upload your `.env` file or expose your API keys publicly.

### 5. Start the application

For development:

```bash
nodemon app.js
```

Or:

```bash
node app.js
```

The application will run locally at:

```text
http://localhost:8080
```

---

## 📚 What I Learned

StayVista was my **first major full-stack project** and an important part of my web development learning journey.

While building it, I practiced:

* Building RESTful routes with Express.js
* CRUD operations
* MongoDB database design
* Mongoose schemas and relationships
* User authentication
* Authorization and protected routes
* Express middleware
* Sessions and cookies
* Form validation
* Error handling
* Image uploads
* Cloudinary integration
* API integration
* EJS templating
* MVC project structure
* Git & GitHub
* Deploying a full-stack application using Render

Most importantly, I learned how the **frontend, backend, database, authentication, APIs, cloud services, and deployment** come together to form a complete web application.

---

## 🚀 Deployment

The application is deployed using **Render**.

### Production

🌐 **Live Demo:** https://stayvista-r2m6.onrender.com

The deployed application connects to external services including:

* MongoDB
* Cloudinary
* Map API

---

## 🔮 Future Improvements

Some features I plan to explore in future versions:

* ❤️ Wishlist / favorites
* 🔎 Advanced search and filtering
* 📅 Booking system
* 💳 Payment integration
* 👤 User profile pages
* 🧑‍💼 Admin dashboard
* 📱 Improved mobile experience
* 🗺️ More advanced map interactions
