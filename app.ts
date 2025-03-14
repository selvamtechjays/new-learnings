import express, { Request, Response } from 'express';  
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Simple Route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Server is running!');
});

app.get('/add', (req: Request, res: Response) => {
  const sum = 1 + 1;
  res.json({ result: sum });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
