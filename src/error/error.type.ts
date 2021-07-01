export interface ErrorBody {
  message: string;
  statusCode: number;
  details?: any;
}

export class CustomError extends Error {
  message: string;
  statusCode: number;
  timestamp: string;
  details?: any;

  constructor(error: ErrorBody) {
    super();
    this.message = error.message;
    this.statusCode = error.statusCode;
    this.details = error.details;
    this.timestamp = new Date().toISOString();
  }
}
