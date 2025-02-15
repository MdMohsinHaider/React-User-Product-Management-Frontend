import { useNavigate } from "react-router-dom"
import style from "./navbar.module.css"

function Navbar() {
    let navitage = useNavigate()
    return (
        <div className={style.container}>
            <h1>Spring Boot User Product and Management</h1>
            <button onClick={()=>navitage("/")} >🏠</button>
            <button onClick={()=>navitage("/create")} >CreateUser</button>
            <button onClick={()=>navitage("/alluser")} >Users</button>
            <button onClick={()=>navitage("/createproduct")} >CreateProduct</button>
            <button onClick={()=>navitage("/allproduct")} >Products</button>
        </div>
    )
}

export default Navbar