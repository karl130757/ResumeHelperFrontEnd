<template>
    <footer class="footer-container">
      <div class="container py-4">
        <div class="row">
          <div class="col-12 text-center">
            <p class="footer-text">
              &copy; 2024 ResumeHelper | 
              <a href="/terms" class="footer-link">Terms</a> | 
              <a href="/privacy" class="footer-link">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComponent",
  };
  </script>
  
  <style scoped>
  /* Footer Styling */
  .footer-container {
    background-color: var(--secondary-color);
    color: var(--text-color);
    padding: 20px 0;
    position: relative;
    bottom: 0;
    width: 100%;
    z-index: 999;
  }
  
  /* Footer Text Styling */
  .footer-text {
    margin: 0;
    font-size: 0.9rem;
    color: var(--text-color);
  }
  
  /* Footer Link Styling */
  .footer-link {
    color: var(--primary-color);
    text-decoration: none;
    margin: 0 10px;
    transition: color 0.3s ease;
  }
  
  .footer-link:hover {
    color: var(--accent-color);
  }
  
  /* Make Footer Sticky at the Bottom */
  html, body {
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  
  body {
    flex: 1;
  }
  
  /* Ensuring Footer stays at the bottom */
  footer {
    margin-top: auto;
  }
  
  /* Mobile Responsiveness */
  @media (max-width: 768px) {
    .footer-text {
      font-size: 1rem;
    }
  }
  </style>
  