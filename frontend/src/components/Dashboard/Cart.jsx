import React from 'react'
import './cart.css'
import { toast } from 'react-toastify';
import Cookies from 'js-cookie'
import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string';


const Cart = () => {

    const navigate = useNavigate();

    const [name, setName] = useState(false)
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null);

    const [serviceName, setServiceName] = useState(null);
    const [qty, setQty] = useState(1);
    const [prices, setPrice] = useState();


    useEffect(() => {
        const token = Cookies.get('token');
        if (token !== undefined) {
            const decodedToken = jwt_decode(token);
            setToken(token)


            // Access the payload data from the decoded token
            const { user } = decodedToken;
            setName(user.name)
            setUserId(user.id)

            getServiceName();
        } else {
            navigate('/')
        }
    }, [])

    const location = useLocation();
    const price = 240;

    // get service name form query parameter
    const getServiceName = () => {
        const queryParams = queryString.parse(location.search);
        const name = queryParams.name;

        setPrice(price)
        setServiceName(name);
    }

    const qtyPrice = () => {
        const qty = document.getElementById('qty').value;
        const totalPrice = qty * price;
        setQty(qty);
        setPrice(totalPrice);
    }



    const buttonSubmit = async () => {

        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const country = document.getElementById('country').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const zip = document.getElementById('zip').value;
        const sName = document.getElementById('sName').innerHTML;

        let payment_mode;
        if (document.getElementById('bank').checked == true) {
            payment_mode = "Bank";
        } else {
            payment_mode = "Cod";
        }

        if (!date || !time || !name || !sName || !phone || !country || !address || !city || !state || !zip) {
            return toast.error("All Filed are required")
        }
        try {

            if (payment_mode != "Cod") {
                return paymentHandler();
            } else {
                const orderObj = {
                    schedule_date: date,
                    schedule_time: time,
                    name,
                    phone,
                    service_type: Object.values({ sName }).join(""),
                    qty: Object.values({ qty }).join(""),
                    address: `${address} ${country} ${city} ${state} ${zip}`,
                    payment: Object.values({ prices }).join(""),
                    payment_mode,
                    user_id: userId
                }

                console.log(orderObj);

                const headers = {
                    'x-auth-token': token,
                };

                // save order in database user wise
                const url = "http://localhost:3000/api/order/";

                const res = await axios.post(url, orderObj, {
                    headers
                });
                console.log(res);
                if (res.status === 201) {
                    toast.success("Order added SuccessFully")
                    navigate('/dashboard')
                }
                else if (res.status === 401) {
                    toast.success("Unauthorized")

                }
            }
        } catch (error) {
            return toast.error(error.message)
        }
    }

    const paymentHandler = async (e) => {
        const API_URL = 'http://localhost:3000/api/order/';

        const orderUrl = `${API_URL}orderPayment`;

        const response = await axios.get(orderUrl);
        const { data } = response;
        const options = {
            key: "rzp_test_AA4NwVPxxntMXR",
            name: "cleanX",
            description: "Landry cleanX",
            order_id: data.id,
            handler: async (response) => {
                try {
                    const paymentId = response.razorpay_payment_id;
                    console.log(paymentId);
                    const url = `${API_URL}capture/${paymentId}`;
                    const captureResponse = await axios.post(url, {})
                    console.log(captureResponse.data);
                } catch (err) {
                    console.log(err);
                }
            },
            theme: {
                color: "#FF3636",
            },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    return (
        <div className='container-fluid pt-5' id='cart'>
            <div className="row pt-4">
                <div className='p-0' style={{ width: '100%' }}>
                    <img src="/src/asset/images/date_time_pg_banner.jpg" width="100%" alt="" />
                </div>
                <div className="col-md-12 col-12 left_wash_service">
                    <div class="container mt-5">
                        <div class="title">
                            <h2>Order Form</h2>
                        </div>
                        <div class="d-flex">
                            <form action="" method="">
                                <label>
                                    <span class="date">Pickup Date <span class="required">*</span></span>
                                    <input type="date" id='date' name="date" />
                                </label>
                                <label>
                                    <span class="time">Pickup Time <span class="required">*</span></span>
                                    <input type="time" id='time' name="time" />
                                </label>
                                <label>
                                    <span class="name">Full Name <span class="required">*</span></span>
                                    <input type="text" id='name' name="name" value={name} />
                                </label>
                                <label>
                                    <span>Phone <span class="required">*</span></span>
                                    <input type="number" id='phone' name="city" />
                                </label>
                                <label>
                                    <span>Country <span class="required">*</span></span>
                                    <select name="selection" id='country'>
                                        <option value="India">India</option>
                                    </select>
                                </label>
                                <label>
                                    <span>Street Address <span class="required">*</span></span>
                                    <input type="text" id='address' name="houseadd" placeholder="House number and street name" required />
                                </label>
                                <label>
                                    <span>Town / City <span class="required">*</span></span>
                                    <input type="text" id='city' name="city" />
                                </label>
                                <label>
                                    <span>State / County <span class="required">*</span></span>
                                    <input type="text" id='state' name="state" />
                                </label>
                                <label>
                                    <span>Postcode / ZIP <span class="required">*</span></span>
                                    <input type="number" id='zip' name="zip" />
                                </label>
                            </form>
                            <div class="Yorder">
                                <table>
                                    <tr>
                                        <th colspan="2">Your order</th>
                                    </tr>
                                    <tr>
                                        <td>Service Name</td>
                                        <td id="sName">{serviceName}</td>
                                    </tr>
                                    <tr>
                                        <td>Quantity</td>
                                        {/* <td id="qty">{qty}</td> */}
                                        <td id='qtys'>
                                            <select name="qty" id="qty" onChange={qtyPrice}>
                                                <option value="1" selected>1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Total Price</td>
                                        <td id="price">{prices}</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping</td>
                                        <td>Free shipping</td>
                                    </tr>
                                </table><br />

                                <div className='radio_button'>
                                    <input type="radio" id='bank' name="radio" value="online_bank_tranfer" checked />Bank Transfer
                                </div>
                                <div className='radio_button'>
                                    <input type="radio" id='cash' name="radio" value="cash_on_delivery" /> COD
                                </div>
                                <div>
                                </div>
                                <button type="button" id='orderSubmit' onClick={buttonSubmit}>Place Order</button>
                                {
                                    // {
                                    //     sName? "Yes": "Please select the service types "
                                    // }
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cart
