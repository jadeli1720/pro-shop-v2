// this will be passed if no other middleware handles the request and sends a 404 status
const notFound = (req, res, next) => {
	const error = new Error(`Not Found - ${req.originalUrl}`);
	res.status(404);
	next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  //Check for Mongooses bad ObjectId (Also known as a CastError)
  if(err.name === 'CastError' && err.kind === 'ObjectId' ){
    message = `Resource not found`;
    statusCode = 404;
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'production' ? 'null' : err.stack,
  });
};

export { notFound, errorHandler };
