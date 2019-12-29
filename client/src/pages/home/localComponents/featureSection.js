import React, { Component } from 'react';

export default class FeatureSection extends Component {
    render() {
        return (
            <>
                <section className="features" id="features">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                        <ul className="nav nav-pills nav-justified features-tab mb-5" id="pills-tab" role="tablist">
                            <li className="nav-item">
                            <a className="nav-link" id="pills-code-tab" data-toggle="pill" href="/" role="tab" aria-controls="pills-code" aria-selected="true">
                                <div className="clearfix">
                                <div className="features-icon float-right">
                                    <i className="pe-7s-notebook h1" />
                                </div>
                                <div className="d-none d-lg-block mr-4">
                                    <h5>Canais e Listas</h5>
                                    <p>Converse com seus Contatos.</p>
                                </div>
                                </div>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" id="pills-customize-tab" data-toggle="pill" href="/" role="tab" aria-controls="pills-customize" aria-selected="false">
                                <div className="clearfix">
                                <div className="features-icon float-right">
                                    <i className="pe-7s-edit h1" />
                                </div>
                                <div className="d-none d-lg-block mr-4">
                                    <h5>Conteúdo</h5>
                                    <p>Organize e Envie com Facilidade.</p>
                                </div>
                                </div>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" id="pills-support-tab" data-toggle="pill" href="/" role="tab" aria-controls="pills-support" aria-selected="false">
                                <div className="features-icon float-right">
                                <i className="pe-7s-headphones h1" />
                                </div>
                                <div className="d-none d-lg-block mr-4">
                                <h5>Dashboard</h5>
                                <p>Análise e Extraia os Dados.</p>
                                </div>
                            </a>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade" id="pills-code" role="tabpanel" aria-labelledby="pills-code-tab">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-4 col-sm-6">
                                <div>
                                    <img src="images/features-img/img-1.png" alt="" className="img-fluid mx-auto d-block" />
                                </div>
                                </div>
                                <div className="col-lg-6 offset-lg-1">
                                <div>
                                    <div className="feature-icon mb-4">
                                    <i className="pe-7s-notebook h1 text-primary" />
                                    </div>
                                    <h5 className="mb-3">Quality Code</h5>
                                    <p className="text-muted">It will be as simple as Occidental in fact, it will be Occidental. To an English person it will seem like simplified English as a skeptical Cambridge.</p>
                                    <p className="text-muted">If several languages coalesce the grammar of the resulting language </p>
                                    <div className="row pt-4">
                                    <div className="col-lg-6">
                                        <div className="text-muted">
                                        <p><i className="mdi mdi-checkbox-marked-outline text-primary mr-2 h6" /> Nemo enim ipsam quia</p>
                                        <p><i className="mdi mdi-checkbox-marked-outline text-primary mr-2 h6" /> Ut enim ad minima</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="text-muted">
                                        <p><i className="mdi mdi-checkbox-marked-outline text-primary mr-2 h6" /> At vero eos accusamus et </p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="mt-4">
                                    <a href="/" className="btn btn-custom">Learn More <i className="mdi mdi-arrow-right ml-1" /></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* end row */}
                            </div>
                            <div className="tab-pane fades how active" id="pills-customize" role="tabpanel" aria-labelledby="pills-customize-tab">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-4 col-sm-6">
                                <div>
                                    <img src="images/features-img/img-2.png" alt="" className="img-fluid mx-auto d-block" />
                                </div>
                                </div>
                                <div className="col-lg-6 offset-lg-1">
                                <div>
                                    <div className="feature-icon mb-4">
                                    <i className="pe-7s-edit h1 text-primary" />
                                    </div>
                                    <h5 className="mb-3">Easy to customize</h5>
                                    <p className="text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et</p>
                                    <p className="text-muted">If several languages coalesce the grammar of the resulting language </p>
                                    <div className="row pt-4">
                                    <div className="col-lg-6">
                                        <div className="text-muted">
                                        <p><i className="mdi mdi-checkbox-marked-outline text-primary mr-2 h6" /> Nemo enim ipsam quia</p>
                                        <p><i className="mdi mdi-checkbox-marked-outline text-primary mr-2 h6" /> Ut enim ad minima</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="text-muted">
                                        <p><i className="mdi mdi-checkbox-marked-outline text-primary mr-2 h6" /> At vero eos accusamus et </p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="mt-4">
                                    <a href="/" className="btn btn-custom">Learn More <i className="mdi mdi-arrow-right ml-1" /></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* end row */}
                            </div>
                            <div className="tab-pane fade" id="pills-support" role="tabpanel" aria-labelledby="pills-support-tab">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-4 col-sm-6">
                                <div>
                                    <img src="images/features-img/img-3.png" alt="" className="img-fluid mx-auto d-block" />
                                </div>
                                </div>
                                <div className="col-lg-6 offset-lg-1">
                                <div>
                                    <div className="feature-icon mb-4">
                                    <i className="pe-7s-headphones h1 text-primary" />
                                    </div>
                                    <h5 className="mb-3">Awesome Support</h5>
                                    <p className="text-muted">It will be as simple as Occidental in fact, it will be Occidental. To an English person it will seem like simplified English as a skeptical Cambridge.</p>
                                    <p className="text-muted">If several languages coalesce the grammar of the resulting language </p>
                                    <div className="row pt-4">
                                    <div className="col-lg-6">
                                        <div className="text-muted">
                                        <p><i className="mdi mdi-checkbox-marked-outline text-primary mr-2 h6" /> Nemo enim ipsam quia</p>
                                        <p><i className="mdi mdi-checkbox-marked-outline text-primary mr-2 h6" /> Ut enim ad minima</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="text-muted">
                                        <p><i className="mdi mdi-checkbox-marked-outline text-primary mr-2 h6" /> At vero eos accusamus et </p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="mt-4">
                                    <a href="/" className="btn btn-custom">Learn More <i className="mdi mdi-arrow-right ml-1" /></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* end row */}
                            </div>
                        </div>
                        {/* end tab-content */}
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
