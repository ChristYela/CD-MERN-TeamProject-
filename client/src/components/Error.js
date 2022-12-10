import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="container w-75 mx-auto ">
            <h1 className="text-danger text-center" id="titlerr">ERROR!</h1>
            <h2 className="text-danger text-center" id="subtitlerr"> We haven't found the product you've been looking for </h2>
            <Link className="btn btn-outline-danger" id="btnerr" to="/"> Go Back to Home </Link>
        </div>
    )
}

export default Error;
