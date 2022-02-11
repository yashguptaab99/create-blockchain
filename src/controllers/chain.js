import { successResponse } from '../core/apiResponse.js';
import { httpStatusCode } from '../core/index.js';

export function getChain(req, res) {
  const chain = req.app.locals.blockchain;
  return successResponse(req, res, chain, 'All Chain Data', httpStatusCode.OK);
}

export function validateChain(req, res) {
  const chain = req.app.locals.blockchain;

  return successResponse(
    req,
    res,
    chain.isChainValid(),
    chain.isChainValid()
      ? 'The Blockchain is valid.'
      : 'The Blockchain is invalid.',
    httpStatusCode.OK,
  );
}
