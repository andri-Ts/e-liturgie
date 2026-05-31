export default async function handler(req, res) {
  try {
    const path = Array.isArray(req.query.path)
      ? req.query.path.join('/')
      : req.query.path;

    const queryString = new URLSearchParams(req.query);
    queryString.delete('path');

    const backendUrl =
      `http://72.61.166.33:5000/api/${path}` +
      (queryString.toString() ? `?${queryString}` : '');

    const response = await fetch(backendUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: req.headers.authorization || '',
      },
      body:
        req.method !== 'GET' && req.method !== 'HEAD'
          ? JSON.stringify(req.body)
          : undefined,
    });

    const data = await response.text();

    res.status(response.status).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Proxy error',
      error: error.message,
    });
  }
}
