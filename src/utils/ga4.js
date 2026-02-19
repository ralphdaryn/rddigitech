// src/utils/ga4.js
const GA_ID = "G-XZDBYVBXVE";

export const track = (eventName, params = {}) => {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }
  } catch (e) {
    console.warn("GA4 track error:", e);
  }
};

export const pageView = (path) => {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("config", GA_ID, {
        page_path: path,
      });
    }
  } catch (e) {
    console.warn("GA4 pageView error:", e);
  }
};