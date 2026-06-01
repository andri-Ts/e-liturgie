export default async function handler(req, res) {
  try {
    // ✅ VERCEL SAFE WAY (IMPORTANT)
    const rawPath = req.query.path;

    // 🧠 normalisation ultra robuste
    const path = Array.isArray(rawPath)
      ? rawPath.join('/')
      : typeof rawPath === 'string'
        ? rawPath
        : '';

    console.log('RAW QUERY:', req.query);
    console.log('RAW PATH:', rawPath);
    console.log('FINAL PATH:', path);

    const backendUrl = `${process.env.BACKEND_URL}/${path}`;

    console.log('BACKEND URL:', backendUrl);

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

    return res.status(response.status).send(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}
