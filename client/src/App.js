import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import PrivateRoute from './components/routing/PrivateRoute';
import Spinner from './components/layout/Spinner';
import { useAuth } from './context/AuthContext';

// Lazy load components for code splitting
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const TaskForm = lazy(() => import('./pages/TaskForm'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const { loading } = useAuth();

  if (loading) {
    return <Spinner />;
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<PrivateRoute component={Dashboard} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/tasks/new" element={<PrivateRoute component={TaskForm} />} />
              <Route path="/tasks/edit/:id" element={<PrivateRoute component={TaskForm} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;