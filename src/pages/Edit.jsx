import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import style from "./edit.module.css";

function Edit() {
    const { id } = useParams();
    let navigate = useNavigate();
    
    let [userFormData, setUserFormData] = useState({});

    useEffect(() => {
        async function getUserById() {
            let { data } = await axios.get(`http://localhost:8090/user/getUserById/${id}`);
            setUserFormData(data);
        }
        getUserById();
    }, [id]);
    
    let handleFormData = (e) => {
        let { name, value } = e.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    let submitForm = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8090/user/updateUserById/${id}`, userFormData)
            .then(() => {
                toast.success("Success Update User");
                navigate("/alluser");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Something went wrong");            
            });
    };

    return (
        <div className={style.container}>
            <h1>Edit User</h1>
            <form onSubmit={submitForm} className={style.form}>
                <label>Name: </label>
                <input 
                    type="text" 
                    name="username"
                    value={userFormData.username || ""} 
                    onChange={handleFormData}
                    className={style.input}
                /> <br /><br />
                <label>Email: </label>
                <input 
                    type="email" 
                    name="email"
                    value={userFormData.email || ""} 
                    onChange={handleFormData}
                    className={style.input}
                /> <br /><br />
                <label>Date of Birth: </label>
                <input 
                    type="date" 
                    name="dob"
                    value={userFormData.dob || ""} 
                    onChange={handleFormData}
                    className={style.input}
                /> <br /><br />
                <button type="submit" className={style.button}>Update</button>
            </form>
        </div>
    );
}

export default Edit;
