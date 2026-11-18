import { Router } from 'express';
import { pool } from '../db/pool.js';

const router = Router();

// GET /users
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT id, name, email FROM users ORDER BY id');
  res.json(result.rows);
});

export default router;
