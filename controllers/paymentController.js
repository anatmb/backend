const mercadopago = require('mercadopago');

const client = new mercadopago.MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN
});

const createPreference = async (req, res) => {
  try {
    const items = req.body.items;

    const preference = await mercadopago.preferences.create({
      items,
      back_urls: {
        success: 'http://localhost:5173/success',
        failure: 'http://localhost:5173/failure',
      },
      auto_return: 'approved',
    });

    res.status(200).json({ id: preference.body.id });
  } catch (error) {
    console.error('Error al crear preferencia:', error);
    res.status(500).json({ error: 'Error al crear preferencia' });
  }
};

module.exports = { createPreference };