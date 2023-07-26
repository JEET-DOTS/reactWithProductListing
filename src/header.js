import React from "react";
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="javascript:void(0)">
                                Home <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)">
                                Game
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)">
                                Pricing
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export {
    Header
}