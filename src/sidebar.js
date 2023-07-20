import React from "react";
const Sidebar = () => {
    return (
        <>
            <ul className="navbar-nav" style={{ "borderRight": "1px solid lightgray", "textAlign": "center" }}>
                <li className="nav-item active" style={{ "borderBottom": "1px solid lightgray", "padding": "5px", "margin": "5px" }}>
                    <a className="nav-link" href="#">
                        Dashborad <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item" style={{ "borderBottom": "1px solid lightgray", "padding": "5px", "margin": "5px" }}>
                    <a className="nav-link" href="#">
                        Products
                    </a>
                </li>
                <li className="nav-item" style={{ "padding": "5px", "margin": "5px" }}>
                    <a className="nav-link" href="#">
                        Profile
                    </a>
                </li>
            </ul>
        </>
    )
}

export {
    Sidebar
}