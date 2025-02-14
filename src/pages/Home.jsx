import styles from "./home.module.css"; // Importing CSS module

const Home = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>User Product Management System</h1>

            <p className={styles.description}>
                A full-stack web application developed using <strong>ReactJS</strong> (frontend) and <strong>Spring Boot</strong> (backend) to manage users and products with full CRUD functionality.
            </p>

            <h2 className={styles.sectionTitle}>🔹 Features</h2>
            <ul className={styles.list}>
                <li><strong>User Management:</strong> Create, update, delete, and manage users.</li>
                <li><strong>Product Management:</strong> Add, update, delete, and view products.</li>
                <li><strong>Authentication:</strong> Secure login system with JWT.</li>
                <li><strong>Role-based Access:</strong> Admin/User access control.</li>
            </ul>

            <h2 className={styles.sectionTitle}>🔹 Tech Stack</h2>
            <ul className={styles.list}>
                <li><strong>Frontend:</strong> React, React Router, Context API, Axios</li>
                <li><strong>Backend:</strong> Spring Boot, Hibernate, JPA, MySQL</li>
            </ul>

            <h2 className={styles.sectionTitle}>🔹 API Endpoints</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>Endpoint</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>POST</td><td>/api/users</td><td>Create a new user</td></tr>
                    <tr><td>GET</td><td>/api/users</td><td>Get all users</td></tr>
                    <tr><td>PUT</td><td>/api/users/{'{id}'}</td><td>Update user</td></tr>
                    <tr><td>DELETE</td><td>/api/users/{'{id}'}</td><td>Delete user</td></tr>
                </tbody>
            </table>

        </div>
    );
};

export default Home;
