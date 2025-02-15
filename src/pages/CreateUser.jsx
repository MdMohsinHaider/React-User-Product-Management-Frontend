import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import style from "./createUser.module.css";
import { useNavigate } from "react-router-dom";

function CreateUser() {
    let [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        dob: "",
        password: "",
    });

    let navigate = useNavigate();

    let handleFormData = (e) => {
        let { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    let submitForm = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8090/user/saveUser", user)
            .then(() => {
                toast.success("Successfully saved user");
                setUser({ username: "", email: "", phone: "", dob: "", password: "" });
                navigate("/alluser");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Something went wrong");
            });
    };

    return (
        <div className={style.container}>
            <h1>Create User</h1>
            <form onSubmit={submitForm} className={style.form}>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleFormData}
                    placeholder="Username is required"
                    className={style.input}
                    required
                />

                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleFormData}
                    placeholder="Enter a valid email (e.g., user@example.com)"
                    className={style.input}
                    required
                />

                <label>Phone:</label>
                <input
                    type="tel"
                    name="phone"
                    value={user.phone}
                    onChange={handleFormData}
                    placeholder="Phone number must be 10 digits"
                    className={style.input}
                    required
                />

                <label>Date of Birth:</label>
                <input
                    type="date"
                    name="dob"
                    value={user.dob}
                    onChange={handleFormData}
                    className={style.input}
                    required
                />

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleFormData}
                    placeholder="Password must be at least 6 characters"
                    className={style.input}
                    required
                />

                <button type="submit" className={style.button}>Create</button>
            </form>
        </div>
    );
}

export default CreateUser;
