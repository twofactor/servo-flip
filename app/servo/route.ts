import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: "https://us1-live-wasp-41617.upstash.io",
  token:
    "AaKRACQgM2ZkNzZmYWUtOGI5Ni00MjUwLWI3MGEtMWQ2MGIxNGQ5YTU1ODVmMjEyY2FlYjQ0NGRmN2E3MWY2ZjMyZDEwNjhmMTI=",
});

export async function GET() {
  const data = await redis.get("servo");
  return Response.json(data);
}
