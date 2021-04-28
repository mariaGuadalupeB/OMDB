import * as React from "react";
import { Link } from "react-router-dom";


const Error = () => {
    
    return (
        <>
            <article className="message is-danger">
                <div className="message-body">
                    You get here and don't know why ... neither we... 
                     <strong> But </strong> you can always start again!
                        <Link to="/"> Let's start over again! </Link>
                </div>
            </article>
            
            
        </>
    )

}

export default Error;
