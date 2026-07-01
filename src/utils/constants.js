// for dev and for prod
export const BASE_URL =
  location.hostname === "localhost"
    ? "http://localhost:3000"
    : import.meta.env.VITE_BACKEND_URL
