// database.js
const Redis = require("ioredis");

// Menghubungkan ke host 127.0.0.1 dan port 6379
const redis = new Redis({
  host: "127.0.0.1",
  port: 6379,
});

module.exports = redis;