import React, { useContext, useState } from "react";
import userContext from "../context/userContext";

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const {setUser} = useContext(userContext)
    function handleSubmit (e){
        e.preventDefault()
        setUser({username, password})
    }
    return(
        <>
           <div>
                <h2>Login</h2>
                
                <input type="text" placeholder="username" value={username}
                onChange={(e) => setUsername(e.target.value)}
                />

                <input type="text" placeholder="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div> 
        </>
    )
}


export default Login