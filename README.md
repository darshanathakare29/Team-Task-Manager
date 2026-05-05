# Team Task Manager

A full-stack web application that allows users to manage projects, create and assign tasks, and track their progress using a dashboard.

---

## Features

*  User Authentication (Signup & Login using JWT)
*  Project Management (Create & view projects)
*  Task Management (Create, assign, update tasks)
*  Task Status Tracking (TODO, IN_PROGRESS, DONE)
*  Overdue Task Detection
*  Dashboard for managing tasks and projects

---

## Tech Stack

### Backend

* Java
* Spring Boot
* Spring Security (JWT Authentication)
* Spring Data JPA
* PostgreSQL

### Frontend

* React.js
* JavaScript
* HTML/CSS

---

## Project Structure

### Backend

* Controller → Handles API requests
* Service → Business logic
* Repository → Database interaction
* DTO → Data transfer objects
* Security → JWT authentication

### Frontend

* Components → Login, Signup, Dashboard
* API Layer → Handles backend communication

---

## Authentication Flow

1. User logs in
2. JWT token is generated
3. Token is stored in frontend
4. Token is sent in headers for secured API access

---

## API Endpoints (Sample)

| Method | Endpoint                        | Description        |
| ------ | ------------------------------- | ------------------ |
| POST   | /api/auth/signup                | Register user      |
| POST   | /api/auth/login                 | Login              |
| GET    | /api/projects                   | Get all projects   |
| POST   | /api/projects                   | Create project     |
| POST   | /api/tasks/{projectId}/{userId} | Create task        |
| GET    | /api/tasks/project/{projectId}  | Get tasks          |
| PUT    | /api/tasks/{taskId}             | Update task status |
| GET    | /api/tasks/overdue              | Get overdue tasks  |

---

## Setup Instructions

### Backend

1. Navigate to backend folder
2. Configure database in `application.properties`
3. Run the application

```bash
mvn spring-boot:run
```

---

### Frontend

1. Navigate to frontend folder

```bash
npm install
npm start
```

---

## Deployment

Deployment is in progress.
The application is fully functional in local environment.

* Frontend: http://localhost:3000
* Backend: http://localhost:8081

---

## Future Improvements

* Full team management (add/remove members)
* Role-based access control (Admin/User)
* Notifications
* Better UI enhancements


## Acknowledgements

This project was developed as part of a full-stack learning and implementation exercise.

