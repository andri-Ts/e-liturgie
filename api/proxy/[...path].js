export default async function handler(req, res) {
  try {
    // ✅ IMPORTANT :
    // Sur Vercel catch-all [...path],
    // req.query.path peut être :
    // 1) ["Sorona", "Vakiteny"] (cas le plus fréquent)
    // 2) "Sorona/Vakiteny" (parfois selon config)
    // 3) undefined

    const pathArray = req.query.path || [];

    // ✅ On normalise TOUJOURS en string propre
    const path = Array.isArray(pathArray)
      ? pathArray.join('/') // ["Sorona","Vakiteny"] → "Sorona/Vakiteny"
      : pathArray; // déjà string → on garde

    // ✅ DEBUG (très utile sur Vercel logs)
    console.log('PATH ARRAY:', pathArray);
    console.log('FINAL PATH:', path);

    // ✅ On construit l'URL backend proprement
    const backendUrl = `${process.env.BACKEND_URL}/${path}`;

    console.log('BACKEND URL:', backendUrl);

    // ✅ Appel backend identique
    const response = await fetch(backendUrl, {
      method: req.method,

      headers: {
        'Content-Type': 'application/json',

        // ⚠️ important : on forward auth si existant
        Authorization: req.headers.authorization || '',
      },

      // ✅ seulement si POST/PUT/etc
      body:
        req.method !== 'GET' && req.method !== 'HEAD'
          ? JSON.stringify(req.body)
          : undefined,
    });

    // ✅ réponse brute backend
    const data = await response.text();

    // ✅ retour direct (plus safe que JSON.parse conditionnel)
    res.status(response.status).send(data);
  } catch (error) {
    // ❌ si erreur réseau ou fetch backend
    console.error('Proxy error:', error);

    res.status(500).json({
      message: 'Proxy error',
      error: error.message,
    });
  }
}
