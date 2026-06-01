export default function handler(req, res) {
  return res.status(200).json({
    ok: true,
    query: req.query,
    url: req.url,
    message: 'Connexion ok',
  });
}
