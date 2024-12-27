import { defineStore } from 'pinia';
import axios from 'axios';

export const useResumeStore = defineStore('resumeStore', {
  state: () => ({
    resumeAnalysis: null,
    loading: false,
    error: null,
  }),

  actions: {
    async uploadResume(file, jobDescription) {
      const formData = new FormData();
      formData.append('resume', file);
      formData.append('jobDescription', jobDescription);

      this.loading = true;
      this.error = null;

      try {
        const response = await axios.post('http://localhost:3000/api/resumes/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        console.log(response.data);
        this.resumeAnalysis = response.data.analysisResult;
      } catch (err) {
        this.error = err.response?.data?.message || 'Failed to upload resume.';
      } finally {
        this.loading = false;
      }
    },
  },
});
