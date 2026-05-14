# ✈️ Wanderlast Travel App

<div align="center">

<p align="center">
  <img src="public/Wanderlast.png" alt="Logo" width="200" />
</p>

**A modern travel booking application for exploring and booking destinations with ease.**

[Live Demo](https://wanderlast-travelapps-frontend.onrender.com/) <!-- TODO: Add live demo link --> |
[Documentation](https://docs-link.com) <!-- TODO: Add documentation link -->

</div>

## 📖 Overview

The Wanderlast Travel App is a comprehensive full-stack solution designed to provide users with a fast, responsive, and visually appealing platform for discovering and booking travel destinations. Built with a robust combination of Next.js for the frontend and Express.js/Node.js for the backend, the application focuses on delivering a seamless user experience. Travelers can effortlessly search for destinations, explore various tour packages, and securely complete their trip bookings, all within an intuitive interface enhanced by Tailwind CSS and Hero UI.

## ✨ Features

-   🎯 **Destination Search & Browsing:** Explore a wide range of travel destinations with powerful search capabilities.
-   🌴 **Tour Package Exploration:** Detailed views of tour packages, including itineraries, pricing, and availability.
-   💳 **Secure Booking Process:** A streamlined and secure checkout flow for booking selected trips.
-   📱 **Responsive User Interface:** Optimized for a consistent experience across desktop, tablet, and mobile devices, powered by Tailwind CSS.
-   🚀 **Fast & Modern Frontend:** Leverages Next.js for server-side rendering (SSR) and static site generation (SSG) for improved performance and SEO.
-   🛡️ **Robust Backend API:** A scalable and secure RESTful API built with Node.js and Express.js to handle all application logic and data management.
-   🔒 **Authentication System:** (Inferred) User registration, login, and secure session management for personalized experiences.
-   ⚙️ **Admin Panel:** (Inferred) Functionality for managing destinations, packages, and bookings.



## 🛠️ Tech Stack

**Frontend:**
![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232A.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
<!-- Hero UI is often a component library/set of styles, not a standalone badge -->
<br> Styling & Components: Tailwind CSS, Hero UI

**Backend:**
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404040.svg?style=for-the-badge)

**Database:**
<!-- MongoDB is a common choice for Node/Express applications. Assuming for now. -->
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
<br> Database Management: Mongoose (commonly used with MongoDB in Node.js)

## 🚀 Quick Start

Follow these steps to get the Wanderlast Travel App up and running on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:
-   **Node.js**: v18.x or later (includes npm)
-   **MongoDB**: A running instance of MongoDB (local or cloud-hosted)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/satyajtus14/Project-On-Wanderlast-Travel-Apps.git
    cd Project-On-Wanderlast-Travel-Apps
    ```

2.  **Navigate to the Backend directory and install dependencies**
    ```bash
    cd WonderLand-BackEnd
    npm install
    ```

3.  **Navigate to the Frontend directory and install dependencies**
    ```bash
    cd ../wonderlash-FrontEnd
    npm install
    ```

### Environment Setup

Create `.env` files in both the `WonderLand-BackEnd` and `wonderlash-FrontEnd` directories based on the examples below.

#### Backend (`WonderLand-BackEnd/.env`)

```ini
PORT=5000
MONGO_URI="mongodb://localhost:27017/wanderlast_db" # Or your MongoDB Atlas connection string
JWT_SECRET="YOUR_SECRET_KEY"
# Add other environment variables as needed (e.g., for external services)
```

#### Frontend (`wonderlash-FrontEnd/.env.local`)

```ini
NEXT_PUBLIC_API_URL="http://localhost:5000/api" # Point to your backend API
# Add other public environment variables as needed (e.g., for analytics)
```

### Database Setup

Make sure your MongoDB instance is running. The backend will connect to it using the `MONGO_URI` provided in its `.env` file.
<!-- TODO: If there are initial data seeding scripts or explicit migration commands, add them here. -->
<!-- E.g., `npm run seed-db` -->

### Start Development Servers

You will need to run both the backend and frontend development servers concurrently.

1.  **Start the Backend server**
    Open a new terminal, navigate to the `WonderLand-BackEnd` directory, and run:
    ```bash
    cd WonderLand-BackEnd
    npm start
    ```
    The backend API will be available at `http://localhost:5000`.

2.  **Start the Frontend development server**
    Open another new terminal, navigate to the `wonderlash-FrontEnd` directory, and run:
    ```bash
    cd wonderlash-FrontEnd
    npm run dev
    ```
    The frontend application will be available at `http://localhost:3000`.

3.  **Open your browser**
    Visit `http://localhost:3000` to interact with the application.

## 📁 Project Structure

```
Project-On-Wanderlast-Travel-Apps/
├── WonderLand-BackEnd/          # Backend service (Node.js/Express.js)
│   ├── src/                     # Source code
│   │   ├── controllers/         # Request handlers
│   │   ├── models/              # Database schemas (e.g., Mongoose models)
│   │   ├── routes/              # API route definitions
│   │   ├── middleware/          # Express middleware
│   │   └── utils/               # Utility functions
│   ├── config/                  # Configuration files
│   ├── .env                     # Environment variables (local)
│   ├── package.json             # Backend dependencies and scripts
│   └── server.js                # Main backend entry point
├── wonderlash-FrontEnd/         # Frontend application (Next.js)
│   ├── public/                  # Static assets
│   ├── src/                     # Application source code
│   │   ├── app/                 # Next.js App Router (pages, layouts) or `pages/` for Pages Router
│   │   ├── components/          # Reusable React components
│   │   ├── hooks/               # Custom React hooks
│   │   ├── contexts/            # React Context API for state management
│   │   ├── styles/              # Global styles, Tailwind CSS configuration
│   │   └── utils/               # Frontend utility functions
│   ├── .env.local               # Environment variables (local)
│   ├── next.config.js           # Next.js configuration
│   ├── package.json             # Frontend dependencies and scripts
│   ├── postcss.config.js        # PostCSS configuration (for Tailwind)
│   └── tailwind.config.js       # Tailwind CSS configuration
└── README.md                    # This README file
```

## ⚙️ Configuration

### Environment Variables

Both the backend and frontend utilize environment variables for sensitive information and configuration.
Refer to the `.env` examples in the [Environment Setup](#environment-setup) section.

#### Backend (`WonderLand-BackEnd`)

| Variable      | Description                                       | Default        | Required |
| :------------ | :------------------------------------------------ | :------------- | :------- |
| `PORT`        | Port for the Express.js server to listen on       | `5000`         | Yes      |
| `MONGO_URI`   | MongoDB connection string                         | `N/A`          | Yes      |
| `JWT_SECRET`  | Secret key for signing JWTs for authentication    | `N/A`          | Yes      |
| `NODEMAILER_EMAIL` | Email for sending verification/reset emails | `N/A`          | No       |
| `NODEMAILER_PASS`  | Password for the email account                | `N/A`          | No       |

#### Frontend (`wonderlash-FrontEnd`)

| Variable            | Description                           | Default              | Required |
| :------------------ | :------------------------------------ | :------------------- | :------- |
| `NEXT_PUBLIC_API_URL` | Base URL for the backend API endpoints | `http://localhost:5000/api` | Yes      |

### Configuration Files

-   `next.config.js`: Next.js specific configurations.
-   `tailwind.config.js`: Tailwind CSS customization and theme settings.
-   `postcss.config.js`: PostCSS configuration for processing CSS.
-   `package.json` (both directories): Contains project metadata, scripts, and dependencies.

## 🔧 Development

### Available Scripts

#### Backend (`WonderLand-BackEnd`)

| Command       | Description                     |
| :------------ | :------------------------------ |
| `npm start`   | Starts the Express.js server.   |
| `npm dev`     | Starts the server with `nodemon` for auto-reloading. (Inferred) |
| `npm test`    | Runs backend tests. <!-- TODO: Add actual test command if detected --> |

#### Frontend (`wonderlash-FrontEnd`)

| Command       | Description                                  |
| :------------ | :------------------------------------------- |
| `npm run dev` | Starts the Next.js development server.       |
| `npm run build` | Builds the Next.js application for production. |
| `npm run start` | Starts the Next.js production server.        |
| `npm run lint` | Lints the code with ESLint.                  |
| `npm test`    | Runs frontend tests. <!-- TODO: Add actual test command if detected --> |

### Development Workflow

1.  Keep both the backend (`npm start` or `npm dev`) and frontend (`npm run dev`) servers running in separate terminal windows.
2.  Any changes made to the backend code will typically require a server restart (or `npm dev` will handle it).
3.  Frontend changes will trigger hot-reloading in the browser.

## 🧪 Testing

<!-- TODO: Analyze code for testing frameworks (Jest, React Testing Library for frontend; Mocha, Chai, Jest for backend) and provide specific commands. -->
Currently, specific testing configurations were not detected from the repository structure alone.

### Running Tests

```bash
# Example: Run frontend tests
cd wonderlash-FrontEnd
npm test

# Example: Run backend tests
cd WonderLand-BackEnd
npm test
```

## 🚀 Deployment

### Production Build

To prepare the frontend for production:

```bash
cd wonderlash-FrontEnd
npm run build
```
This command generates an optimized build of your Next.js application in the `.next` directory.

### Deployment Options

-   **Frontend (Next.js):**
    -   **Vercel / Netlify:** Highly recommended for Next.js applications due to seamless integration and optimal performance.
    -   **Traditional Hosting:** The `npm run build` command creates a static output that can be served by any static web server (e.g., Nginx, Apache) or a Node.js server using `npm run start`.
-   **Backend (Node.js/Express.js):**
    -   **Cloud Platforms:** AWS EC2, Heroku, Google Cloud Run, DigitalOcean App Platform, or a custom VPS.
    -   **Containerization (Docker):** <!-- TODO: Add Docker-specific instructions if Dockerfile is present -->
    -   Ensure environment variables (`PORT`, `MONGO_URI`, `JWT_SECRET`, etc.) are configured in your deployment environment.

## 📚 API Reference

The backend, located in `WonderLand-BackEnd`, exposes a RESTful API for the frontend and other clients.

### Base URL

`http://localhost:5000/api` (during development)

### Authentication

(Inferred) The API likely uses JSON Web Tokens (JWT) for user authentication.
-   Users can register (`POST /api/auth/register`) and log in (`POST /api/auth/login`).
-   Authenticated requests should include a `Bearer` token in the `Authorization` header.

### Endpoints

<!-- TODO: Generate actual API endpoints based on route files in WonderLand-BackEnd/routes/ -->

#### `Auth` (e.g., `WonderLand-BackEnd/routes/auth.js`)
-   `POST /api/auth/register`: Register a new user.
-   `POST /api/auth/login`: Log in a user and receive a JWT.
-   `GET /api/auth/me`: Get current user details (requires JWT).

#### `Destinations` (e.g., `WonderLand-BackEnd/routes/destinations.js`)
-   `GET /api/destinations`: Retrieve all travel destinations.
-   `GET /api/destinations/:id`: Retrieve a specific destination by ID.
-   `POST /api/destinations`: Create a new destination (admin-only, requires JWT).
-   `PUT /api/destinations/:id`: Update a destination (admin-only, requires JWT).
-   `DELETE /api/destinations/:id`: Delete a destination (admin-only, requires JWT).

#### `Packages` (e.g., `WonderLand-BackEnd/routes/packages.js`)
-   `GET /api/packages`: Retrieve all tour packages.
-   `GET /api/packages/:id`: Retrieve a specific package by ID.
-   `POST /api/packages`: Create a new package (admin-only, requires JWT).
-   `PUT /api/packages/:id`: Update a package (admin-only, requires JWT).
-   `DELETE /api/packages/:id`: Delete a package (admin-only, requires JWT).

#### `Bookings` (e.g., `WonderLand-BackEnd/routes/bookings.js`)
-   `POST /api/bookings`: Create a new booking (requires JWT).
-   `GET /api/bookings/my-bookings`: Retrieve user's bookings (requires JWT).
-   `GET /api/bookings/:id`: Retrieve a specific booking by ID (admin-only, requires JWT).

## 🤝 Contributing

We welcome contributions to the Wanderlast Travel App! Please see our [Contributing Guide](CONTRIBUTING.md) for details. <!-- TODO: Create CONTRIBUTING.md -->

### Development Setup for Contributors

The development setup is identical to the [Quick Start](#quick-start) guide. Ensure both the frontend and backend are running to develop new features or fix bugs.

## 📄 License

This project is currently without an explicit license in the repository metadata. Please refer to the repository owner for licensing information.


## 🙏 Acknowledgments

-   **Next.js**: For the powerful and performant frontend framework.
-   **Express.js**: For the flexible and minimalist web framework for Node.js.
-   **Tailwind CSS**: For simplifying UI development with utility-first CSS.
-   **Hero UI**: For the beautiful and accessible UI components.
-   **MongoDB**: For the scalable NoSQL database.
-   **Mongoose**: For elegant MongoDB object modeling for Node.js.
-   **All Contributors**: <!-- TODO: List specific contributors if available -->

## 📞 Support & Contact

-   📧 Email: [baruattbbk@yahoo.com] <!-- TODO: Add actual contact email -->
-   🐛 Issues: [GitHub Issues](https://github.com/satyajtus14/Project-On-Wanderlast-Travel-Apps/issues)
-   💬 Discussions: <!-- TODO: Add GitHub Discussions link if enabled -->

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [SATYAJIT BARUA](https://github.com/satyajtus14)

</div>
