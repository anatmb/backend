const mercadopago = require('mercadopago');
mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
});

exports.createPayment = async (req, res) => {
  const { items } = req.body;

  try {
    const preference = {
      items: items.map(item => ({
        title: item.name,
        unit_price: item.price,
        quantity: item.quantity,
        currency_id: 'ARS'
      })),
      back_urls: {
        success: "http://localhost:5173/success",
        failure: "http://localhost:5173/failure",
        pending: "http://localhost:5173/pending"
      },
      auto_return: "approved"
    };

    const response = await mercadopago.preferences.create(preference);
    res.status(200).json({ init_point: response.body.init_point });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la preferencia de pago' });
  }
};