import React, { Component } from 'react';

export default class ContactSection extends Component {
    render() {
        return (
            <>
                <section className="section" id="contact">
                    <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                        <div className="title text-center mb-5">
                            <h6 className="text-primary small-title">Contact</h6>
                            <h4>Have any Questions ?</h4>
                            <p className="text-muted">At solmen va esser far uniform grammatica.</p>
                        </div>
                        </div>
                    </div>
                    {/* end row */}
                    <div className="row">
                        <div className="col-lg-4">
                        <div className="get-in-touch">
                            <h5>Get in touch</h5>
                            <p className="text-muted mb-5">At solmen va esser necessi far</p>
                            <div className="mb-3">
                            <div className="get-touch-icon float-left mr-3">
                                <i className="pe-7s-mail h2 text-primary" />
                            </div>
                            <div className="overflow-hidden">
                                <h5 className="font-16 mb-0">E-mail</h5>
                                <p className="text-muted">example@abc.com</p>
                            </div>
                            </div>
                            <div className="mb-3">
                            <div className="get-touch-icon float-left mr-3">
                                <i className="pe-7s-phone h2 text-primary" />
                            </div>
                            <div className="overflow-hidden">
                                <h5 className="font-16 mb-0">Phone</h5>
                                <p className="text-muted">012-345-6789</p>
                            </div>
                            </div>
                            <div className="mb-2">
                            <div className="get-touch-icon float-left mr-3">
                                <i className="pe-7s-map-marker h2 text-primary" />
                            </div>
                            <div className="overflow-hidden">
                                <h5 className="font-16 mb-0">Address</h5>
                                <p className="text-muted">20 Rollins Road Cotesfield, NE 68829</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-8">
                        <div className="custom-form bg-white">
                            <div id="message" />
                            <form method="post" action="php/contact.php" name="contact-form" id="contact-form">
                            <div className="row">
                                <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input name="name" id="name" type="text" className="form-control" placeholder="Enter your name..." />
                                </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input name="email" id="email" type="email" className="form-control" placeholder="Enter your email..." />
                                </div>
                                </div>
                            </div>
                            {/* end row */}
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input name="subject" id="subject" type="text" className="form-control" placeholder="Enter Subject..." />
                                </div>
                                </div>
                            </div>
                            {/* end row */}
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="comments">Message</label>
                                    <textarea name="comments" id="comments" rows={4} className="form-control" placeholder="Enter your message..." defaultValue={""} />
                                </div>
                                </div>
                            </div>
                            {/* end row */}
                            <div className="row">
                                <div className="col-lg-12 text-right">
                                <input type="submit" id="submit" name="send" className="submitBnt btn btn-custom" defaultValue="Send Message" />
                                <div id="simple-msg" />
                                </div>
                            </div>
                            {/* end row */}
                            </form>
                        </div>
                        {/* end custom-form */}
                        </div>
                    </div>
                    {/* end row */}
                    </div>
                    {/* end container-fluid */}
                </section>
            </>
        )
    }
};