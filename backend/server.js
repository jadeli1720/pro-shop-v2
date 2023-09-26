import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

connectDB();

const port = process.env.PORT || 5000;

const app = express();

//Body Parser middleware:
app.use(express.json());
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded))

//ROUTES:
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

//ERROR-MIDDLEWARE:
app.use(notFound);
app.use(errorHandler);


app.listen(port, () => {  
  console.log(`Server running on port ${port}`);
});