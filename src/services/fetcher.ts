// const API_BASE_URL = process.env.API_BASE_URL!;
const API_KEY = process.env.API_KEY!;
import { API_BASE_URL } from "@/config/api";

export async function fetchAPI(
  endpoint: string,
  options: RequestInit = {}
) {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      // "x-api-key": API_KEY,
      Authorization: `Bearer ${process.env.API_BEARER_TOKEN}`,
      ...options.headers,
    },
    // 👇 CACHE + ISR
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch API");
  }

  return res.json();
}