// import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div className="hero_area">
            <div className="hero_bg_box">
                <img src="./src/asset/images/slider-bg.jpg" alt="" />
            </div>
            <section className="slider_section ">
                {/*  data-interval="100" */}
                <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <div className="detail-box">
                                            <h1>
                                                We Provide <br />
                                                Laundry Services
                                            </h1>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci, blanditiis quidem dolorum odit voluptas? Voluptate, eveniet?
                                            </p>
                                            <div className="btn-box">
                                                <a href="" className="btn1">
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="img-box">
                                            <img src="./src/asset/images/slider-img.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <div className="detail-box">
                                            <h1>
                                                We Provide <br />
                                                Laundry Services
                                            </h1>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci, blanditiis quidem dolorum odit voluptas? Voluptate, eveniet?
                                            </p>
                                            <div className="btn-box">
                                                <a href="" className="btn1">
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header
