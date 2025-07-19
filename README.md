# MERN Task Manager - Deployment and DevOps

[![Frontend CI](https://github.com/your-username/week-7-devops-deployment-assignment-Caprice-Instinct/actions/workflows/frontend-ci.yml/badge.svg)](https://github.com/your-username/week-7-devops-deployment-assignment-Caprice-Instinct/actions/workflows/frontend-ci.yml)
[![Backend CI](https://github.com/your-username/week-7-devops-deployment-assignment-Caprice-Instinct/actions/workflows/backend-ci.yml/badge.svg)](https://github.com/your-username/week-7-devops-deployment-assignment-Caprice-Instinct/actions/workflows/backend-ci.yml)

A full-stack MERN (MongoDB, Express, React, Node.js) task management application with CI/CD pipelines and production deployment.

## 🚀 Deployed Application

- **Frontend**: [https://mern-task-manager.vercel.app](https://mern-task-manager.vercel.app)
- **Backend API**: [https://mern-task-manager-api.onrender.com](https://mern-task-manager-api.onrender.com)
- **API Health Check**: [https://mern-task-manager-api.onrender.com/api/health](https://mern-task-manager-api.onrender.com/api/health)

## 📋 Features

- User authentication and authorization
- Task creation, reading, updating, and deletion
- Task filtering and sorting
- Responsive design for mobile and desktop
- Production-ready deployment with CI/CD
- Monitoring and error tracking

## 🛠️ Technologies Used

### Backend
- Node.js & Express.js
- MongoDB with Mongoose ODM
- JWT Authentication
- Winston for logging
- Helmet for security headers
- Sentry for error tracking

### Frontend
- React with React Router
- Context API for state management
- Axios for API requests
- Code splitting for performance
- Environment variable configuration

### DevOps & Deployment
- GitHub Actions for CI/CD
- Render for backend hosting
- Vercel for frontend hosting
- MongoDB Atlas for database
- Sentry for error monitoring
- UptimeRobot for uptime monitoring

## 🔧 Local Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Backend Setup

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/week-7-devops-deployment-assignment-Caprice-Instinct.git
   cd week-7-devops-deployment-assignment-Caprice-Instinct
   ```

2. Install backend dependencies
   ```bash
   cd server
   npm install
   ```

3. Create a `.env` file based on `.env.example`
   ```bash
   cp .env.example .env
   # Edit .env with your MongoDB URI and JWT secret
   ```

4. Start the backend server
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Install frontend dependencies
   ```bash
   cd client
   npm install
   ```

2. Create a `.env` file based on `.env.example`
   ```bash
   cp .env.example .env
   # Edit .env with your API URL
   ```

3. Start the frontend development server
   ```bash
   npm start
   ```

## 🚢 Deployment Process

### Backend Deployment (Render)

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure the following settings:
   - Build Command: `npm ci`
   - Start Command: `npm start`
   - Environment Variables: Add all variables from `.env.example`

### Frontend Deployment (Vercel)

1. Create a new project on Vercel
2. Connect your GitHub repository
3. Configure the following settings:
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Environment Variables: Add all variables from `.env.example`

## 🔄 CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment:

1. **Frontend CI**: Runs on changes to the client directory
   - Installs dependencies
   - Runs linting
   - Runs tests
   - Builds the application
   - Uploads build artifacts

2. **Backend CI**: Runs on changes to the server directory
   - Installs dependencies
   - Runs linting
   - Runs tests with MongoDB service container

3. **Frontend CD**: Runs after successful Frontend CI on main branch
   - Downloads build artifacts
   - Deploys to Vercel

4. **Backend CD**: Runs after successful Backend CI on main branch
   - Deploys to Render
   - Performs health checks

## 📊 Monitoring Setup

### Health Checks

The application includes a health check endpoint at `/api/health` that provides:
- Server status
- Database connection status
- Memory usage
- Uptime information

### Error Tracking

Sentry is integrated for error tracking in both frontend and backend:
- Automatic error capturing
- Performance monitoring
- Real-time alerts

### Uptime Monitoring

UptimeRobot is configured to monitor:
- Backend API health endpoint
- Frontend application

## 🔒 Security Measures

- JWT authentication with secure practices
- Password hashing with bcrypt
- Helmet for secure HTTP headers
- Rate limiting to prevent abuse
- Environment variable protection
- CORS configuration

## 📝 Maintenance Procedures

### Regular Tasks

- Weekly review of error logs
- Monthly performance analysis
- Quarterly dependency updates
- Quarterly security audits

### Backup Strategy

- Daily automated MongoDB Atlas backups
- Weekly manual backups
- Source code backed up via GitHub

## 📸 Screenshots

### CI/CD Pipeline

![GitHub Actions CI/CD Pipeline](https://example.com/path-to-screenshot.png)

### Monitoring Dashboard

![Monitoring Dashboard](https://example.com/path-to-screenshot.png)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.