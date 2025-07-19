// API URL based on environment
export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Other configuration variables
export const APP_NAME = process.env.REACT_APP_NAME || 'Task Manager';
export const APP_VERSION = process.env.REACT_APP_VERSION || '1.0.0';

// Feature flags
export const ENABLE_NOTIFICATIONS = process.env.REACT_APP_ENABLE_NOTIFICATIONS === 'true';
export const ENABLE_ANALYTICS = process.env.REACT_APP_ENABLE_ANALYTICS === 'true';