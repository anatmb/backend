const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  console.log('Pedido recibido:', req.body);
  res.status(200).json({ message: 'Pedido confirmado' });
});

module.exports = router;