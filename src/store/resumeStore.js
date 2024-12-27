import { defineStore } from 'pinia';
import axios from 'axios';

export const useResumeStore = defineStore('resumeStore', {
  state: () => ({
    resumeAnalysis: null,
    jobRecommendations: [],
    loading: false,
    error: null,
  }),

  actions: {
    async uploadResume(file) {
      const formData = new FormData();
      formData.append('resume', file);

      this.loading = true;
      this.error = null;

      try {
        const response = await axios.post('http://localhost:3000/api/resumes/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        console.log(response.data);
        this.resumeAnalysis = response.data.analysisResult;
        this.jobRecommendations = response.data.analysisResult.jobRecommendations;
      } catch (err) {
        this.error = err.response?.data?.message || 'Failed to upload resume.';
      } finally {
        this.loading = false;
      }
    },
  },
});
