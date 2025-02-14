import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import style from "./alluser.module.css";


function Product() {
    let [userData, setUserData] = useState([]);
    let [toggle, setToggle] = useState(false);

    useEffect(() => {
        async function getAllUser() {
            let { data } = await axios.get("http://localhost:8090/user/allUser");
            setUserData(data);
        }
        getAllUser();
    }, [toggle]);

    async function deleteUser(id) {
        try {
            await axios.delete(`http://localhost:8090/user/deleteUserById/${id}`);
            setToggle(!toggle);
            toast.success("Delete Successful");
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }

    return (
        <div className={style.container}>
            <h1>All Product</h1>
            <div className={style.cardContainer}>
                {userData.map((user) => (
                    <div key={user.id} className={style.card}>
                        <h2>{user.username}</h2>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>DOB:</strong> {user.dob}</p>
                        <div className={style.buttons}>
                            <button className={style.delete} onClick={() => deleteUser(user.id)}>Delete</button>
                            <Link to={`/edit/${user.id}`} className={style.edit}>Edit</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product