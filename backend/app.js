import express from 'express';
import morgan from 'morgan';
import connect from './db/db.js';
import userRoutes from './routes/user.routes.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';

connect();
const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/users', userRoutes);

const port = process.env.PORT || 3000; // Use 3000 by default
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


export default app;