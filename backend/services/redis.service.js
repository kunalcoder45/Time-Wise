// import Redis from "ioredis";
// import dotenv from "dotenv";

// dotenv.config();

// const redisClient = new Redis({
//     host: process.env.REDIS_HOST || "localhost",
//     port: process.env.REDIS_PORT || 6379,
//     password: process.env.REDIS_PASSWORD || null
// });

// redisClient.on("connect", () => {
//     console.log("Connected to Redis");
// });

// redisClient.on("error", (err) => {
//     console.error("Redis connection error:", err);
// });

// export default redisClient;



import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

const redisClient = new Redis({
    host: process.env.REDIS_HOST || "localhost",
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASSWORD || null,
});

redisClient.on("connect", () => {
    console.log("Connected to Redis");
});

redisClient.on("error", (err) => {
    console.error("Redis connection error:", err);
});

export default redisClient;
