import express from "express";
import corsMiddleware from "./middlewares/cors.middleware.js";
import authRoutes from './routes/auth.routes.js';
import dotenv from 'dotenv';
dotenv.config();


const app = express();

app.use(express.json());
app.use(corsMiddleware);
app.use('/api/auth', authRoutes);

export default app;