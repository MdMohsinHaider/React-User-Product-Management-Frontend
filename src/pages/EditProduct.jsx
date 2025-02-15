import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import style from "./editProduct.module.css";

function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: "",
        quantity: "",
    });

    useEffect(() => {
        async function getProductById() {
            try {
                const { data } = await axios.get(`http://localhost:8090/product/getProductById/${id}`);
                setProduct(data);
            } catch (err) {
                console.error("Error fetching product data:", err);
                toast.error("Failed to load product data");
            }
        }
        getProductById();
    }, [id]);

    const handleFormData = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8090/product/updateProductById/${id}`, product);
            toast.success("Product updated successfully");
            navigate("/allproduct");
        } catch (err) {
            console.error("Error updating product:", err);
            toast.error("Something went wrong");
        }
    };

    return (
        <div className={style.container}>
            <h1>Edit Product</h1>
            <form onSubmit={submitForm} className={style.form}>
                <label>Product Name:</label>
                <input 
                    type="text" 
                    name="name"
                    value={product.name} 
                    onChange={handleFormData}
                    placeholder="Product name is required"
                    className={style.input}
                    required
                />

                <label>Price:</label>
                <input 
                    type="number" 
                    name="price"
                    value={product.price} 
                    onChange={handleFormData}
                    placeholder="Price must be greater than 0"
                    className={style.input}
                    required
                />

                <label>Description:</label>
                <textarea 
                    name="description"
                    value={product.description} 
                    onChange={handleFormData}
                    placeholder="Description is required"
                    className={style.textarea}
                    required
                />

                <label>Quantity:</label>
                <input 
                    type="number" 
                    name="quantity"
                    value={product.quantity} 
                    onChange={handleFormData}
                    placeholder="Quantity is required"
                    className={style.input}
                    required
                />

                <button type="submit" className={style.button}>Update</button>
            </form>
        </div>
    );
}

export default EditProduct;
