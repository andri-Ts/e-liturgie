export default async function handler(req, res) {
  try {
    const { path = [] } = req.query;

    const backendUrl = `${process.env.BACKEND_URL}/${path.join('/')}`;

    console.log('BACKEND URL:', backendUrl);

    const response = await fetch(backendUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body:
        req.method !== 'GET' && req.method !== 'HEAD'
          ? JSON.stringify(req.body)
          : undefined,
    });

    const data = await response.text();

    res.status(response.status).send(data);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}
