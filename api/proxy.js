export default async function handler(req, res) {
  try {
    // on récupère le path envoyé par le frontend
    const path = req.body?.path || "";

    // IMPORTANT : ton backend a /api
    const backendUrl = `${process.env.BACKEND_URL}/api/${path}`;

    console.log("BACKEND URL:", backendUrl);

    const response = await fetch(backendUrl, {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
        Authorization: req.headers.authorization || "",
      },
      body:
        req.method !== "GET" && req.method !== "HEAD"
          ? JSON.stringify(req.body)
          : undefined,
    });

    const data = await response.text();

    return res.status(response.status).send(data);

  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}
