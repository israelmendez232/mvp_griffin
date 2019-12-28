import React, { Component } from 'react';

export default class PricingSection extends Component {
    render() {
        return (
            <>
                <section className="section bg-light" id="pricing">
                    <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                        <div className="title text-center mb-4">
                            <h6 className="text-primary small-title">Pricing</h6>
                            <h4>Our Pricing plans</h4>
                            <p className="text-muted">At solmen va esser far uniform grammatica.</p>
                        </div>
                        </div>
                    </div>
                    {/* end row */}
                    <div className="row">
                        <div className="col-lg-4">
                        <div className="pricing-plans bg-white text-center p-4 mt-4">
                            <h5 className="plan-title mt-2 mb-4">Single</h5>
                            <div className="plan-price">
                            <h4 className="mb-3 price"><sup><small>$</small></sup>24</h4>
                            <h5 className="plan-duration text-muted font-18">Per license</h5>
                            </div>
                            <div className="pricing-content p-4 text-muted mb-2">
                            <p>Number of end products 1</p>
                            <p>Customer support</p>
                            <p>Free Updates</p>
                            <p>Monthly updates</p>
                            <p>24 x 7 Support</p>
                            </div>
                            <div className="pt-4">
                            <a href="/" className="btn btn-custom btn-block">Purchase Now</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="pricing-plans bg-white text-center p-4 mt-4">
                            <h5 className="plan-title mt-2 mb-4">Multiple</h5>
                            <div className="plan-price">
                            <h4 className="mb-3 price"><sup><small>$</small></sup>120</h4>
                            <h5 className="plan-duration text-muted font-18">Per license</h5>
                            </div>
                            <div className="pricing-content p-4 text-muted mb-2">
                            <p>Number of end products 1</p>
                            <p>Customer support</p>
                            <p>Free Updates</p>
                            <p>Monthly updates</p>
                            <p>24 x 7 Support</p>
                            </div>
                            <div className="pt-4">
                            <a href="/" className="btn btn-custom btn-block">Purchase Now</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="pricing-plans bg-white text-center p-4 mt-4">
                            <h5 className="plan-title mt-2 mb-4">Extended</h5>
                            <div className="plan-price">
                            <h4 className="mb-3 price"><sup><small>$</small></sup>999</h4>
                            <h5 className="plan-duration text-muted font-18">Per license</h5>
                            </div>
                            <div className="pricing-content p-4 text-muted mb-2">
                            <p>Number of end products 1</p>
                            <p>Customer support</p>
                            <p>Free Updates</p>
                            <p>Monthly updates</p>
                            <p>24 x 7 Support</p>
                            </div>
                            <div className="pt-4">
                            <a href="/" className="btn btn-custom btn-block">Purchase Now</a>
                            </div>
                        </div>
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