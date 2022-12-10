import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";


const NewProduct = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [cost, setCost] = useState("");
    const [quantity, setQuantity] = useState("");
    const [image, setImage] = useState("");
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const saveProduct = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product/", {
            name,
            description,
            cost,
            quantity,
            image
        }, { withCredentials: true })
            .then(res => history.push("/"))
            .catch(err => setErrors(err.response.data.errors))
    }

    return (
        <div>
            <h1 id="maintitle2" className="text-center">New Product</h1>
            <form onSubmit={saveProduct}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} className="form-control" />
                    {errors.name ? <span className="text-danger">{errors.name.message}</span> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" name="description" value={description} onChange={e => setDescription(e.target.value)} className="form-control" />
                    {errors.description ? <span className="text-danger">{errors.description.message}</span> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="cost">Cost:</label>
                    <input type="text" id="cost" name="cost" value={cost} onChange={e => setCost(e.target.value)} className="form-control" />
                    {errors.cost ? <span className="text-danger">{errors.cost.message}</span> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="text" id="quantity" name="quantity" value={quantity} onChange={e => setQuantity(e.target.value)} className="form-control" />
                    {errors.quantity ? <span className="text-danger">{errors.quantity.message}</span> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input type="text" id="image" name="image" value={image} onChange={e => setImage(e.target.value)} className="form-control" />
                    {errors.image ? <span className="text-danger">{errors.image.message}</span> : null}
                </div>
                <input type="submit" className="btn btn-outline-success" value="Save Post" id="btn7" />
                <Link id="btn8" className="btn btn-outline-primary" to="/"> Cancel </Link>
            </form>
        </div>
    )

}

export default NewProduct;
