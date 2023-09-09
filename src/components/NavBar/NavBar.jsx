import React, { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"

import "./NavBar.css"

const NavBar = () => {
    const myNav = useRef()
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 20) {
                setScroll(true)
            }
            else {
                setScroll(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    return (
        <nav ref={myNav}
            className={scroll ? "navbar sticky-top navbar-expand-lg scroll-class" :
                "navbar sticky-top navbar-expand-lg"}>
            <div className="container">
                <div className={scroll ? "navbar-brand scroll-brand" :
                    "navbar-brand"}>SHOPPIES</div>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <NavLink to="/"
                            className={scroll ? "nav-link scroll-link" : "nav-link"}>STORE
                        </NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/"
                            className={scroll ? "nav-link scroll-link" : "nav-link"}>Shoppies
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login"
                            className={scroll ? "nav-link scroll-link" : "nav-link"}>Account
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar