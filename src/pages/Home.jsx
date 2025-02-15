import styles from "./home.module.css"; // Importing CSS module

const Home = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>🎍 User Product Management System</h1>

            <p className={styles.description}>
                A <strong>full-stack web application</strong> developed using <strong>ReactJS</strong> (frontend) and <strong>Spring Boot</strong> (backend) to manage users and products with full **CRUD functionality**.
            </p>

            <h2 className={styles.sectionTitle}>🚀 Features</h2>
            <ul className={styles.list}>
                <li>🤵 <strong>User Management:</strong> Create, update, delete, and view users.</li>
                <li>🛆 <strong>Product Management:</strong> Add, update, delete, and view products.</li>
                <li>🔐 <strong>Authentication:</strong> Secure login system with JWT.</li>
                <li>🔄 <strong>Role-based Access:</strong> Admin/User access control.</li>
                <li>✅ <strong>Validation:</strong> Ensure correct input for users and products.</li>
            </ul>

            <h2 className={styles.sectionTitle}>🧪 API Endpoints</h2>

            <h3 className={styles.subTitle}>📌 User APIs</h3>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>Endpoint</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>POST</td><td>/user/saveUser</td><td>Create a new user</td></tr>
                    <tr><td>POST</td><td>/user/saveMultipleUser</td><td>Create multiple users</td></tr>
                    <tr><td>GET</td><td>/user/allUser</td><td>Get all users</td></tr>
                    <tr><td>GET</td><td>/user/getUserById/{'{id}'}</td><td>Get user by ID</td></tr>
                    <tr><td>PUT</td><td>/user/updateUserById/{'{id}'}</td><td>Update user details</td></tr>
                    <tr><td>DELETE</td><td>/user/deleteUserById/{'{id}'}</td><td>Delete a user</td></tr>
                </tbody>
            </table>

            <h3 className={styles.subTitle}>📌 Product APIs</h3>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>Endpoint</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>POST</td><td>/product/saveProduct</td><td>Add a new product</td></tr>
                    <tr><td>POST</td><td>/product/saveMultipleProducts</td><td>Add multiple products</td></tr>
                    <tr><td>GET</td><td>/product/getAllProducts</td><td>List all products</td></tr>
                    <tr><td>GET</td><td>/product/getProductById/{'{id}'}</td><td>Get product by ID</td></tr>
                    <tr><td>PUT</td><td>/product/updateProductById/{'{id}'}</td><td>Update product details</td></tr>
                    <tr><td>DELETE</td><td>/product/deleteProductById/{'{id}'}</td><td>Remove a product</td></tr>
                </tbody>
            </table>

            <h2 className={styles.sectionTitle}>🫠 Tech Stack</h2>
            <ul className={styles.list}>
                <li><strong>Frontend:</strong> React, React Router, Context API, Axios</li>
                <li><strong>Backend:</strong> Spring Boot, Hibernate, JPA, MySQL</li>
                <li><strong>Security:</strong> JWT Authentication, Role-Based Access</li>
            </ul>

            <h2 className={styles.sectionTitle}>📂 Installation & Setup</h2>
            <p><strong>Backend:</strong> Run `mvn spring-boot:run` to start the backend.</p>
            <p><strong>Frontend:</strong> Run `npm start` inside the frontend directory.</p>

            <h2 className={styles.sectionTitle}>🎯 Future Improvements</h2>
            <ul className={styles.list}>
                <li>🔹 Implement product categories</li>
                <li>🔹 Add a cart and checkout system</li>
                <li>🔹 Improve UI with Material UI or TailwindCSS</li>
            </ul>

            <p className={styles.footer}>🚀 Developed with ❤️ by <strong>Mohsin Haider</strong></p>
        </div>
    );
};

export default Home;
