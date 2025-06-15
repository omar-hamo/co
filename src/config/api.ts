// const API_BASE_URL = process.env.BASE_URL || "http://aro-tech-vision.nl";
const API_BASE_URL = "http://aro-tech-vision.nl";

export const API_ENDPOINTS = {
  PRICING: {
    ALL: `${API_BASE_URL}/api/pricing/all`,
  },
  CONTACT: {
    CREATE: `${API_BASE_URL}/api/contact/create/`,
  },
  CAREER: {
    ALL: `${API_BASE_URL}/api/career/all`,
  },
} as const;

// Type for the API endpoints
export type ApiEndpoints = typeof API_ENDPOINTS;
