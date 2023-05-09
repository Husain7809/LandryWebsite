import './dashboard.css'
import './dashboard_style'
import AdminDashboard from "../Dashboard/AdminDashboard";
import AdminOrder from "../Orders/AdminOrder";
import AdminUsers from "../Customers/AdminUsers";


import { NavLink } from "react-router-dom";


const AdminSidebar = () => {
    return (
        <div>
            <div className="container-fluid" id="main">
                <div className="row row-offcanvas row-offcanvas-left">
                    <div className="col-md-3 col-lg-2 p-0 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{ minHeight: '100vh' }}>
                        <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3">
                            <li className="nav-item"><NavLink to="/admin/dashboard" className="nav-link">Dashboard</NavLink></li>
                            <li className="nav-item"><NavLink to="/admin/orders" className="nav-link">Orders</NavLink></li>
                            <li className="nav-item"><NavLink to="/admin/products" className="nav-link">Poducts</NavLink></li>
                            <li className="nav-item"><NavLink to="/admin/users" className="nav-link">Users</NavLink></li>
                            {/* <li className="nav-item"><NavLink to="/admin/registration" className="nav-link">Registration</NavLink></li> */}
                            <li className="nav-item"><NavLink to="/admin/support" className="nav-link">Support</NavLink></li>
                            <li className="nav-item"><NavLink to="/admin/support" className="nav-link">Logout</NavLink></li>
                        </ul>
                    </div>
                    {
                        window.location.pathname == '/admin/dashboard' ? <AdminDashboard />
                            : window.location.pathname == "/admin/orders" ? <AdminOrder />
                                : window.location.pathname == "/admin/users" ? <AdminUsers />
                                    : ""
                    }

                    {/* {<AdminDashboard />} */}
                    {/* {<AdminOrder />} */}
                    {/* <AdminUsers /> */}
                </div>
            </div>
        </div>
    )
}

export default AdminSidebar


