import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import style from "./edit.module.css";

function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [userFormData, setUserFormData] = useState({
        username: "",
        email: "",
        phone: "",
        dob: "",
        password: "",
    });

    useEffect(() => {
        async function getUserById() {
            try {
                const { data } = await axios.get(`http://localhost:8090/user/getUserById/${id}`);
                setUserFormData(data);
            } catch (err) {
                console.error("Error fetching user data:", err);
                toast.error("Failed to load user data");
            }
        }
        getUserById();
    }, [id]);
    
    const handleFormData = (e) => {
        const { name, value } = e.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8090/user/updateUserById/${id}`, userFormData);
            toast.success("User updated successfully");
            navigate("/alluser");
        } catch (err) {
            console.error("Error updating user:", err);
            toast.error("Something went wrong");
        }
    };

    return (
        <div className={style.container}>
            <h1>Edit User</h1>
            <form onSubmit={submitForm} className={style.form}>
                <label>Username:</label>
                <input 
                    type="text" 
                    name="username"
                    value={userFormData.username} 
                    onChange={handleFormData}
                    placeholder="Username is required"
                    className={style.input}
                    required
                /> 

                <label>Email:</label>
                <input 
                    type="email" 
                    name="email"
                    value={userFormData.email} 
                    onChange={handleFormData}
                    placeholder="Enter a valid email (e.g., user@example.com)"
                    className={style.input}
                    required
                /> 

                <label>Phone:</label>
                <input 
                    type="tel" 
                    name="phone"
                    value={userFormData.phone} 
                    onChange={handleFormData}
                    placeholder="Phone number must be 10 digits"
                    className={style.input}
                    required
                /> 

                <label>Date of Birth:</label>
                <input 
                    type="date" 
                    name="dob"
                    value={userFormData.dob} 
                    onChange={handleFormData}
                    className={style.input}
                    required
                /> 

                <label>Password:</label>
                <input 
                    type="password" 
                    name="password"
                    value={userFormData.password} 
                    onChange={handleFormData}
                    placeholder="Password must be at least 6 characters"
                    className={style.input}
                    required
                /> 

                <button type="submit" className={style.button}>Update</button>
            </form>
        </div>
    );
}

export default Edit;
