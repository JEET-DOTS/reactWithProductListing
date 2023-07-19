import React from "react";
const Footer = () => {
    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{"bottom":"10px","position":"fixed","width": "100%"}}>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contcat Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Map
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export {
    Footer
}