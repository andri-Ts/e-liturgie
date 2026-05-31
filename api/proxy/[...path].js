export default async function handler(req, res) {
  try {
    const path = Array.isArray(req.query.path)
      ? req.query.path.join('/')
      : req.query.path || '';

    const queryString = new URLSearchParams(req.query);
    queryString.delete('path');

    const backendUrl =
      `${process.env.BACKEND_URL}/api/${path}` +
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

    const contentType = response.headers.get('content-type');
    const data = await response.text();

    if (contentType?.includes('application/json')) {
      return res.status(response.status).json(JSON.parse(data));
    }

    return res.status(response.status).send(data);
  } catch (error) {
    console.error('Proxy error:', error);

    return res.status(500).json({
      message: 'Proxy error',
      error: error.message,
    });
  }
}
