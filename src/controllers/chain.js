import { successResponse } from '../core/apiResponse.js';
import { httpStatusCode } from '../core/index.js';

// eslint-disable-next-line import/prefer-default-export
export function hello(req, res) {
  return successResponse(
    req,
    res,
    'Data is empty (Testing)',
    'Hello',
    httpStatusCode.OK,
  );
}
