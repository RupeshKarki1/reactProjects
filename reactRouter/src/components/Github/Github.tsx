// import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";

function Github(){
    // interface emptyObj{
    //     [key: string]: any;
    // }

    // const [data, setData] = useState({})
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/RupeshKarki1`)
    //     .then(res => res.json())
    //     .then((res) => {
    //         setData(res)
    //         console.log(res)
    //     })
    // },[])

    const data = useLoaderData()
    return(
        <>
            <h1 className="text-center text-4xl my-10">Github followers: {data?.followers}</h1>
            <img src={data?.avatar_url} alt="Git pic" width={300} />
        </>
    )
}

export default Github

export const githubInfo = async () => {
    const response = await fetch('https://api.github.com/users/RupeshKarki1')
    console.log(response);
    return response.json()

}
