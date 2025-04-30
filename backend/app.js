import express from "express";
import corsMiddleware from "./middlewares/cors.middleware.js";

const app = express();

app.use(express.json());
app.use(corsMiddleware);

app.get('/', (req, res) => {
    res.send("Hello world!");
})

export default app;