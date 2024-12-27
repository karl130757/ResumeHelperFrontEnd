<template>
    <header class="header-container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <!-- Logo with Text and Icon -->
        <router-link to="/" class="navbar-brand d-flex align-items-center">
          <i class="fa fa-clipboard-check logo-icon"></i>
          <h1 class="logo-text m-0 ms-2">ResumeHelper</h1>
        </router-link>
  
        <!-- Mobile Toggle Button -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <!-- Simplified Navigation with a CTA button -->
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <button @click="goToUpload" class="btn btn-primary nav-btn ms-2">
            Analyze My Resume
          </button>
        </div>
      </nav>
    </header>
  </template>

<script>
export default {
  methods: {
    goToUpload() {
      // Navigate to the resume upload page
      this.$router.push('/upload');
    },
  },
};
</script>


<style scoped>
/* Header Styling */
.header-container {
  position: sticky;
  top: 0;
  background-color: #ffffff;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px 30px;
  transition: all 0.3s ease; /* Smooth transition for any changes */
  border-bottom: 2px solid var(--primary-color); /* Branding accent for a refined look */
}

/* Navbar Styling */
.navbar {
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo Styling */
.logo-icon {
  font-size: 3rem; /* Increased size for more brand presence */
  color: var(--primary-color);
  transition: all 0.3s ease;
  transform: rotate(10deg); /* Optional: give the logo icon a playful twist */
}

/* Logo Text Styling */
.logo-text {
  font-family: 'Poppins', sans-serif; /* Brand-oriented font */
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--primary-color);
  text-transform: uppercase;
  transition: color 0.3s ease;
}

/* Hover Effects for Logo */
.navbar-brand:hover .logo-icon,
.navbar-brand:hover .logo-text {
  color: var(--accent-color); /* Color change on hover to match the brand’s secondary color */
  transform: rotate(0deg); /* Smooth transition to the default position */
}

/* CTA Button Styling */
.nav-btn {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Consistent Hover Effects for Button (matching homepage hover) */
.nav-btn:hover {
  background-color: var(--accent-color);  /* Ensure the hover color matches the homepage button */
  transform: translateY(-3px); /* Slight lift effect for interaction */
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

/* Mobile Responsive Styling */
@media (max-width: 768px) {
  .navbar {
    padding: 0 20px;
  }

  .logo-icon {
    font-size: 2.2rem; /* Adjust size on smaller screens */
  }

  .logo-text {
    font-size: 1.8rem;
  }

  .nav-btn {
    padding: 10px 25px;
    font-size: 1rem;
  }
}
</style>
