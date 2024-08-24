# Simple JWT Authentication Project

This is a simple project that implements user login functionality using JWT (JSON Web Token) in an Express backend and a React.js frontend.

## Features

- User authentication using JWT.
- Secure password hashing with bcrypt.
- Token-based authentication for protected routes.
- Basic frontend with React.js to handle login.

## Tech Stack

### Backend
- **Node.js**: Server environment
- **Express.js**: Web framework for Node.js
- **Sequelize**: ORM for database interaction
- **MySQL**: Database
- **JWT**: JSON Web Token for authentication
- **bcrypt**: Password hashing

### Frontend
- **React.js**: Frontend library for building user interfaces
- **Axios**: Promise-based HTTP client for the browser and Node.js

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lutfiangga/express-jwt.git
   ```
2. Navigate to the project directory:
   ```bash
   cd express-jwt
   ```
   
3. Install dependencies for the backend:
   ```bash
   cd backend
   ```
   ```bash
   npm install
   ```
4. Install dependencies for the backend:
   ```bash
   cd frontend
   ```
   ```bash
   npm install
   ```

## Configuration

1. Create a .env file in the backend directory with the following contents:
   ```bash
   ACCESS_TOKEN_SECRET=your_access_token
   REFRESH_TOKEN_SECRET=your_refresh_token
   PORT_SERVER=your_port_server
   DATABASE_HOSTNAME=your_hostname
   DATABASE_PORT=your_port
   DATABASE_NAME=your_db
   DATABASE_USERNAME=your_username
   DATABASE_PASSWORD=your_password
   ```
2. Create a .env file in the frontend directory with the following contents:
   ```bash
   VITE_PRIVATE_API_URL=your_api_url
   ```
2. Set up your MySQL database and configure the details in the .env file.

## Running the Project

1. Start the backend server:
   ```bash
   cd backend
   ```
   ```bash
   nodemon index
   ```
2. Start the frontend server:
   ```bash
   cd frontend
   ```
   ```bash
   npm run dev
   ```

## Usage
- Register a new user.
- Log in with the registered user's credentials.
- Access protected routes with the JWT token.

### Penjelasan Singkat:

- **Features:** Daftar fitur yang ada dalam proyek.
- **Tech Stack:** Teknologi yang digunakan dalam proyek.
- **Installation:** Langkah-langkah untuk menginstal dependensi dan memulai proyek.
- **Running the Project:** Cara menjalankan server backend dan frontend.
- **Usage:** Langkah-langkah penggunaan aplikasi.