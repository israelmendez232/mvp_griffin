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
                            <h6 className="text-primary small-title">Contato</h6>
                            <h4>Dúvidas e Sugestões?</h4>
                            <p className="text-muted">Entre em contato aqui que conversaremos com você assim que pudermos.</p>
                        </div>
                        </div>
                    </div>
                    {/* end row */}
                    <div className="row">
                        <div className="col-lg-4">
                        <div className="get-in-touch">
                            <h5>Entre em contato</h5>
                            <p className="text-muted mb-5">Confira nossas formas de acesso aqui:</p>
                            <div className="mb-3">
                            <div className="get-touch-icon float-left mr-3">
                                <i className="pe-7s-mail h2 text-primary" />
                            </div>
                            <div className="overflow-hidden">
                                <h5 className="font-16 mb-0">E-mail</h5>
                                <p className="text-muted">contato@griffingram.com.br</p>
                            </div>
                            </div>
                            <div className="mb-2">
                            <div className="get-touch-icon float-left mr-3">
                                <i className="pe-7s-map-marker h2 text-primary" />
                            </div>
                            <div className="overflow-hidden">
                                <h5 className="font-16 mb-0">Endereço</h5>
                                <p className="text-muted">R. Gomes de Carvalho, 911 - Vila Olímpia, São Paulo - SP, 04547-003.</p>
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
                                    <label htmlFor="name">Nome</label>
                                    <input name="name" id="name" type="text" className="form-control" placeholder="Entre seu nome..." />
                                </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input name="email" id="email" type="email" className="form-control" placeholder="Entre seu e-mail..." />
                                </div>
                                </div>
                            </div>
                            {/* end row */}
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="subject">Assunto</label>
                                    <input name="subject" id="subject" type="text" className="form-control" placeholder="Coloque o Assunto..." />
                                </div>
                                </div>
                            </div>
                            {/* end row */}
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="comments">Mensagem</label>
                                    <textarea name="comments" id="comments" rows={4} className="form-control" placeholder="Coloque a mensagem..." defaultValue={""} />
                                </div>
                                </div>
                            </div>
                            {/* end row */}
                            <div className="row">
                                <div className="col-lg-12 text-right">
                                <input type="submit" id="submit" name="send" className="submitBnt btn btn-custom" defaultValue="Enviar" />
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