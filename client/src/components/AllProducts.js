import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const history = useHistory()
    useEffect(() => {
        axios.get("http://localhost:8000/api/product", { withCredentials: true })
            .then(res => setProducts(res.data))
            .catch(err => {
                if (err.response.status === 401) {
                    history.push('/login');
                }
            });
    }, [history])

    const deleteProduct = id => {
        if (window.confirm("Are You sure to delete this product?")) {
            axios.delete("http://localhost:8000/api/product/" + id, { withCredentials: true })
                .then(res => {
                    let newList = products.filter(product => product._id !== id);
                    setProducts(newList);
                })
                .catch(err => console.log(err.response))
        }
    }

    const closeSession = () => {
        axios.get('http://localhost:8000/api/logout', { withCredentials: true })
            .then(res => history.push('/login'))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1 id="maintitle1" className="text-center">Welcome to the group project!</h1>
            <Link to="/product/new" className="btn btn-outline-success" id="btn3">New Product</Link>
            <button className="btn btn-outline-danger float-right" id="btn4" onClick={closeSession}>Log Out</button>
            <table className="table table-hover">
                <thead id="subtitles">
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Cost</th>
                        <th>Quantity</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.cost}</td>
                                <td>{product.quantity}</td>
                                <td>{product.image}</td>
                                <td>
                                    <Link id="btn6" to={`/product/show/${product._id}`} className="btn btn-outline-primary">Details</Link>
                                    <Link id="btn5" className="btn btn-outline-warning" to={`/product/edit/${product._id}`}>Edit Product</Link>
                                    <button id="btn6" className="btn btn-outline-danger" onClick={() => deleteProduct(product._id)} >Delete Product</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}

export default AllProducts;