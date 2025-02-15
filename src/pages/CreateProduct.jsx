import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import style from "./createProduct.module.css";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: "",
        quantity: "",
    });

    const navigate = useNavigate();

    const handleFormData = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8090/product/saveProduct", product);
            toast.success("Product added successfully");
            setProduct({ name: "", price: "", description: "", quantity: "" });
            navigate("/allproduct");
        } catch (err) {
            console.error("Error saving product:", err);
            toast.error("Something went wrong");
        }
    };

    return (
        <div className={style.container}>
            <h1>Create Product</h1>
            <form onSubmit={submitForm} className={style.form}>
                <label>Product Name:</label>
                <input 
                    type="text" 
                    name="name"
                    value={product.name} 
                    onChange={handleFormData}
                    placeholder="Enter product name"
                    className={style.input}
                    required
                />

                <label>Price:</label>
                <input 
                    type="number" 
                    name="price"
                    value={product.price} 
                    onChange={handleFormData}
                    placeholder="Enter product price"
                    className={style.input}
                    required
                />

                <label>Description:</label>
                <textarea 
                    name="description"
                    value={product.description} 
                    onChange={handleFormData}
                    placeholder="Enter product description"
                    className={style.textarea}
                    required
                />

                <label>Quantity:</label>
                <input 
                    type="number" 
                    name="quantity"
                    value={product.quantity} 
                    onChange={handleFormData}
                    placeholder="Enter quantity"
                    className={style.input}
                    required
                />

                <button type="submit" className={style.button}>Create</button>
            </form>
        </div>
    );
}

export default CreateProduct;
