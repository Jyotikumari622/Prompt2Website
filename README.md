# Prompt2Website — AI-Powered Website Generator

**Turn your ideas into websites with AI.**

Prompt2Website is a full-stack AI-powered website Generator that transforms natural-language prompts into responsive website designs. Users can generate websites, preview the output, refine designs through follow-up prompts, and manage their generated projects through an interactive dashboard.

Built with the MERN stack and integrated with OpenRouter AI, the platform explores how generative AI can simplify website creation and make web development more accessible.

## 🌐 Project Overview

Creating a website traditionally requires knowledge of HTML, CSS, JavaScript, and frontend development. Prompt2Website aims to simplify this process by allowing users to describe their ideas in plain language and generate website code with AI assistance.

The platform combines AI-powered code generation with a full-stack application architecture, authentication, persistent project storage, website previews, and an editing workflow.

## ✨ Key Features

- **AI Website Generation** — Generate website code from natural-language prompts using an AI model.
- **Prompt-Based Editing** — Refine an existing website by describing the desired changes.
- **Live Website Preview** — Preview generated websites within the application.
- **User Authentication** — Sign-in functionality and protected application areas.
- **Project Dashboard** — Access and manage saved website projects.
- **Persistent Storage** — Store website data and generated code in MongoDB.
- **Code-Generation Workflow** — Process AI responses and extract generated website content.
- **Credit-Based Usage** — Integrate usage credits into the website-generation and editing workflow.
- **Responsive Interface** — Build and manage projects through a modern React-based interface.
- **Deployment Workflow** — Generate deployment URLs through the application's deployment functionality; public hosting requires the deployment infrastructure to be configured.

## 🛠️ Technology Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Redux Toolkit
- Axios
- Tailwind CSS
- Monaco Editor
- Firebase Authentication
- Lucide React

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- OpenRouter API
- REST API architecture

### Development & Deployment
- Git and GitHub
- npm
- Vite development server
- MongoDB Atlas
- Render / Vercel or other suitable hosting platforms, depending on deployment configuration

## 🏗️ System Architecture

```text
                ┌────────────────────────┐
                │       User Prompt      │
                └────────────┬───────────┘
                             │
                             ▼
                ┌────────────────────────┐
                │   React + Vite Client  │
                │  UI, Dashboard, Editor  │
                └────────────┬───────────┘
                             │
                        REST API
                             │
                             ▼
                ┌────────────────────────┐
                │   Express.js Backend   │
                │ Auth & Request Handling│
                └────────────┬───────────┘
                             │
                  ┌──────────┴──────────┐
                  ▼                     ▼
        ┌──────────────────┐  ┌──────────────────┐
        │  OpenRouter API  │  │   MongoDB Atlas  │
        │ AI Code Generation│  │ Project Storage  │
        └────────┬─────────┘  └──────────────────┘
                 │
                 ▼
        ┌────────────────────┐
        │ Generated Website  │
        │ Preview & Editing  │
        └────────────────────┘
```

## ⚙️ How It Works

1. **Authentication:** The user signs in to access the application.
2. **Prompt Submission:** The user describes the website they want to create.
3. **AI Processing:** The backend sends the generation request to an OpenRouter model.
4. **Code Generation:** The model returns website content that the backend processes.
5. **Persistence:** The generated website data is stored in MongoDB.
6. **Preview:** The frontend displays the generated website.
7. **Iterative Editing:** Users submit follow-up prompts to request design or content changes.
8. **Project Management:** Users can revisit saved websites through the dashboard.
9. **Deployment Workflow:** The application generates a website URL; making it publicly accessible requires a working production hosting setup.

## 📁 Project Structure

```text
Prompt2Website/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── redux/
│   │   ├── hooks/
│   │   └── App.jsx
│   ├── package.json
│   └── ...
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── index.js
│   └── package.json
│
├── .gitignore
└── README.md
```

*Note: The structure above summarizes the main directories. Individual filenames may vary with the current implementation.*

## 💻 Getting Started

### Prerequisites

Install the following before running the project:

- Node.js and npm
- A MongoDB database or MongoDB Atlas account
- A Firebase project with the authentication providers you intend to use enabled
- An OpenRouter API key

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Prompt2Website
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your own repository URL.

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

### 3. Install Backend Dependencies

Open a second terminal:

```bash
cd server
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `server` directory and configure the variables required by the backend.

Example template:

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_random_secret
OPENROUTER_API_KEY=your_openrouter_api_key
FRONTEND_URL=http://localhost:5173
```

Use the exact variable names expected by your existing source code. Configure Firebase settings and other required variables according to the client and server configuration.

**Security:** Never commit `.env` files, API keys, database credentials, or private secrets to GitHub. Add them to `.gitignore` and configure production secrets through your hosting provider.

### 5. Start the Backend

From the `server` directory, run the development script defined in `server/package.json`. For example, if the project uses `dev`:

```bash
npm run dev
```

### 6. Start the Frontend

From the `client` directory:

```bash
npm run dev
```

Open the local URL printed by Vite, commonly:

```text
http://localhost:5173
```

*If your package scripts use different commands or your application requires additional configuration, follow the scripts and configuration in the repository.*

## 🔐 Security Considerations

- Keep API keys and database credentials on the server or in secure environment configuration.
- Use a strong, unique JWT secret.
- Configure CORS to allow only trusted frontend origins in production.
- Validate authentication and authorization on protected API endpoints.
- Apply appropriate request validation, error handling, and rate limiting to AI-powered endpoints.
- Review generated HTML before rendering it; AI-generated content must be handled safely.
- Configure payment and webhook security before enabling real transactions.

## 🚀 Deployment

A production deployment typically requires:

1. Hosting the React/Vite frontend.
2. Hosting the Express backend on a public server.
3. Configuring the production MongoDB connection.
4. Adding Firebase and OpenRouter configuration securely.
5. Setting the correct frontend URL, backend API URL, and CORS origins.
6. Testing authentication, website generation, editing, persistence, and generated website routes.
7. Configuring a real hosting mechanism for generated websites if each project must have a publicly accessible URL.

**Important:** A generated URL alone does not mean that a website has been published to the public internet. Verify the hosting and routing implementation before advertising public deployment as a working feature.

## 🔮 Future Enhancements

- Drag-and-drop visual website editing
- Download generated projects as ZIP files
- Multi-page website generation
- Custom domain support
- Reusable website templates
- Version history and rollback
- Improved AI prompt controls
- Usage analytics and project insights
- Automated deployment to external hosting platforms
- Enhanced code validation and preview sandboxing

## 🎯 Project Objectives

Prompt2Website demonstrates the integration of generative AI with full-stack web development. Its main objectives are to:

- Reduce the effort required to create an initial website.
- Enable iterative design changes through natural-language instructions.
- Combine frontend development, REST APIs, authentication, and database persistence.
- Explore AI-assisted developer workflows and website generation.
- Provide a foundation for future website publishing and customization features.

## 👩‍💻 Development

This project is being developed and customized as a learning and portfolio project using React, Node.js, Express, MongoDB, and OpenRouter AI.


