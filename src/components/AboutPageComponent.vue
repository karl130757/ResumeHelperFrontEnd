<template>
    <div class="about-page">
      <!-- Hero Section -->
      <div class="hero-section text-center">
        <div class="hero-container">
          <h1 class="hero-heading">About ResumeHelper</h1>
          <p class="hero-subheading">
            Learn more about how we can help you optimize your resume and land your dream job with the power of AI.
          </p>
        </div>
      </div>
  
      <!-- What We Do Section -->
      <div class="what-we-do py-5">
        <div class="container text-center">
          <h2 class="section-title">What We Do</h2>
          <p class="section-description">
            At ResumeHelper, we empower job seekers with AI-driven tools to craft optimized resumes that get noticed by recruiters.
            We offer instant, actionable feedback, keyword suggestions, and ATS compatibility improvements to enhance your chances of landing interviews.
          </p>
        </div>
      </div>
  
      <!-- Our Mission Section -->
      <div class="our-mission py-5 bg-light">
        <div class="container text-center">
          <h2 class="section-title">Our Mission</h2>
          <p class="section-description">
            Our mission is to help job seekers improve their resumes by providing personalized feedback and optimization suggestions.
            We focus on enhancing both the content and structure of resumes to make them more ATS-friendly and recruiter-ready.
          </p>
        </div>
      </div>
  
      <!-- Our Values Section -->
      <div class="our-values py-5">
        <div class="container text-center">
          <h2 class="section-title">Our Core Values</h2>
          <div class="row">
            <div class="col-md-4">
              <div class="value-card">
                <i class="fas fa-thumbs-up fa-3x text-primary mb-3"></i>
                <h4>Quality</h4>
                <p>We provide expert-level resume feedback to ensure your resume stands out and catches the attention of recruiters and hiring managers.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="value-card">
                <i class="fas fa-clock fa-3x text-primary mb-3"></i>
                <h4>Efficiency</h4>
                <p>Our tools are quick and easy to use, offering real-time feedback and suggestions to help you optimize your resume without wasting time.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="value-card">
                <i class="fas fa-heart fa-3x text-primary mb-3"></i>
                <h4>Support</h4>
                <p>We’re dedicated to your success and provide ongoing support throughout the resume-building process, ensuring you have all the tools you need to succeed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Call to Action Section -->
      <div class="cta-section text-center py-5">
        <h2>Ready to Create Your Dream Resume?</h2>
        <p class="lead">Start improving your resume today and get noticed by top recruiters.</p>
        <button @click="goToUpload" class="btn btn-primary btn-lg">Get Started</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToUpload() {
        this.$router.push('/upload');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Hero Section */
  .hero-section {
    background: linear-gradient(135deg, #007bff 0%, #6c757d 100%);
    padding: 80px 0;
    color: white;
    text-align: center;
  }
  
  .hero-heading {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 20px;
  }
  
  .hero-subheading {
    font-size: 1.25rem;
    margin-bottom: 30px;
  }
  
  /* What We Do Section */
  .what-we-do {
    background-color: #f8f9fa;
    padding: 50px 0;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
  }
  
  .section-description {
    font-size: 1.2rem;
    color: #6c757d;
    margin-bottom: 40px;
  }
  
  /* Our Mission Section */
  .our-mission {
    background-color: #e9ecef;
  }
  
  /* Our Values Section */
  .our-values {
    background-color: #f8f9fa;
  }
  
  .value-card {
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .value-card i {
    color: #007bff;
    margin-bottom: 20px;
  }
  
  /* Call to Action Section */
  .cta-section {
    background-color: #007bff;
    color: white;
    padding: 50px 0;
  }
  
  .cta-section h2 {
    font-size: 2.5rem;
    font-weight: 700;
  }
  
  .cta-section p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  .cta-section button {
    padding: 12px 40px;
    font-size: 1.2rem;
  }
  
  .cta-section button:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
  
  /* Responsive Styles */
  @media (max-width: 768px) {
    .hero-heading {
      font-size: 2.5rem;
    }
  
    .hero-subheading {
      font-size: 1.1rem;
    }
  
    .cta-buttons {
      flex-direction: column;
    }
  
    .cta-section {
      padding: 40px 0;
    }
  }
  </style>
  