# Blog Website

A full-stack blog application built with React and Node.js, featuring user authentication, blog creation, and management.

## Features

- 🔐 User authentication (Login/Register)
- 📝 Create, read, update, and delete blog posts
- 👤 User-specific blog management
- 🎨 Modern UI with Material-UI
- 🔥 Real-time notifications with React Hot Toast
- 🗄️ MongoDB database integration

## Tech Stack

### Frontend
- React 19
- Material-UI (MUI)
- Redux Toolkit for state management
- React Router for navigation
- Axios for API calls
- React Hot Toast for notifications

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled
- RESTful API architecture

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### 2. Install backend dependencies

```bash
npm install
```

### 3. Install frontend dependencies

```bash
cd client
npm install
cd ..
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=8080
DEV_MODE=development
MONGO_URL=your_mongodb_connection_string
```

## Running the Application

### Development Mode

**Terminal 1 - Backend:**
```bash
npm start
```

**Terminal 2 - Frontend:**
```bash
cd client
npm start
```

The backend will run on `http://localhost:8080` and the frontend on `http://localhost:3000`.

## Project Structure

```
Blog-Website/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── redux/         # Redux store
│   │   └── App.js
│   └── package.json
├── config/                # Database configuration
├── controllers/           # Route controllers
├── models/               # MongoDB models
├── routes/               # API routes
├── middleware/           # Custom middleware
├── utils/                # Utility functions
├── server.js             # Express server
├── .env                  # Environment variables
└── package.json
```

## API Endpoints

### User Routes
- `POST /api/v1/user/register` - Register new user
- `POST /api/v1/user/login` - User login
- `GET /api/v1/user/all-users` - Get all users

### Blog Routes
- `GET /api/v1/blog/all-blog` - Get all blogs
- `POST /api/v1/blog/create-blog` - Create new blog
- `PUT /api/v1/blog/update-blog/:id` - Update blog
- `GET /api/v1/blog/get-blog/:id` - Get single blog
- `DELETE /api/v1/blog/delete-blog/:id` - Delete blog
- `GET /api/v1/blog/user-blog/:id` - Get user's blogs

## Deployment

See [GitHub & Deployment Guide](./DEPLOYMENT.md) for detailed instructions on deploying to various platforms.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Author

Bhargava Sai Karunya

## Acknowledgments

- Material-UI for the component library
- MongoDB Atlas for database hosting
- React team for the amazing framework
