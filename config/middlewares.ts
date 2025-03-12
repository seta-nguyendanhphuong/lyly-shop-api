export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::cors",
    config: {
      origin: ["http://localhost:3000"], // Thay đổi thành domain frontend của bạn
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      headers: ["Content-Type", "Authorization"],
      keepHeaderOnError: true,
    },
  },
];
