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
                        <div className="col-md-6 col-12 mx-auto">
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
                                            <img src="/src/asset/images/cartLoad.gif" alt="" />
                                        </div>
                                        <NavLink id="buttonService" to="/cart-and-shipment">Men Service</NavLink>
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
                                            <img src="/src/asset/images/cartLoad.gif" alt="" />
                                        </div>
                                        <NavLink id="buttonService" to="/cart-and-shipment">Female Service</NavLink>
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
                                            <img src="/src/asset/images/cartLoad.gif" alt="" />
                                            <NavLink id="buttonService" to="/cart-and-shipment">Other service</NavLink>
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
