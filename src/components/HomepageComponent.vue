<template>
    <div class="homepage">
      <!-- Hero Section -->
      <div class="hero-section text-center">
        <div class="hero-container">
          <h1 class="hero-heading">Elevate Your Resume, Land Your Dream Job</h1>
          <p class="hero-subheading">
            Get personalized, AI-driven resume feedback and optimize it for ATS. Boost your chances of standing out to recruiters today!
          </p>
          <div class="cta-buttons">
            <button @click="goToUpload" class="btn btn-primary hero-btn">Start Now</button>
            <button @click="learnMore" class="btn btn-outline-light hero-btn">Learn More</button>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div class="features-section py-5">
        <div class="container text-center">
          <h2 class="section-title">Why Choose Us?</h2>
          <p class="section-subtitle">Our AI-powered features will help you create an optimized, ATS-friendly resume.</p>
          <div class="row feature-cards">
            <div class="col-md-4">
              <div class="feature-card">
                <i class="fas fa-upload fa-4x text-primary"></i>
                <h3>Upload in Seconds</h3>
                <p>Upload your resume and job description in multiple formats. Get started instantly with a seamless, user-friendly interface.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-card">
                <i class="fas fa-comment-dots fa-4x text-primary"></i>
                <h3>Instant Actionable Feedback</h3>
                <p>Receive real-time, tailored suggestions to improve your resume’s content, structure, and wording.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-card">
                <i class="fas fa-search fa-4x text-primary"></i>
                <h3>ATS Optimization</h3>
                <p>Optimize your resume with industry-specific keywords and improve your chances of passing ATS screenings.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- How It Works Section -->
      <div class="how-it-works-section py-5 bg-light">
        <div class="container text-center">
          <h2 class="section-title">How It Works</h2>
          <div class="row">
            <div class="col-md-4">
              <div class="how-it-works-step">
                <i class="fas fa-upload fa-3x text-primary mb-3"></i>
                <h4>Step 1: Upload Your Resume</h4>
                <p>Drag and drop or select a file to upload your resume and job description in any major file format (PDF, DOCX, etc.).</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="how-it-works-step">
                <i class="fas fa-comments fa-3x text-primary mb-3"></i>
                <h4>Step 2: Receive Instant Feedback</h4>
                <p>Our AI system analyzes your resume and job description, offering personalized feedback and actionable recommendations.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="how-it-works-step">
                <i class="fas fa-search fa-3x text-primary mb-3"></i>
                <h4>Step 3: Optimize for ATS</h4>
                <p>Improve your resume’s ATS compatibility with keyword suggestions and semantic analysis to match job requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- About Our App Section -->
      <div class="about-app-section py-5 bg-white">
        <div class="container text-center">
          <h2 class="section-title">About ResumeHelper</h2>
          <p class="section-description">
            ResumeHelper is a cutting-edge AI-driven tool designed to help job seekers optimize their resumes for maximum impact. 
            Whether you're just starting your job search or looking to refine an existing resume, our platform provides instant feedback, 
            tailored suggestions, and ATS optimization to ensure your resume stands out to both recruiters and Applicant Tracking Systems.
          </p>
          <p class="section-description">
            Our mission is to empower job seekers by giving them the tools and insights they need to create a professional, polished resume 
            that aligns with industry standards and job requirements. With ResumeHelper, you’ll improve your chances of getting noticed 
            and securing your dream job.
          </p>
        </div>
      </div>

      <!-- Testimonials Section -->
      <div class="testimonials-section py-5">
        <div class="container text-center">
          <h2 class="section-title">What Our Users Are Saying</h2>
          <div class="row">
            <div class="col-md-4">
              <blockquote class="blockquote">
                <p>"ResumeHelper helped me tailor my resume to perfection and land interviews faster!"</p>
                <footer class="blockquote-footer">Sarah, Marketing Professional</footer>
              </blockquote>
            </div>
            <div class="col-md-4">
              <blockquote class="blockquote">
                <p>"The ATS optimization feature was a game-changer for me. I finally got noticed!"</p>
                <footer class="blockquote-footer">David, Software Engineer</footer>
              </blockquote>
            </div>
            <div class="col-md-4">
              <blockquote class="blockquote">
                <p>"The personalized feedback I received was invaluable in making my resume stand out."</p>
                <footer class="blockquote-footer">John, Graphic Designer</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action Section -->
      <div class="cta-section text-center py-5">
        <h2>Ready to Boost Your Career?</h2>
        <p class="lead">Start optimizing your resume today and increase your chances of standing out to recruiters and ATS!</p>
        <button @click="goToUpload" class="btn btn-primary btn-lg">Get Started</button>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    goToUpload() {
      this.$router.push('/upload');
    },
    learnMore() {
      this.$router.push('/about');
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

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.hero-btn {
  padding: 12px 30px;
  font-size: 1.1rem;
}

.hero-btn:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

/* Features Section */
.features-section {
  background-color: #f8f9fa;
  padding: 50px 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 40px;
}

.feature-cards {
  display: flex;
  justify-content: center;
}

.feature-card {
  background-color: white;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.feature-card i {
  color: #007bff;
  margin-bottom: 20px;
}

/* How It Works Section */
.how-it-works-section {
  background-color: #e9ecef;
}

.how-it-works-step {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.how-it-works-step i {
  color: #007bff;
  margin-bottom: 20px;
}

/* About Our App Section */
.about-app-section {
  background-color: #fff;
  padding: 50px 0;
}

.section-description {
  font-size: 1.15rem;
  color: #6c757d;
  margin-bottom: 20px;
}

/* Testimonials Section */
.testimonials-section {
  background-color: #f8f9fa;
}

blockquote {
  font-size: 1.1rem;
  font-style: italic;
  color: #6c757d;
}

blockquote footer {
  color: #007bff;
  font-size: 1rem;
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
