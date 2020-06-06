import express from 'express';
import cors from 'cors';
import path from 'path';
import 'dotenv/config';
import { errors } from 'celebrate';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running on ${process.env.SERVER_PORT}`);
});