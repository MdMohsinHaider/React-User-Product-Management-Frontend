import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import style from "./createUser.module.css";
import { useNavigate } from "react-router-dom";

function CreateUser() {
    let [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        dob: "",
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
                setUser(
                    { 
                        username: "", 
                        email: "", 
                        password: "", 
                        dob: "" 
                    }
                );
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
                <label>UserName:</label>
                <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleFormData}
                    className={style.input}
                />
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleFormData}
                    className={style.input}
                />
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleFormData}
                    className={style.input}
                />
                <label>Date of Birth:</label>
                <input
                    type="date"
                    name="dob"
                    value={user.dob}
                    onChange={handleFormData}
                    className={style.input}
                />
                <button type="submit" className={style.button}>Create</button>
            </form>
        </div>
    );
}

export default CreateUser;
