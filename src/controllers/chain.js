import { successResponse } from '../core/apiResponse.js';
import { httpStatusCode } from '../core/index.js';

// eslint-disable-next-line import/prefer-default-export
export function getChain(req, res) {
  const chain = req.app.locals.blockchain;
  return successResponse(
    req,
    res,
    chain,
    'Hello',
    httpStatusCode.OK,
  );
}
