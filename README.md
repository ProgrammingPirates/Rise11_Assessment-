

# Todo Web Application

This is a simple todo web application built with ReactJS and NodeJS. It allows users to create, update, and delete todo items.



## Features
- **User Authentication**: Provides endpoints for user signup and login.
![image](https://github.com/ProgrammingPirates/Rise11_Assessment-/assets/78801686/4ff97da5-91a2-4358-acbb-7d8a495434e9)

![image](https://github.com/ProgrammingPirates/Rise11_Assessment-/assets/78801686/ba6d292f-2871-4c73-b07a-196f4f307d56)
![image](https://github.com/ProgrammingPirates/Rise11_Assessment-/assets/78801686/bef3ee60-9c0f-4f64-9f2b-f2d2745b3f88)


- **Todo Management**: Offers endpoints for creating, updating, and deleting todo items.
- **Secure Authentication**: Uses JWT (JSON Web Tokens) for secure user authentication.

![image](https://github.com/ProgrammingPirates/Rise11_Assessment-/assets/78801686/d8d4974a-4679-45a7-8a31-216f1f6ddbe3)

- **Database Integration**: Integrates with MongoDB to store user and todo data.
![image](https://github.com/ProgrammingPirates/Rise11_Assessment-/assets/78801686/879ae2d2-7b3d-447b-85c7-c5570df7be2a)

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
