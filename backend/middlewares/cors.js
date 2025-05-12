import cors from "cors";

// Simple CORS middleware that allows all origins
const corsMiddleware = cors({
  origin: true, // Allow any origin
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
});

export default corsMiddleware; 