import { logger } from '../utils/logger'

function getRequestsMiddleware(request: any, response: any, next) {
  
  const access = {
    path: request.route.path,
    methods: JSON.stringify(request.route.methods)
  }

  logger.info(`Endpoint accessed ${access.path} - Methods: ${access.methods}`);
  next();
}

export {
  getRequestsMiddleware,
}