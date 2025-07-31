const express = require('express');
const cors = require('cors');
require('dotenv').config();

const paymentRoutes = require('./routes/payment');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/payment', paymentRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});