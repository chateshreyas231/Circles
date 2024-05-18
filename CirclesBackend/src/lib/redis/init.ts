import { createClient } from "redis";
import Redis from "ioredis";

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: 11604,
  password: process.env.REDIS_PASSWORD,
});

export default redis;
