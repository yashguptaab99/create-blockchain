export const errorResponse = (req, res, error, statusCode = 400) => {
  res.setHeader('Content-type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', '*');
  const result = {
    success: false,
    statusCode,
    data: null,
    error,
    processingTimeMillis: new Date().getTime() - req.startTime,
  };
  return res.status(error.status || 500).json(result);
};

export const successResponse = (req, res, data, message, statusCode = 200) => {
  res.setHeader('Content-type', 'application/json; charset=utf-8');
  const response = {
    data,
    processingTimeMillis: new Date().getTime() - req.startTime,
    message,
    statusCode,
    success: true,
  };
  return res.status(statusCode).json(response);
};
