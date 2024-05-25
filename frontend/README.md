

# Todo Web Application

This is a simple todo web application built with ReactJS and NodeJS. It allows users to create, update, and delete todo items.



## Features
- **User Authentication**: Provides endpoints for user signup and login.
- **Todo Management**: Offers endpoints for creating, updating, and deleting todo items.
- **Secure Authentication**: Uses JWT (JSON Web Tokens) for secure user authentication.
- **Database Integration**: Integrates with MongoDB to store user and todo data.

## Technologies Used

- ReactJS
- NodeJS
- MongoDB (for database)
- ExpressJS

## How to Run the Project

1. **Clone the Repository**: 
   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd <project_directory>
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Start the Backend Server**:
   ```bash
   cd backend
   npm start
   ```

5. **Open Another Terminal Window/Tab and Navigate to the Project Directory**.

6. **Start the Frontend Development Server**:
   ```bash
   cd frontend
   npm start
   ```

7. **Open Your Web Browser and Visit** `http://localhost:3000` **to View the Running Web Application**.

## API Documentation

### Authentication Endpoints

- `POST /api/auth/signup`: Signup a new user.
- `POST /api/auth/login`: Login an existing user.

### Todo Management Endpoints

- `GET /api/todos`: Get all todo items.
- `POST /api/todos`: Create a new todo item.
- `PUT /api/todos/:id`: Update a todo item.
- `DELETE /api/todos/:id`: Delete a todo item.

## Screenshots
