import * as React from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setInputUser } from "../../state/inputNewUser"


const NewUser = () => {
    const dispatch = useDispatch();

    const input = React.createRef();
    const history = useHistory();

    const inputUser = useSelector(state => state.inputUser)
    
    const registerHandler = (e) => {
        e.preventDefault();
        const {name, email, password} = inputUser
        axios.post("http://localhost:8080/api/register", {name, email, password})
        .then(res => res.data)
        .then(data => {
            localStorage.setItem("token", JSON.stringify(data));
            history.push("/user");
        }) 
        .catch(err => {
            history.push("/error")
        })
    }

    const inputUserHandler = (e) => {
        const key = e.target.name
        const value = e.target.value
        dispatch(setInputUser({...inputUser, [key]: value}))
    }
    

return (
        <>
            <form className="box class my-6 mx-6" onSubmit={registerHandler}>
            <h1 className="subtitle is-2">Create account</h1>
                <div className="field">
                    <label className="label">Name</label>
                        <div className="control">
                    <input 
                        name="name" 
                        ref={input}
                        className="input" 
                        type="text" 
                        placeholder="Your Name!" 
                        onChange={inputUserHandler}
                    />
                    </div>
                </div>
                
                <div className="field">
                    <label className="label">Email</label>
                        <div className="control">
                    <input 
                        name="email" 
                        ref={input}
                        className="input" 
                        type="email" 
                        placeholder="Where we can reach you..." 
                        onChange={inputUserHandler}
                    />
                    </div>
                </div>

                <div className="field mb-6">
                    <label className="label">Password</label>
                    <div className="control">
                    <input 
                        name="password" 
                        ref={input}
                        className="input" 
                        type="password" 
                        placeholder="Shh! We won't tell" 
                        onChange={inputUserHandler} 
                    />
                    <h6 className="subtitle is-6 mt-1">Passwords must be at least 8 characters.</h6>
                    </div>
                </div>

                <button className="button is-primary" type="submit">Yes! I'm in!</button>
                <h6 className="subtitle is-6 mt-2">
                    Already have an account?
                    <Link to={"/login"}> <strong className="has-text-link">Sign In</strong> </Link>
                </h6>

            </form>
        </>
    )
}

export default NewUser;