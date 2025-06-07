import React, { useContext } from "react";
import userContext from "../context/userContext";

function Profile(){
    const {user} = useContext(userContext)
    if(!user) return <div> Please login to access profile</div>

    return(
        <>
            <div>
                Welcome {user.username}
            </div>
        </>
    )
}

export default Profile