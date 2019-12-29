import React, { Component } from 'react';

export default class ClientsSection extends Component {
    render() {
        return (
            <>
                <section className="section bg-light" id="clients">
                    <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                        <div className="title text-center mb-4">
                            <h6 className="text-primary small-title">Clients</h6>
                            <h4>What our Users Says</h4>
                            <p className="text-muted">At solmen va esser far uniform grammatica.</p>
                        </div>
                        </div>
                    </div>
                    {/* end row */}
                    <div className="row">
                        <div className="col-lg-4">
                        <div className="testi-box p-4 bg-white mt-4 text-center">
                            <p className="text-muted mb-4">" The designer of this theme delivered a quality product. I am not a front-end developer and I hate when the theme I download has glitches or needs minor tweaks here and there. This worked for my needs just out of the boxes. Also, it is fast and elegant."</p>
                            <div className="testi-img mb-4">
                            <img src="images/testi/img-1.png" alt="" className="rounded-circle img-thumbnail" />
                            </div>
                            <p className="text-muted mb-1"> - Adminto User</p>
                            <h5 className="font-18">Xpanta</h5>
                            <div className="testi-icon">
                            <i className="mdi mdi-format-quote-open display-2" />
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="testi-box p-4 bg-white mt-4 text-center">
                            <p className="text-muted mb-4">"  Extremely well designed and the documentation is very well done. Super happy with the purchase and definitely recommend this! "</p>
                            <div className="testi-img mb-4">
                            <img src="images/testi/img-2.png" alt="" className="rounded-circle img-thumbnail" />
                            </div>
                            <p className="text-muted mb-1"> - Adminto User</p>
                            <h5 className="font-18">G_Sam</h5>
                            <div className="testi-icon">
                            <i className="mdi mdi-format-quote-open display-2" />
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="testi-box p-4 bg-white mt-4 text-center">
                            <p className="text-muted mb-4">"  We used this theme to save some design time but... wow it has everything you didn't realize you would need later. I highly recommend this template to get your web design headed in the right direction quickly.  "</p>
                            <div className="testi-img mb-4">
                            <img src="images/testi/img-3.png" alt="" className="rounded-circle img-thumbnail" />
                            </div>
                            <p className="text-muted mb-1"> - Adminto User</p>
                            <h5 className="font-18">Isaacfab</h5>
                            <div className="testi-icon">
                            <i className="mdi mdi-format-quote-open display-2" />
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* end row */}
                    <div className="row mt-5 pt-5">
                        <div className="col-lg-3 col-sm-6">
                        <div className="client-images">
                            <img src="images/clients/1.png" alt="logo-img" className="mx-auto img-fluid d-block" />
                        </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                        <div className="client-images">
                            <img src="images/clients/2.png" alt="logo-img" className="mx-auto img-fluid d-block" />
                        </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                        <div className="client-images">
                            <img src="images/clients/3.png" alt="logo-img" className="mx-auto img-fluid d-block" />
                        </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                        <div className="client-images">
                            <img src="images/clients/4.png" alt="logo-img" className="mx-auto img-fluid d-block" />
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* end container-fluid */}
                </section>
            </>
        )
    }
};