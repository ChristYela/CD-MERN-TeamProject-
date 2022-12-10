import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";


const Register = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorRegister, setErrorsRegister] = useState({});
    const history = useHistory();

    const register = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/register', {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        }, { withCredentials: true })
            .then(res => history.push('/'))
            .catch(err => setErrorsRegister(err.response.data.errors));
    }

    return (
        <div className="row">
            <h1 id="maintitle" className="text-center">Welcome to Group Project!</h1>
            <div id="form1" className="col-12 text-center ">
                <h2 id="title1">New User ? Just Sign Up.</h2>
                <form onSubmit={register}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text"
                            name="firstName"
                            id="firstName"
                            className="form-control"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)} />
                        {errorRegister.firstName ? <span className="text-danger">{errorRegister.firstName.message}</span> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" className="form-control" value={lastName} onChange={e => setLastName(e.target.value)} />
                        {errorRegister.lastName ? <span className="text-danger">{errorRegister.lastName.message}</span> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                        {errorRegister.email ? <span className="text-danger">{errorRegister.email.message}</span> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                        {errorRegister.password ? <span className="text-danger">{errorRegister.password.message}</span> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" className="form-control" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                        {errorRegister.confirmPassword ? <span className="text-danger">{errorRegister.confirmPassword.message}</span> : null}
                    </div>
                    <input type="submit" value="Sign Up" className="btn btn-outline-success" id="btn1" />
                </form>
                <h6 id="title1">Registered User ? Just Login.</h6>
                <Link id="btn8" className="btn btn-outline-primary" to="/login"> Login </Link>
            </div>
        </div>
    )

}

export default Register;