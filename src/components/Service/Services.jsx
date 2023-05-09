import { NavLink } from "react-router-dom"

const Services = () => {
    return (
        <section className="service_section layout_padding">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div id="inam" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-12 col-lg-4">
                                                <div className="card" >
                                                    <img src="/src/asset/images/s1.jpeg" className="card-img-top" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">Why you should use skin masks ?</h4>
                                                        <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                        <NavLink to="/wash-service" className="buttonService">Read More</NavLink>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-sm-12 col-lg-4">
                                                <div className="card">
                                                    <img src="/src/asset/images/s2.jpg" className="card-img-top" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">Why you should use skin masks ?</h4>
                                                        <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                        <NavLink to="/wash-service" className="buttonService">Read More</NavLink>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-sm-12 col-lg-4">
                                                <div className="card">
                                                    <img src="/src/asset/images/s3.jpg" className="card-img-top" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">Why you should use skin masks ?</h4>
                                                        <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                        <NavLink to="/wash-service" className="buttonService">Read More</NavLink>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-12 col-lg-4">
                                                <div className="card" >
                                                    <img src="/src/asset/images/s4.jpg" className="card-img-top" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">Why you should use skin masks ?</h4>
                                                        <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                        <NavLink to="/wash-service" className="buttonService">Read More</NavLink>

                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-sm-12 col-lg-4">
                                                <div className="card">
                                                    <img src="/src/asset/images/s5.jpg" className="card-img-top" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">Why you should use skin masks ?</h4>
                                                        <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                        <NavLink to="/wash-service" className="buttonService">Read More</NavLink>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-lg-4">
                                                <div className="card">
                                                    <img src="/src/asset/images/s6.jpg" className="card-img-top" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">Why you should use skin masks ?</h4>
                                                        <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                        <NavLink to="/wash-service" className="buttonService">Read More</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <a href="#inam" className="carousel-control-prev" data-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </a>
                            <a href="#inam" className="carousel-control-next" data-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </a>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Services
