import { NavLink } from "react-router-dom";
import Cookies from 'js-cookie'
import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";



const NavBar = () => {
    const navigate = useNavigate();


    const [showBag, setShowBag] = useState(false)
    const [name, setName] = useState(false)
    const [token, setToken] = useState(null)


    useEffect(() => {
        const token = Cookies.get('token');

        if (token !== undefined) {
            const decodedToken = jwt_decode(token);
            setToken(decodedToken)

            // Access the payload data from the decoded token
            const { user } = decodedToken;

            setName(user.name)

            setShowBag(true);
        }
    }, []);

    // logout function
    const logout = () => {
        Cookies.remove('token');
        navigate('/')
    }

    return (
        <header className="header_section">
            <div className="container">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <a className="navbar-brand" href="/">
                        <span>
                            cleanX
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ">
                            <li className="nav-item active">
                                <NavLink to="/" className="nav-link">Home<span className="sr-only">(current)</span></NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink to="/about" className="nav-link">About Us</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink to="/service" className="nav-link">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                            </li>
                            {
                                showBag ?
                                    <li className="nav-item">
                                        <NavLink to="/cart-and-shipment" className="nav-link">Bag</NavLink>
                                    </li>
                                    : ""
                            }

                            <li className="nav-item">
                                <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
                            </li>

                            {
                                name ?
                                    <div class="dropdown" id="profile">
                                        <button class=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {name}
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">My Profile</a>
                                            <a class="dropdown-item" href="" onClick={logout}>Sign Out</a>
                                        </div>
                                    </div> :
                                    <li className="nav-item">
                                        <NavLink to="/login" className="nav-link">Login</NavLink>
                                    </li>
                            }

                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default NavBar
