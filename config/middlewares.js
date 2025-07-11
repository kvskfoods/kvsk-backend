module.exports = [
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "https://res.cloudinary.com"],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "https://res.cloudinary.com",
          ],
          "frame-src": ["'self'", "https://res.cloudinary.com"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::logger",
  "strapi::errors",
  "strapi::cors",
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://kvsk-web.vercel.app/'], // Your frontend URL
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization'],
      credentials: true,
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
