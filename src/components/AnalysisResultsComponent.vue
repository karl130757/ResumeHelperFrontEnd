<!-- src/components/AnalysisResultsComponent.vue -->
<template>
    <div class="container py-5">
      <h2 class="text-center">Resume Analysis</h2>
      <p class="text-center">Here’s what we found about your resume: {{ filename }}</p>
  
      <!-- Feedback Section -->
      <div class="card p-4 shadow-sm">
        <h4>General Feedback</h4>
        <ul>
          <li>Score: 80/100</li>
          <li>Missing keywords: "Project Management", "Agile", etc.</li>
          <li>Formatting suggestions: Improve readability with clearer section headings.</li>
        </ul>
      </div>
  
      <!-- Keyword Suggestions Section -->
      <div class="card p-4 shadow-sm mt-4">
        <h4>Suggested Keywords</h4>
        <ul>
          <li>Management</li>
          <li>Leadership</li>
          <li>Team Collaboration</li>
          <li>Problem Solving</li>
        </ul>
      </div>
  
      <!-- Resume Download Section -->
      <div class="card p-4 shadow-sm mt-4 text-center">
        <button class="btn btn-primary">Download Improved Resume</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        filename: this.$route.query.filename || "No file uploaded",
      };
    },
  };
  </script>
  
  <style scoped>
  .card {
    border-radius: 10px;
    background-color: #fff;
  }
  button {
    width: 100%;
    padding: 12px;
    font-size: 16px;
  }
  button:hover {
    background-color: #4CAF50;
  }
  </style>
  