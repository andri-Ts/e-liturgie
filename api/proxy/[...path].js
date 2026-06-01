export default async function handler(req, res) {
  try {
    // -----------------------------
    // 1. Récupération du chemin dynamique
    // /api/proxy/Sorona/Vakiteny
    // → ["Sorona", "Vakiteny"]
    // -----------------------------
    const rawPath = req.query.path;

    const path = Array.isArray(rawPath) ? rawPath.join('/') : rawPath || '';

    console.log('PATH RECEIVED:', path);

    // -----------------------------
    // 2. Construction URL backend
    // IMPORTANT : ton backend a /api dans l'URL
    // -----------------------------
    const backendUrl = `${process.env.BACKEND_URL}/api/${path}`;

    console.log('BACKEND URL:', backendUrl);

    // -----------------------------
    // 3. Appel backend
    // -----------------------------
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

    // -----------------------------
    // 4. Réponse brute (safe)
    // -----------------------------
    const data = await response.text();

    res.status(response.status).send(data);
  } catch (error) {
    console.error('Proxy error:', error);

    res.status(500).json({
      message: 'Proxy error',
      error: error.message,
    });
  }
}
