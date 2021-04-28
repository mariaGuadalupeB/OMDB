import * as React from "react"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setInputUser } from "../../state/inputNewUser"
import { useHistory } from "react-router-dom";


const UserLogin = () => {
    
    const dispatch = useDispatch();
    const inputUser = useSelector(state => state.inputUser)
    const input = React.createRef();

    const history = useHistory();

    const loginHandler = (e) => {
        e.preventDefault();
        const {email, password} = inputUser
        axios.post("http://localhost:8080/api/login", {email, password})
        .then(res => res.data)
        .then(data => {
            localStorage.setItem("token", JSON.stringify(data));
            history.push("/user");
        }) 
        .catch(err => {
            history.push("/error")
        })
            
    }

    const inputHandler = (e) => {
        const key = e.target.name
        const value = e.target.value
        dispatch(setInputUser({...inputUser, [key]: value}))
    }

return (
        <>
            <form className="box class my-6 mx-6" onSubmit={loginHandler}>
            <h1 className="subtitle is-2">Sign in</h1>
                <div className="field">
                    <label className="label">Email</label>
                        <div className="control">
                    <input 
                        name="email" 
                        className="input" 
                        ref={input}
                        type="email" 
                        placeholder="e.g. myMail@fromSomeWeb.com" 
                        onChange={inputHandler}

                    />
                    </div>
                </div>
                
                <div className="field">
                    <label className="label">Password</label>
                        <div className="control">
                    <input 
                        name="password" 
                        ref={input}
                        className="input" 
                        type="password" 
                        placeholder="TOP SECRET" 
                        onChange={inputHandler}

                    />
                    </div>
                </div>

                <button className="button is-primary" type="submit">Send data!</button>
                <h6 className="subtitle is-6 mt-2">
                    Didn't have an account? Dont worry, join NOW for Free!
                    <Link to={"/register"}> <strong className="has-text-link">Register</strong> </Link>
                </h6>

            </form>
        </>
    )
}

export default UserLogin;