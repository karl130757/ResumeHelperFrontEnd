<template>
  <div class="container py-5">
    <!-- Section Heading -->
    <h2 class="text-center mb-4">Upload Your Resume</h2>
    <p class="text-center mb-5">
      Upload your resume (PDF, DOCX) and provide a job description to get instant feedback and suggestions on how to optimize your resume for the specific role.
    </p>

    <!-- Upload Form -->
    <div class="d-flex justify-content-center">
      <div class="card p-4 shadow-lg" style="max-width: 600px; width: 100%;">

        <!-- File Upload Section -->
        <div 
          class="file-upload-container"
          :class="{'dragging': isDragging}"
          @dragenter.prevent="handleDragEnter"
          @dragover.prevent="handleDragOver"
          @dragleave.prevent="handleDragLeave"
          @drop.prevent="handleDrop"
        >
          <label for="resume-upload" class="upload-label">
            <i class="fa fa-upload upload-icon"></i> 
            Choose Resume (PDF, DOCX) or Drag & Drop
          </label>
          <input 
            id="resume-upload"
            type="file" 
            class="form-control-file mb-3" 
            @change="handleFileUpload" 
            accept=".pdf,.doc,.docx" 
          />
        </div>

        <!-- Display Filename after Upload -->
        <p v-if="filename" class="text-center mt-3">{{ filename }}</p>

        <!-- Job Description Input -->
        <div class="mb-4">
          <label for="job-description" class="form-label">Job Description</label>
          <textarea 
            id="job-description" 
            v-model="jobDescription" 
            class="form-control" 
            rows="4" 
            placeholder="Please enter the job description for your targeted role here. This will help tailor the resume feedback."
            required
          ></textarea>
        </div>

        <!-- Button to Analyze Resume -->
        <button 
          v-if="resume && jobDescription && !loading" 
          class="btn btn-primary w-100" 
          @click="analyzeResume"
        >
          Analyze Resume
        </button>

        <!-- Display Loading State -->
        <p v-if="loading" class="text-center text-primary mt-3">Analyzing your resume...</p>

        <!-- Display Error Message -->
        <p v-if="error" class="text-center text-danger mt-3">{{ error }}</p>

       

        <!-- Display Message if No File Uploaded -->
        <p v-if="!resume && !loading" class="text-muted mt-2 text-center">No file uploaded yet. Please choose a file.</p>
        <!-- Display Message if Job Description is Missing -->
        <p v-if="!jobDescription && !loading" class="text-muted mt-2 text-center">Job description is required to analyze your resume.</p>

      </div>
    </div>
  </div>
</template>

<script>
import { useResumeStore } from "../store/resumeStore";

export default {
  data() {
    return {
      resume: null,            // Store the uploaded file
      filename: '',            // Store the name of the uploaded file
      jobDescription: '',      // Store the job description input
      isDragging: false,       // Track drag state
    };
  },
  computed: {
    // Map Pinia state to computed properties
    loading() {
      return this.resumeStore.loading;
    },
    resumeAnalysis() {
      return this.resumeStore.resumeAnalysis;
    },
    error() {
      return this.resumeStore.error;
    },
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.resume = file;
      this.filename = file.name; // Set the filename when a file is uploaded
    },
    async analyzeResume() {
      if (!this.resume || !this.jobDescription) return;

      try {
        // Use the store action to upload and analyze the resume
        await this.resumeStore.uploadResume(this.resume, this.jobDescription);

        // Redirect to the analysis results page with the filename as a query parameter
        this.$router.push({
          path: '/analysis',
          query: { filename: this.filename }
        });
      } catch (error) {
        console.error('Error analyzing resume:', error);
      }
    },
    handleDragEnter() {
      this.isDragging = true;
    },
    handleDragOver() {
      this.isDragging = true;
    },
    handleDragLeave() {
      this.isDragging = false;
    },
    handleDrop(event) {
      this.isDragging = false;
      const file = event.dataTransfer.files[0];
      if (file) {
        this.resume = file;
        this.filename = file.name; // Set the filename when a file is dropped
      }
    },
  },
  created() {
    // Initialize the Pinia store
    this.resumeStore = useResumeStore();
  },
};
</script>


<style scoped>
/* General Card Styling */
.card {
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); /* Soft drop shadow */
  padding: 30px;
  position: relative;
}

/* Add subtle gradient background to the card */
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #f7f8fa, #e0e8ff);
  z-index: -1;
  border-radius: 15px;
  opacity: 0.08;
}

/* File Upload Container */
.file-upload-container {
  position: relative;
  padding: 40px;
  border: 2px dashed #007bff;
  border-radius: 12px;
  margin-bottom: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  text-align: center;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
}

.file-upload-container.dragging {
  background-color: rgba(0, 123, 255, 0.1);
  border-color: #007bff;
}

/* Upload label styling */
.upload-label {
  display: block;
  font-size: 1.2rem;
  color: #007bff;
  text-align: center;
  padding: 12px;
  cursor: pointer;
  font-weight: 600;
  transition: color 0.3s ease;
}

.upload-label:hover {
  color: #0056b3;
}

.upload-icon {
  margin-right: 8px;
}

/* File Input Styling */
input[type="file"] {
  display: none;
}

/* Job Description Textarea Styling */
textarea {
  resize: none;
  min-height: 120px;
  font-size: 1.1rem;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  width: 100%;
}

textarea:focus {
  outline: none;
  border-color: #007bff;
}

/* Button Styling */
button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 30px;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
  margin-top: 20px;
}

button:hover {
  background-color: #0056b3;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transform: translateY(-3px);
}

/* Message Styling for Unuploaded File */
p.text-muted {
  text-align: center;
  font-size: 0.95rem;
  color: #777;
}

/* Add subtle hover effect for file upload */
.file-upload-container:hover {
  background-color: #f1f8ff;
  border-color: #0056b3;
}

/* Responsive Design */
@media (max-width: 768px) {
  .card {
    padding: 20px;
  }

  .upload-label {
    font-size: 1rem;
  }

  button {
    padding: 10px;
    font-size: 1.1rem;
  }

  .file-upload-container {
    padding: 25px;
  }
}
</style>
