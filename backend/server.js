import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";
import cors from 'cors';
app.use(cors({
  origin: 'http://localhost:5137'
}));


dotenv.config();

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}).on('error', (err) => {
    console.log("Failed to start server: ", err);
});
