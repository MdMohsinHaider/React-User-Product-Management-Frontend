# 🛍️ User Product Management System

A **full-stack web application** developed using **ReactJS (frontend) and Spring Boot (backend)** to manage users and products with full **CRUD functionality**.

---

## 🚀 Features

### 🧑‍💼 User Management
✔️ Create, update, delete, and view users  
✔️ Assign roles (Admin/User)  
✔️ Secure authentication with JWT  

### 📦 Product Management
✔️ Add, update, delete, and view products  
✔️ Assign products to users  
✔️ Manage categories and stock  

### 🔐 Security & Authorization
✔️ JWT authentication for secured endpoints  
✔️ Role-based access control (Admin/User)  

### 📊 Dashboard & Analytics (Optional)
✔️ Admin panel for monitoring user activity  
✔️ Dashboard with key statistics  

---

## 🛠️ Tech Stack

### 🌐 Frontend (ReactJS)
- React with Functional Components & Hooks  
- React Router for navigation  
- Context API / Redux for state management  
- CSS Modules for styling (`home.module.css`)  
- Axios for API communication  

### ⚙️ Backend (Spring Boot)
- Spring Boot (REST API)  
- Spring Security (JWT Authentication)  
- Hibernate with JPA (ORM)  
- MySQL/PostgreSQL (Database)  
- Lombok (Simplified Java Code)  

---

## 📡 API Endpoints

| HTTP Method | Endpoint           | Description          |
|------------|-------------------|----------------------|
| **POST**   | `/api/users`       | Create a new user    |
| **GET**    | `/api/users`       | Get all users       |
| **PUT**    | `/api/users/{id}`  | Update user details |
| **DELETE** | `/api/users/{id}`  | Delete a user       |
| **POST**   | `/api/products`    | Add a new product   |
| **GET**    | `/api/products`    | List all products   |
| **PUT**    | `/api/products/{id}` | Update product details |
| **DELETE** | `/api/products/{id}` | Remove a product |

---

## 📂 Project Structure

