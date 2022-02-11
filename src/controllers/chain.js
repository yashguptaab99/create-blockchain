import { successResponse } from '../core/apiResponse.js';
import { httpStatusCode } from '../core/index.js';
import Block from '../utils/block.js';

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

export function mineBlock(req, res) {
  const chain = req.app.locals.blockchain;
  chain.addBlock(
    new Block(chain.getLatestBlock().index + 1, Date.now(), req.body),
  );
  return successResponse(
    req,
    res,
    chain.getLatestBlock(),
    'A block is MINED',
    httpStatusCode.OK,
  );
}
