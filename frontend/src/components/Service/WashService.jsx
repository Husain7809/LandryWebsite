import React from 'react'
import './wash.css'
import './wash.js'


const WashService = () => {
    return (
        <div className='container-fluid pt-5'>
            <div className="row pt-4">
                <div className='p-0' style={{ width: '100%' }}>
                    <img src="/src/asset/images/date_time_pg_banner.jpg" width="100%" alt="" />
                </div>
                <div className="col-md-12 left_wash_service">
                    <section class="signup-step-container">
                        <div class="container">
                            <div class="row d-flex justify-content-center">
                                <div class="col-md-8">
                                    <div class="wizard">
                                        <div class="wizard-inner">
                                            <div class="connecting-line"></div>
                                            <ul class="nav nav-tabs" role="tablist">
                                                <li role="presentation" class="active">
                                                    <a href="#step1" data-toggle="tab" aria-controls="step1" role="tab" aria-expanded="true"><span class="round-tab">1 </span> <i>Build Your Order</i></a>
                                                </li>
                                                <li role="presentation" class="disabled">
                                                    <a href="#step2" data-toggle="tab" aria-controls="step2" role="tab" aria-expanded="false"><span class="round-tab">2</span> <i>Schedule Pick up</i></a>
                                                </li>
                                                <li role="presentation" class="disabled">
                                                    <a href="#step3" data-toggle="tab" aria-controls="step3" role="tab"><span class="round-tab">3</span> <i>Choose Address</i></a>
                                                </li>
                                                <li role="presentation" class="disabled">
                                                    <a href="#step4" data-toggle="tab" aria-controls="step4" role="tab"><span class="round-tab">4</span> <i>Confirm</i></a>
                                                </li>
                                            </ul>
                                        </div>

                                        <form role="form" action="index.html" class="login-box">
                                            <div class="tab-content" id="main_form">
                                                <div class="tab-pane active" role="tabpanel" id="step1">
                                                    <h4 class="text-center">Select Your Order</h4>
                                                    <div class="row">
                                                        <form class="form">
                                                            <div class="inputGroup">
                                                                <input id="option1" name="option1" type="checkbox" />
                                                                <label for="option1">Male Service</label>
                                                            </div>
                                                            <div class="inputGroup">
                                                                <input id="option2" name="option2" type="checkbox" />
                                                                <label for="option2">Female Service</label>
                                                            </div>
                                                            <div class="inputGroup">
                                                                <input id="option3" name="option3" type="checkbox" />
                                                                <label for="option3">Other Service</label>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <ul class="list-inline pull-right">
                                                        <li><button type="button" class="default-btn next-step"><a href="#step2" data-toggle="tab" aria-controls="step2" role="tab" aria-expanded="true">Next step</a></button></li>
                                                    </ul>
                                                </div>
                                                <div class="tab-pane" role="tabpanel" id="step2">
                                                    <h4 class="text-center">Select Pick-Up Date & Time</h4>
                                                    <div className="row">
                                                        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 my-5">
                                                            <div className="form-group">
                                                                <label htmlFor="">Select Date:</label>
                                                                <input type="date" class="form-control" /><br />
                                                                <label htmlFor="">Select Time:</label>
                                                                <input type="time" class="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul class="list-inline pull-right">
                                                        <li><button type="button" class="default-btn prev-step"><a href="#step1" data-toggle="tab" aria-controls="step1" role="tab" aria-expanded="true">Back</a></button></li>&nbsp;
                                                        <li><button type="button" class="default-btn next-step"><a href="#step3" data-toggle="tab" aria-controls="step1" role="tab" aria-expanded="true">Next step</a></button></li>
                                                    </ul>
                                                </div>
                                                <div class="tab-pane" role="tabpanel" id="step3">
                                                    <h4 class="text-center">Select Address</h4>
                                                    <div class="row mt-4">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label>Full Name *</label>
                                                                <input class="form-control" type="text" name="name" placeholder="Enter the full name" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label>Number:</label>
                                                                <input class="form-control" type="text" name="number" placeholder="Phone Number" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label>Street Address</label>
                                                                <input class="form-control" type="text" name="name" placeholder="Enter the address" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label>City *</label>
                                                                <input class="form-control" type="text" name="city" placeholder="Enter the city" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label>State *</label>
                                                                <input class="form-control" type="text" name="state" placeholder="" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label>Country *</label>
                                                                <input class="form-control" type="text" name="country" placeholder="" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label>Pincode *</label>
                                                                <input class="form-control" type="text" name="pincode" placeholder="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul class="list-inline pull-right">
                                                        <li><button type="button" class="default-btn prev-step"><a href="#step3" data-toggle="tab" aria-controls="step3" role="tab" aria-expanded="true">Back</a></button></li>&nbsp;
                                                        <li><button type="button" class="default-btn next-step"><a href="#step4" data-toggle="tab" aria-controls="step4" role="tab" aria-expanded="true">Next step</a></button></li>
                                                    </ul>
                                                </div>
                                                <div class="tab-pane" role="tabpanel" id="step4">
                                                    <h4 class="text-center">Confirmation</h4>
                                                    <div className="row">

                                                    </div>

                                                    <ul class="list-inline pull-right">
                                                        <li><button type="button" class="default-btn prev-step">Back</button></li>&nbsp;
                                                        <li><button type="button" class="default-btn next-step">Confirm</button></li>
                                                    </ul>
                                                </div>
                                                <div class="clearfix"></div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div >
    )
}

export default WashService
