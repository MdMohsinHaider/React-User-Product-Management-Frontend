# 🎍 User Product Management System

A **full-stack web application** developed using **ReactJS (frontend) and Spring Boot (backend)** to manage users and products with full **CRUD functionality**.

---

## 🚀 Features

### 🤵️ User Management
✔️ Create, update, delete, and view users  
✔️ Assign roles (Admin/User)  
✔️ Secure authentication with JWT  
✔️ Validate user details (name, email, password, phone, DOB)  
✔️ View all users in a structured list  

### 🛆 Product Management
✔️ Add, update, delete, and view products  
✔️ Assign products to users  
✔️ Manage categories and stock  
✔️ Validate product details (name, price, quantity, description)  

### 🔐 Security & Authorization
✔️ JWT authentication for secured endpoints  
✔️ Role-based access control (Admin/User)  
✔️ Input validation to prevent incorrect data submission  

---

## 🧪 API Endpoints

### **User APIs**
| HTTP Method | Endpoint | Description |
|------------|---------------------------|----------------------|
| **POST**   | `/user/saveUser` | Create a new user |
| **POST**   | `/user/saveMultipleUser` | Create multiple users |
| **GET**    | `/user/allUser` | Get all users |
| **GET**    | `/user/getUserById/{id}` | Get user by ID |
| **PUT**    | `/user/updateUserById/{id}` | Update user details |
| **DELETE** | `/user/deleteUserById/{id}` | Delete a user |

#### **User JSON Examples:**
**Create a Single User**
```json
{
    "username": "devil",
    "email": "devil@mohsin.com",
    "phone": "1123344",
    "dob": "2002-10-10",
    "password": "123"
}
```

**Create Multiple Users**
```json
[
  {
    "username": "jane_smith",
    "email": "jane.smith002@example.com",
    "phone": "9876543221",
    "dob": "1997-03-22",
    "password": "Jane@456"
  }
]
```

**Update User by ID**
```json
{
    "id": 2,
    "username": "Mohsin Haider",
    "email": "Devil@mohsin.com",
    "phone": "10192928",
    "dob": "2024-10-10",
    "password": "123mohsin"
}
```

---

### **Product APIs**
| HTTP Method | Endpoint | Description |
|------------|------------------------------|----------------------|
| **POST**   | `/product/saveProduct` | Add a new product |
| **POST**   | `/product/saveMultipleProducts` | Add multiple products |
| **GET**    | `/product/getAllProducts` | List all products |
| **GET**    | `/product/getProductById/{id}` | Get product by ID |
| **PUT**    | `/product/updateProductById/{id}` | Update product details |
| **DELETE** | `/product/deleteProductById/{id}` | Remove a product |

#### **Product JSON Examples:**
**Create a Single Product**
```json
{
  "name": "Sample 2 Product",
  "price": 98.99,
  "description": "This is a sample product description.",
  "quantity": "10"
}
```

**Create Multiple Products**
```json
[
  {
    "name": "Laptop",
    "price": 749.99,
    "description": "High-performance laptop with 16GB RAM and 512GB SSD.",
    "quantity": "5"
  }
]
```

**Update Product by ID**
```json
{
    "id": 2,
    "name": "Sample 10 Products",
    "price": 98.99,
    "description": "This is a sample product description.",
    "quantity": "18"
}
```

---

## 🫠 Tech Stack

### 🌐 Frontend (ReactJS)
- React with Functional Components & Hooks  
- React Router for navigation  
- Context API / Redux for state management  
- CSS Modules for styling (e.g., `createUser.module.css`, `editProduct.module.css`)  
- Axios for API communication  
- Toast notifications (`react-hot-toast`) for better UI feedback  

### ⚙️ Backend (Spring Boot)
- Spring Boot (REST API)  
- Spring Security (JWT Authentication)  
- Hibernate with JPA (ORM)  
- MySQL/PostgreSQL (Database)  
- Lombok (Simplified Java Code)  
- Input validation via `UserValidator` & `ProductValidator`

---

## 🛀 Installation & Setup

### **Backend Setup (Spring Boot)**
1. Clone the repository:  
   ```sh
   git clone https://github.com/your-repo.git
   cd user_product_management_backend
   ```
2. Configure database in `application.properties`
3. Run the Spring Boot application:
   ```sh
   mvn spring-boot:run
   ```

### **Frontend Setup (ReactJS)**
1. Navigate to the frontend directory:
   ```sh
   cd user_product_management_frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```

---

## 🎯 Future Improvements
- 🔹 Implement product categories  
- 🔹 Add a cart and checkout system  
- 🔹 Improve UI with Material UI or TailwindCSS  
- 🔹 Enhance admin panel with more analytics  

---

## 🤝 Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository  
2. Create a new feature branch (`git checkout -b feature-name`)  
3. Commit your changes (`git commit -m "Added feature XYZ"`)  
4. Push to the branch (`git push origin feature-name`)  
5. Open a pull request  

---

## 🐝 License
This project is open-source under the **MIT License**.

---
🚀 **Developed with ❤️ by Mohsin Haider**

