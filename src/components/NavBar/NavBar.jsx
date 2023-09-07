import React, {useEffect, useRef} from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    const myNav = useRef()
    useEffect(() => {
        if(myNav.current) {
        myNav.current.style.backgroundColor = "transparent";
        }
    },[])
    
    return (
        <nav ref={myNav} className="navbar navbar-fixed-bottom navbar-expand-lg">
            <div className="container">
                <div className="navbar-brand">SHOPPIES</div>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">shoppie</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav">
                <li className="nav-item">
                        <NavLink to="/" className="nav-link">Shoppies</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login" className="nav-link">Account</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar