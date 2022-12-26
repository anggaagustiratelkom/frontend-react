import React from "react"
import { Link } from "react-router-dom";

const NavigationBar = ()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-dark shadow">
                <div className="container">
                    <ul className="nav">
                        <li>
                            <Link to="/books" className="nav-link">Books</Link>
                        </li>
                        <li>
                            <Link to="/employees" className="nav-link">Employees</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        
    )
}
export default NavigationBar