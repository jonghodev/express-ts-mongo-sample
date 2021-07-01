export const ErrorCode = {
  /**
   * Common
   */
  InternalError: {
    message: 'Internal server error occurred',
    statusCode: 500,
  },
  AuthorizationMissing: {
    message: 'Authorization is missing in header',
    statusCode: 400,
  },
  EntityNotFound: {
    message: 'Entity not found',
    statusCode: 400,
  },

  /**
   * JWT
   */
  InvalidToken: {
    message: 'JWT: Token is invalid',
    statusCode: 401,
  },
};
