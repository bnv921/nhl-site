import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

// Новый маршрут для получения расписания матчей
router.get('/schedule', async (req, res) => {
  try {
    const response = await fetch('https://statsapi.web.nhl.com/api/v1/schedule');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Ошибка при запросе к NHL API:', error);
    res.status(500).json({ error: 'Не удалось получить данные NHL' });
  }
});

export default router;

