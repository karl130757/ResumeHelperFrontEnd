<template>
  <div class="container py-5">
    <h2 class="text-center">Resume Analysis</h2>
    <p class="text-center">Here’s what we found about your resume: {{ filename }}</p>

    <!-- General Feedback Section -->
    <div class="card p-4 shadow-sm" v-if="resumeAnalysis">
      <h4>General Feedback</h4>
      <ul>
        <li><strong>ATS Score:</strong> {{ resumeAnalysis.ats_score }}/100</li>
        <li><strong>ATS Compatibility:</strong> {{ resumeAnalysis.feedback['ATS Compatibility'] }}</li>
        <li><strong>Experience and Skills:</strong> {{ resumeAnalysis.feedback['Experience and Skills'] }}</li>
        <li><strong>Overall Structure:</strong> {{ resumeAnalysis.feedback['Overall Structure'] }}</li>
      </ul>
    </div>

    <!-- Keyword Suggestions Section -->
    <div class="card p-4 shadow-sm mt-4" v-if="resumeAnalysis.top_keywords?.length">
      <h4>Suggested Keywords</h4>
      <ul>
        <li v-for="(keyword, index) in resumeAnalysis.top_keywords" :key="index">
          {{ keyword.word }} ({{ keyword.count }} mentions)
        </li>
      </ul>
    </div>

    <!-- Named Entities Section -->
    <div class="card p-4 shadow-sm mt-4" v-if="resumeAnalysis.named_entities?.length">
      <h4>Named Entities</h4>
      <ul>
        <li v-for="(entity, index) in resumeAnalysis.named_entities" :key="index">
          <strong>{{ entity.label }}:</strong> {{ entity.text }}
        </li>
      </ul>
    </div>

    <!-- Resume Download Section -->
    <div class="card p-4 shadow-sm mt-4 text-center">
      <button class="btn btn-primary" @click="downloadResume">Download Improved Resume</button>
    </div>
  </div>
</template>

<script>
import { useResumeStore } from "../store/resumeStore";

export default {
  data() {
    return {
      filename: this.$route.query.filename || "No file uploaded",
    };
  },
  computed: {
    resumeAnalysis() {
      // Access the state from the store
      const resumeStore = useResumeStore();
      console.log()
      return resumeStore.resumeAnalysis;
    },
  },
  methods: {
    downloadResume() {
      alert("Download functionality is under construction.");
    },
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
