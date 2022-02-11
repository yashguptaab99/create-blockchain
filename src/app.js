import express from 'express';
import chalk from 'chalk';
import 'dotenv/config';
import router from './routes/index.js';

const app = express();
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
