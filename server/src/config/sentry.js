const Sentry = require('@sentry/node');
const Tracing = require('@sentry/tracing');
const logger = require('./logger');

/**
 * Initialize Sentry for error tracking
 * @param {Object} app - Express app instance
 */
const initSentry = (app) => {
  if (process.env.SENTRY_DSN) {
    logger.info('Initializing Sentry for error tracking');
    
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      environment: process.env.NODE_ENV || 'development',
      integrations: [
        // Enable HTTP calls tracing
        new Sentry.Integrations.Http({ tracing: true }),
        // Enable Express.js middleware tracing
        new Tracing.Integrations.Express({ app }),
      ],
      // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring
      tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.2 : 1.0,
    });
    
    // RequestHandler creates a separate execution context using domains, so that every
    // transaction/span/breadcrumb is attached to its own Hub instance
    app.use(Sentry.Handlers.requestHandler());
    
    // TracingHandler creates a trace for every incoming request
    app.use(Sentry.Handlers.tracingHandler());
    
    logger.info('Sentry initialized successfully');
    return true;
  } else {
    logger.warn('Sentry DSN not provided, error tracking disabled');
    return false;
  }
};

/**
 * Add Sentry error handler to Express app
 * @param {Object} app - Express app instance
 */
const addSentryErrorHandler = (app) => {
  if (process.env.SENTRY_DSN) {
    // The error handler must be before any other error middleware and after all controllers
    app.use(Sentry.Handlers.errorHandler());
    logger.info('Sentry error handler added');
  }
};

module.exports = {
  initSentry,
  addSentryErrorHandler,
  Sentry
};