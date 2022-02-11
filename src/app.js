import express from 'express';
import chalk from 'chalk';
import 'dotenv/config';
import router from './routes/index.js';
import Blockchain from './utils/blockchain.js';
import Block from './utils/block.js';

const app = express();

const yashChain = new Blockchain();
yashChain.addBlock(
  new Block(1, Date.parse('2022-02-11'), {
    to: '0xC28f57247F7b4C83DFBe717a4d4B3eA5dF4F6c3f',
    from: '0xfd6C0EDf95eafCf42457e565BF07c38C4fC17a14',
    amount: 4,
  }),
);
yashChain.addBlock(
  new Block(2, Date.parse('2022-02-11'), {
    to: '0xC28f57247F7b4C83DFBe717a4d4B3eA5dF4F6c3f',
    from: '0xfd6C0EDf95eafCf42457e565BF07c38C4fC17a14',
    amount: 10,
  }),
);

app.locals.blockchain = yashChain;
app.use(express.json());
app.use((req, res, next) => {
  req.startTime = new Date().getTime();
  next();
});

app.use(router);

const start = () => app.listen(process.env.port, () => {
  console.log(chalk.yellow('.......................................'));
  console.log(chalk.green(process.env.name));
  console.log(chalk.green(`Port:${process.env.port}`));
  console.log(chalk.green(`Mode:${process.env.mode}`));
  console.log(chalk.yellow('.......................................'));
});
start();
