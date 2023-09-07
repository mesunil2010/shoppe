import React from "react"
import FetchData from "../utilities/FetchData"
import homePageImg from "../img/homepage.jpg"


const HomePage = () => {

    return <>
            <div className="bg-img" alt="background" style={{
                backgroundImage: `url(${homePageImg}`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "90vh"
            }} />
        <FetchData />
    </>

}
export default HomePage