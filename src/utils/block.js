import crypto from 'crypto';

export default class Block {
  constructor(index, timestamp, transactions, previousHash = '') {
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.proof = 0;
    this.hash = this.generateHash();
  }

  generateHash() {
    return crypto
      .createHash('sha256')
      .update(
        this.index
          + this.previousHash
          + this.timestamp
          + JSON.stringify(this.transactions)
          + this.proof,
      )
      .digest('hex');
  }

  proofOfWork(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')
    ) {
      // eslint-disable-next-line no-plusplus
      this.proof++;
      this.hash = this.generateHash();
    }
  }
}
