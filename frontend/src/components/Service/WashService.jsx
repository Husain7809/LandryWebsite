import React from 'react'
import './washService.css'
import { NavLink } from "react-router-dom"


const WashService = () => {
    return (
        <div className="container" id='webService'>
            <div className="row">
                <div className="col-md-12 col-12" style={{ marginTop: '8rem' }}>
                    <h2>Wash Services</h2>
                    <div className="row">
                        <div className="col-md-8 col-12 mx-auto">
                            <div id="accordion" className='mt-5'>
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h5 class="mb-0">
                                            <div>
                                                <i class="fa fa-male" aria-hidden="true"></i>
                                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Men
                                                </button>
                                            </div>
                                        </h5>
                                    </div>

                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div class="card-body text-center">
                                            {/* <img src="/src/asset/images/cartLoad.gif" alt="" /> */}
                                            <div className="men-service-area">
                                                <div className="row">
                                                    <div className="col-md-4 col-12 mb-2 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Shirt Laundering</u></h5>
                                                                <p class="card-text">We offer professional laundering services specifically tailored to men's shirts. Our process includes careful stain removal, thorough washing.</p>
                                                                <NavLink id="buttonService" to="/cart-and-shipment?name=shirt-laundring">Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-12 mb-2 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Suit Cleaning</u></h5>
                                                                <p class="card-text">Suits are investment pieces that require delicate care. Our experienced staff specializes in suit cleaning and pressing to preserve.</p>
                                                                <NavLink id="buttonService" to="/cart-and-shipment?name=suit-cleaning">Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-12 mb-2 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Specialty Garments</u></h5>
                                                                <p class="card-text">For unique men's garments such as leather jackets, blazers, or formalwear, our laundry system offers specialized cleaning services. .</p>
                                                                <NavLink id="buttonService" to="/cart-and-shipment?name=specialty-garment">Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4 col-12 mb-2 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Trousers and Pants</u></h5>
                                                                <p class="card-text">We offer professional laundering services specifically tailored to men's shirts. Our process includes careful stain removal, thorough washing.</p>
                                                                <NavLink id="buttonService" to="/cart-and-shipment?name=trousers-pants">Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-12 mb-2 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Alterations and Repairs</u></h5>
                                                                <p class="card-text">In addition to cleaning services, we provide alterations and repairs for men's clothing. Whether you need a simple hemming.</p>
                                                                <NavLink id="buttonService" to="/cart-and-shipment?name=alternation-repairs">Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-12 mb-2 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Convenient Pickup</u></h5>
                                                                <p class="card-text">We understand that your time is valuable. That's why we offer convenient pickup and delivery services for all your laundry needs .</p>
                                                                <NavLink id="buttonService" to="/cart-and-shipment?name=convenient-pickup">Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <h5 class="mb-0">
                                            <div>
                                                <i class="fa fa-female" aria-hidden="true"></i>
                                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Women
                                                </button>
                                            </div>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div class="card-body text-center">
                                            {/* <img src="/src/asset/images/cartLoad.gif" alt="" /> */}
                                            <div className="women-service-area">
                                                <div className="row">
                                                    <div className="col-md-4 mb-2 col-12 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Women's Clothing</u></h5>
                                                                <p class="card-text">We understand the unique requirements of women's clothing to ensure they remain in excellent condition.</p>
                                                                <NavLink id="buttonService" to="/cart-and-shipment?name=women-clothing">Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-2 col-12 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Delicate Fabrics</u></h5>
                                                                <p class="card-text">Delicate fabrics such as silk, chiffon, and lace require special attention.laundry system is well to handle the gentle cleaning.</p>
                                                                <NavLink id="buttonService" to="/cart-and-shipment?name=delicate-fabrics">Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-2 col-12 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Business Attire</u></h5>
                                                                <p class="card-text">We specialize in cleaning and maintaining women's business attire, including blazers, trousers, and blouses.</p>
                                                                <NavLink id="buttonService" to="/cart-and-shipment?name=business-attire">Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4 mb-2 col-12 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Convenient Pickup</u></h5>
                                                                <p class="card-text">We understand your busy schedule, so we offer convenient pickup and delivery services.</p>
                                                                <NavLink id="buttonService" to="/cart-and-shipment?name=convenient-pickup">Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-2 col-12 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Alterations and Repairs</u></h5>
                                                                <p class="card-text">In addition to cleaning services, we provide alterations and repairs for women's clothing. Our skilled tailors can handle.</p>
                                                                <NavLink id="buttonService" to="/cart-and-shipment?name=alternation-repaire">Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-2 col-12 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Designer Wear</u></h5>
                                                                <p class="card-text">We specialize in cleaning and maintaining women's business attire, including blazers, trousers, and blouses.</p>
                                                                <NavLink id="buttonService" to="/cart-and-shipment?name=designer-wear">Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingThree">
                                        <h5 class="mb-0">
                                            <div>
                                                <i class="fa fa-genderless" aria-hidden="true"></i>
                                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Other
                                                </button>
                                            </div>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div class="card-body text-center">
                                            <div className="other-service-area">
                                                <div className="row">
                                                    <div className="col-md-4 mb-2 col-12 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Household Items</u></h5>
                                                                <p class="card-text">Our laundry system is equipped to handle a variety of household items, including bed linens, tablecloths, curtains, and towels.</p>
                                                                <NavLink id="buttonService" to="/cart-and-shipment?name=household-items">Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-2 col-12 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Outdoor Gear</u></h5>
                                                                <p class="card-text">Outdoor clothing such as jackets, raincoats, and hiking gear require special attention due to their unique fabrics and features.</p>
                                                                <NavLink id="buttonService" to="/cart-and-shipment?name=outdoor-gear">Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-2 col-12 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Curtain Cleaning</u></h5>
                                                                <p class="card-text">Refresh your home's interior by cleaning your curtains with our professional curtain cleaning services. We'll carefully clean your curtains.</p>
                                                                <NavLink id="buttonService" to="/cart-and-shipment?name=curtain-cleaning">Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4 mb-2 col-12 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Fitness Gear</u></h5>
                                                                <p class="card-text">From gym clothes to sports uniforms, our laundry services extend to sports and fitness.</p>
                                                                <NavLink id="buttonService" to="/cart-and-shipment?name=fitness-gear">Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-2 col-12 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Shoes Cleaning</u></h5>
                                                                <p class="card-text">Extend the lifespan of your favorite shoes with our shoe cleaning and care services.</p>
                                                                <NavLink id="buttonService" to="/cart-and-shipment?name=shoes-cleaning" data="shoe cleaning">Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-2 col-12 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Convenient Pickup</u></h5>
                                                                <p class="card-text">We offer convenient pickup and delivery services for all our laundry and cleaning services.</p>
                                                                <NavLink id="buttonService" to="/cart-and-shipment?name=convenient-pickup">Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default WashService
