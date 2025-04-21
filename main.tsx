import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add preload links for Google Fonts
const preloadFonts = () => {
  const fontLinks = [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" }
  ];

  fontLinks.forEach(linkData => {
    const link = document.createElement('link');
    Object.entries(linkData).forEach(([key, value]) => {
      if (value !== undefined) {
        link.setAttribute(key, value);
      }
    });
    document.head.appendChild(link);
  });
};

// Add page title and meta description
const updateDocumentHead = () => {
  document.title = "Abhishek Singh - Portfolio";
  
  const metaDescription = document.createElement('meta');
  metaDescription.name = 'description';
  metaDescription.content = 'Professional portfolio of Abhishek Singh, B.Tech in Computer Science with AI Specialization';
  document.head.appendChild(metaDescription);
};

// Initialize the app
const initializeApp = () => {
  preloadFonts();
  updateDocumentHead();
  createRoot(document.getElementById("root")!).render(<App />);
};

initializeApp();
