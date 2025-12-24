
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add custom styles
const style = document.createElement('style');
style.textContent = `
  /* 3D flip effect */
  .perspective {
    perspective: 1000px;
  }
  
  .transform-style-3d {
    transform-style: preserve-3d;
  }
  
  .hover\\:rotate-y-10:hover {
    transform: rotateY(10deg);
  }
  
  /* Text shadow for better readability */
  .text-shadow {
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  /* Card content wrapper for consistent height */
  .card-content-wrapper {
    height: 80px; /* Fixed height for card content area */
    position: relative;
    overflow: hidden;
  }
  
  /* Individual card hover effect */
  .group:hover .card-content-wrapper p {
    max-height: 80px !important;
  }
  
  /* Removed global SVG color to prevent hidden icons in light sections */
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
