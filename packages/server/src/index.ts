import express, { type Request, type Response } from 'express';
import { loadSeedData } from './load-data.js';

const app = express();
const PORT = 3000;

// API route
app.get('/api/seeds', (req: Request, res: Response) => {
  const seeds = loadSeedData();
  res.json(seeds);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
