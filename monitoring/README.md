# Monitoring Setup for MERN Task Manager

This directory contains configuration files and instructions for setting up monitoring for the MERN Task Manager application.

## Health Check Endpoints

The application includes the following health check endpoints:

- Backend: `/api/health` - Returns the status of the backend and database connection
- Frontend: Monitored via uptime checks

## Monitoring Tools

### 1. Server Monitoring

We use [UptimeRobot](https://uptimerobot.com/) for basic uptime monitoring:

- Set up monitors for both frontend and backend endpoints
- Configure alerts for downtime notifications
- Set up status page for public visibility

### 2. Error Tracking

We use [Sentry](https://sentry.io/) for error tracking:

- Backend integration: Add the Sentry SDK to capture Express.js errors
- Frontend integration: Add the Sentry SDK to capture React errors and performance metrics

### 3. Performance Monitoring

We use a combination of tools for performance monitoring:

- [New Relic](https://newrelic.com/) for backend performance monitoring
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) for frontend performance audits
- Custom performance metrics logged to the backend

## Setup Instructions

### UptimeRobot Setup

1. Create an account on UptimeRobot
2. Add a new monitor for the backend health check endpoint
3. Add a new monitor for the frontend URL
4. Configure notification settings (email, Slack, etc.)

### Sentry Setup

#### Backend Setup

1. Install Sentry SDK:
   ```
   npm install @sentry/node @sentry/tracing
   ```

2. Initialize Sentry in your Express app:
   ```javascript
   const Sentry = require('@sentry/node');
   const Tracing = require('@sentry/tracing');

   Sentry.init({
     dsn: process.env.SENTRY_DSN,
     integrations: [
       new Sentry.Integrations.Http({ tracing: true }),
       new Tracing.Integrations.Express({ app })
     ],
     tracesSampleRate: 1.0
   });

   app.use(Sentry.Handlers.requestHandler());
   app.use(Sentry.Handlers.tracingHandler());
   
   // All your routes here
   
   app.use(Sentry.Handlers.errorHandler());
   ```

#### Frontend Setup

1. Install Sentry SDK:
   ```
   npm install @sentry/react @sentry/tracing
   ```

2. Initialize Sentry in your React app:
   ```javascript
   import * as Sentry from '@sentry/react';
   import { BrowserTracing } from '@sentry/tracing';

   Sentry.init({
     dsn: process.env.REACT_APP_SENTRY_DSN,
     integrations: [new BrowserTracing()],
     tracesSampleRate: 0.5
   });
   ```

## Maintenance Procedures

### Regular Maintenance Tasks

1. Review error logs weekly
2. Analyze performance metrics monthly
3. Update dependencies quarterly
4. Perform security audits quarterly

### Backup Procedures

1. Database backups:
   - Daily automated backups via MongoDB Atlas
   - Weekly manual backups stored in a separate location
   - Monthly full database dumps for long-term storage

2. Application backups:
   - Source code is backed up via GitHub
   - Environment configurations are backed up separately

### Incident Response

1. Monitor alerts from UptimeRobot and Sentry
2. Follow the incident response playbook:
   - Acknowledge the incident
   - Investigate the root cause
   - Apply a fix or rollback to a stable version
   - Document the incident and resolution
   - Conduct a post-mortem analysis