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
                            <h6 className="text-primary small-title">Preços</h6>
                            <h4>Confira os nossos Planos</h4>
                            {/* <p className="text-muted">At solmen va esser far uniform grammatica.</p> */}
                        </div>
                        </div>
                    </div>
                    {/* end row */}
                    <div className="row">
                        <div className="col-lg-4">
                        <div className="pricing-plans bg-white text-center p-4 mt-4">
                            <h5 className="plan-title mt-2 mb-4">Free</h5>
                            <div className="plan-price">
                            <h4 className="mb-3 price"><sup></sup>Gratuito</h4>
                            <h5 className="plan-duration text-muted font-18">Para sempre.</h5>
                            </div>
                            <div className="pricing-content p-4 text-muted mb-2">
                            <p>Number of end products 1</p>
                            <p>Customer support</p>
                            <p>Free Updates</p>
                            <p>Monthly updates</p>
                            <p>24 x 7 Support</p>
                            </div>
                            <div className="pt-4">
                            <a href="/" className="btn btn-custom btn-block">Confira Agora.</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="pricing-plans bg-white text-center p-4 mt-4">
                            <h5 className="plan-title mt-2 mb-4">Essential</h5>
                            <div className="plan-price">
                            <h4 className="mb-3 price"><sup><small>R$</small></sup>49,9</h4>
                            <h5 className="plan-duration text-muted font-18">Por mês.</h5>
                            </div>
                            <div className="pricing-content p-4 text-muted mb-2">
                            <p>Number of end products 1</p>
                            <p>Customer support</p>
                            <p>Free Updates</p>
                            <p>Monthly updates</p>
                            <p>24 x 7 Support</p>
                            </div>
                            <div className="pt-4">
                            <a href="/" className="btn btn-custom btn-block">Confira Agora.</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="pricing-plans bg-white text-center p-4 mt-4">
                            <h5 className="plan-title mt-2 mb-4">Professional</h5>
                            <div className="plan-price">
                            <h4 className="mb-3 price"><sup><small>R$</small></sup>199,9</h4>
                            <h5 className="plan-duration text-muted font-18">Por mês.</h5>
                            </div>
                            <div className="pricing-content p-4 text-muted mb-2">
                            <p>Number of end products 1</p>
                            <p>Customer support</p>
                            <p>Free Updates</p>
                            <p>Monthly updates</p>
                            <p>24 x 7 Support</p>
                            </div>
                            <div className="pt-4">
                            <a href="/" className="btn btn-custom btn-block">Confira Agora</a>
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