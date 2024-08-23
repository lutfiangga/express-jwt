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
   DATABASE_HOST=localhost
   DATABASE_PORT=your_port
   DATABASE_NAME=your_db
   DATABASE_USER=your_username
   DATABASE_PASSWORD=your_password
   JWT_SECRET=your_jwt_secret
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
- **Configuration:** Pengaturan file `.env` untuk koneksi database dan JWT.
- **Running the Project:** Cara menjalankan server backend dan frontend.
- **Usage:** Langkah-langkah penggunaan aplikasi.