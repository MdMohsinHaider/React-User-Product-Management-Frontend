import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import style from "./alluser.module.css";


function Product() {
    let [productData, setProductData] = useState([]);
    let [toggle, setToggle] = useState(false);

    useEffect(() => {
        async function getAllUser() {
            let { data } = await axios.get("http://localhost:8090/product/getAllProducts");
            setProductData(data);
        }
        getAllUser();
    }, [toggle]);

    async function deleteUser(id) {
        try {
            await axios.delete(`http://localhost:8090/product/deleteProductById/${id}`);
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
                {productData.map((product) => (
                    <div key={product.id} className={style.card}>
                        <h2>{product.name}</h2>
                        <p><strong>Price:</strong> {product.price}</p>
                        <p><strong>Description:</strong> {product.description}</p>
                        <p><strong>Quantity:</strong> {product.quantity}</p>
                        <div className={style.buttons}>
                            <button className={style.delete} onClick={() => deleteUser(product.id)}>Delete</button>
                            <Link to={`/editProduct/${product.id}`} className={style.edit}>Edit</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product