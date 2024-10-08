import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err: Error) => {
    console.error('Error connecting to MongoDB', err);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// testing ES Lint and prettier with the lines below
// const message = 'Hello, world';
// const bogusVariable = 42;

// function testFunction(param1: number, param2: number):number {
//   return param1 + param2;
// }
