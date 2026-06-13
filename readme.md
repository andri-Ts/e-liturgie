Vercel rewrite

Permet de rediriger toutes les requêtes :

/api/*

vers le backend :

http://72.61.166.33:5000/api/*

Objectif :
- éviter les erreurs Mixed Content (HTTPS → HTTP)
- cacher l'URL réelle du backend au frontend
- centraliser les appels API via Vercel
