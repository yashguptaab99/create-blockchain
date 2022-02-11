/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import Block from './block.js';

export default class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 3;
  }

  // eslint-disable-next-line class-methods-use-this
  createGenesisBlock() {
    return new Block(
      0,
      Date.parse('2022-02-11'),
      'Initial Block in the Chain',
      '0',
    );
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.proofOfWork(this.difficulty);
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const precedingBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.generateHash()) return false;
      if (currentBlock.previousHash !== precedingBlock.hash) return false;
    }
    return true;
  }
}

// const avalanche = new Blockchain();
// avalanche.addBlock(
//   new Block(1, Date.parse('2022-02-11'), {
//     to: '0xC28f57247F7b4C83DFBe717a4d4B3eA5dF4F6c3f',
//     from: '0xfd6C0EDf95eafCf42457e565BF07c38C4fC17a14',
//     amount: 4,
//   }),
// );
// avalanche.addBlock(
//   new Block(1, Date.parse('2022-02-11'), {
//     to: '0xC28f57247F7b4C83DFBe717a4d4B3eA5dF4F6c3f',
//     from: '0xfd6C0EDf95eafCf42457e565BF07c38C4fC17a14',
//     amount: 10,
//   }),
// );
// avalanche.addBlock(
//   new Block(1, Date.parse('2022-02-11'), {
//     to: '0xC28f57247F7b4C83DFBe717a4d4B3eA5dF4F6c3f',
//     from: '0xfd6C0EDf95eafCf42457e565BF07c38C4fC17a14',
//     amount: 123,
//   }),
// );

// console.log(JSON.stringify(avalanche, null, 4));
// console.log(avalanche.isChainValid());
