
# ResumeHelperFrontend

## Overview
**ResumeHelperFrontend** is a user-friendly interface built to enhance the user experience when interacting with the **ResumeHelperMicroService**. Designed with the Vue.js framework, it provides an intuitive platform for users to upload resumes and job descriptions, view ATS feedback, and optimize their resumes seamlessly.

This frontend communicates with the **ResumeHelperBackend**, which manages the connection to the microservice, ensuring a smooth and efficient user journey.

## Features
- **Resume and Job Description Upload**: Allows users to upload resumes and job descriptions in various formats (`.txt`, `.pdf`, `.docx`).
- **ATS Score Display**: Displays the ATS compatibility score and detailed feedback in an easy-to-read format.
- **Interactive Feedback**: Shows actionable suggestions categorized into sections like skills, work experience, and structure.
- **Responsive Design**: Optimized for both desktop and mobile devices, ensuring accessibility and ease of use.
- **Real-Time Updates**: Integrates dynamic components to fetch and display results as they are processed by the backend.

## Technologies Used
- **Vue.js**: Framework for building the user interface.
- **Axios**: For communicating with the backend API.
- **Vuetify**: Material Design component framework for Vue.js, enhancing UI/UX.
- **HTML5 & CSS3**: For structuring and styling the application.
- **JavaScript**: Backend API integration and dynamic behavior.

## How It Works
1. **User Input**: The user uploads a resume and job description through the interface.
2. **API Request**: The frontend sends the data to the **ResumeHelperBackend** for processing.
3. **Feedback Display**: The backend response is displayed in a structured, interactive format, showing ATS scores and actionable recommendations.
4. **User Action**: Users can iterate based on the suggestions to refine their resumes.

## Installation
To set up and run the frontend locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/ResumeHelperFrontend.git
    cd ResumeHelperFrontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure environment variables:
    Create a `.env` file in the root directory and add the following:
    ```env
    VUE_APP_BACKEND_URL=http://127.0.0.1:3000/api
    ```

4. Start the development server:
    ```bash
    npm run serve
    ```

5. Access the application locally at: [http://localhost:8080](http://localhost:8080)

## Usage
### Key Pages:
- **Home Page**: Introduction and overview of the application.
- **Resume Upload Page**: Users can upload resumes and job descriptions for analysis.
- **Results Page**: Displays ATS scores and detailed feedback in an interactive format.

### Example Flow:
1. Visit the application at [http://localhost:8080](http://localhost:8080).
2. Upload a resume and job description on the upload page.
3. View feedback and ATS scores on the results page.
4. Refine and re-upload your resume for better results.

## Project Structure
The project follows a standard Vue.js structure:

```
ResumeHelperFrontend/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images, icons, and global styles
│   ├── components/  # Vue.js components (e.g., UploadForm, FeedbackDisplay)
│   ├── views/       # Page-level components (e.g., Home, Upload, Results)
│   ├── router/      # Application routes
│   ├── store/       # Vuex store for state management
│   ├── App.vue      # Root Vue component
│   └── main.js      # Application entry point
├── .env             # Environment variables
├── package.json     # Project dependencies and scripts
└── README.md        # Project documentation
```

## API Integration
The frontend communicates with the backend via RESTful APIs.

### Example Request to Backend:
```javascript
import axios from 'axios';

export async function analyzeResume(resumeFile, jobDescriptionFile) {
  const formData = new FormData();
  formData.append('resume', resumeFile);
  formData.append('job_description', jobDescriptionFile);

  const response = await axios.post(`${process.env.VUE_APP_BACKEND_URL}/resume/upload`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
}
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
