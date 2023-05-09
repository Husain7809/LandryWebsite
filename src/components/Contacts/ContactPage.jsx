
const ContactPage = () => {
    return (
        <section>
            <div className="container contact_area pt-5">
                <div className="row">
                    <div className="col-sm-12 col-12 mx-auto mt-5">
                        <div className="row">
                            <div className="col-sm-12 col-sm-offset-2">
                                <div>
                                    <h2 className="text-center mb-5">CONTACT US</h2>
                                </div>
                                <form method="post" data-form-title="CONTACT US">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="name" required="" placeholder="Name*" data-form-field="Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" required="" placeholder="Email*" data-form-field="Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" className="form-control" name="phone" placeholder="Phone" data-form-field="Phone" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" placeholder="Message" rows="7" data-form-field="Message"></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-lg btn-submit">CONTACT US</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ContactPage
