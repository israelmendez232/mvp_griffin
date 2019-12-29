import React, { Component } from 'react';

export default class NavBar extends Component {
    render() {
        return (
            <>
                <section className="section bg-light" id="services">
                    <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                        <div className="title text-center mb-4">
                            <h6 className="text-primary small-title">Services</h6>
                            <h4>What we do</h4>
                            <p className="text-muted">At solmen va esser far uniform grammatica.</p>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-sm-6">
                        <div className="services-box p-4 bg-white mt-4">
                            <div className="services-img float-left mr-4">
                            <img src="images/icons/layers.png" alt="" />
                            </div>
                            <h5>Responsive Layouts</h5>
                            <div className="overflow-hidden">
                            <p className="text-muted">The new common language will be more simple and regular than the existing European languages.</p>
                            <a href="/" className="text-custom">Read more...</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                        <div className="services-box p-4 bg-white mt-4">
                            <div className="services-img float-left mr-4">
                            <img src="images/icons/core.png" alt="" />
                            </div>
                            <h5>Based on Bootstrap UI</h5>
                            <div className="overflow-hidden">
                            <p className="text-muted">If several languages coalesce the grammar language is more than that of indual languages.</p>
                            <a href="/" className="text-custom">Read more...</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                        <div className="services-box p-4 bg-white mt-4">
                            <div className="services-img float-left mr-4">
                            <img src="images/icons/paperdesk.png" alt="" />
                            </div>
                            <h5>Creative Design</h5>
                            <div className="overflow-hidden">
                            <p className="text-muted">It will be as simple as occidental it will be to an english person. It will be as simple as occidental</p>
                            <a href="/" className="text-custom">Read more...</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                        <div className="services-box p-4 bg-white mt-4">
                            <div className="services-img float-left mr-4">
                            <img src="images/icons/solarsystem.png" alt="" />
                            </div>
                            <h5>Awesome Support</h5>
                            <div className="overflow-hidden">
                            <p className="text-muted">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut</p>
                            <a href="/" className="text-custom">Read more...</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                        <div className="services-box p-4 bg-white mt-4">
                            <div className="services-img float-left mr-4">
                            <img src="images/icons/datatext.png" alt="" />
                            </div>
                            <h5>Easy to customize</h5>
                            <div className="overflow-hidden">
                            <p className="text-muted">Everyone realizes why a new common language would be one could refuse to pay translators.</p>
                            <a href="/" className="text-custom">Read more...</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                        <div className="services-box p-4 bg-white mt-4">
                            <div className="services-img float-left mr-4">
                            <img src="images/icons/browserscript.png" alt="" />
                            </div>
                            <h5>Quality Code</h5>
                            <div className="overflow-hidden">
                            <p className="text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis deleniti atque</p>
                            <a href="/" className="text-custom">Read more...</a>
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