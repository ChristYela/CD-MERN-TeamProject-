import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory, Link } from "react-router-dom";


const SingleProduct = () => {
    const {id} = useParams ();
    const [product, setProduct] = useState({});
    
    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/"+id, { withCredentials: true })
        .then(res => {
            setProduct(res.data);
        })
        .catch(err => console.log(err));
    }, [id]);

    const deleteProduct = id => {
        if (window.confirm("Are You sure to delete this product?")){
        axios.delete("http://localhost:8000/api/product/"+id, { withCredentials: true })
            .then(res => 
                history.push("/")
            )
            .catch(err=>console.log(err))
        }
    }

    return(
        <div className="card">
            <h1 id="maintitle2" className="text-center">Product</h1>
            <div className="card-header"><h1>{product.name}</h1></div>
            <div className="card-body">
                <h2>${product.cost}</h2>
                <p>
                    Description: {product.description}
                </p>
                <p>
                    Quantity: {product.quantity}
                </p>
                <p>
                    Image:{product.image}
                </p>
                <Link to="/" className="btn btn-outline-danger" onClick={() => deleteProduct(id)}>Delete Product</Link>
                <Link to="/" className="btn btn-outline-primary">Cancel</Link>
            </div>
        </div>
    )

}

export default SingleProduct;
