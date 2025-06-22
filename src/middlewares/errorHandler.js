// export const errorHandler = (err, req, res, next) => {
//   if (err.status) {
//     return res.status(err.status).json({
//       status: err.status,
//       message: err.message,
//       data: err.message,
//     });
//   }

//   res.status(500).json({
//     status: 500,
//     message: 'Something went wrong',
//     data: err.message,
//   });
// };
export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';

  const errors = err.errors
    ? err.errors.map((detail) => ({
        field: detail.path?.join('.') || '',
        message: detail.message,
      }))
    : null;

  const response = {
    status: 'error',
    message,
  };

  if (errors) {
    response.errors = errors;
  } else {
    response.data = err.message;
  }

  res.status(status).json(response);
};
