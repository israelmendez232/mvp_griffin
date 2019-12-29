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
                            <h6 className="text-primary small-title">Clientes</h6>
                            <h4>Depoimentos de Usuários</h4>
                            {/* <p className="text-muted">At solmen va esser far uniform grammatica.</p> */}
                        </div>
                        </div>
                    </div>
                    {/* end row */}
                    <div className="row">
                        <div className="col-lg-4">
                        <div className="testi-box p-4 bg-white mt-4 text-center">
                            <p className="text-muted mb-4">A plataforma entrega o necessário para controlar os meus canais e contatos sem ter que entrar pelo celular toda vez. Fácil para responder com agilidade e ganhar agilidade no dia-a-dia com Telegram.</p>
                            <div className="testi-img mb-4">
                            <img src="images/testi/img-1.png" alt="" className="rounded-circle img-thumbnail" />
                            </div>
                            <p className="text-muted mb-1">Influenciador Digital.</p>
                            <h5 className="font-18">Gabriel Silva</h5>
                            <div className="testi-icon">
                            <i className="mdi mdi-format-quote-open display-2" />
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="testi-box p-4 bg-white mt-4 text-center">
                            <p className="text-muted mb-4">O Telegram é bem limitado com relação aos dados, então o Griffin permite que possamos exportar algumas informações e cruxar com o Google Analytics. É bem completa e essencial para vermos resultados na nossa campanha de marketing.</p>
                            <div className="testi-img mb-4">
                            <img src="images/testi/img-2.png" alt="" className="rounded-circle img-thumbnail" />
                            </div>
                            <p className="text-muted mb-1">Consultor de Finanças.</p>
                            <h5 className="font-18">Thiago Martins</h5>
                            <div className="testi-icon">
                            <i className="mdi mdi-format-quote-open display-2" />
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="testi-box p-4 bg-white mt-4 text-center">
                            <p className="text-muted mb-4">A Griffin ajuda no momento para enviar mensagens. Fica fácil para montar e colocar todo o material dentro da plataforma. Com o calendário, conseguimos gerenciar os envios e ver todas as mensagens agendadas.</p>
                            <div className="testi-img mb-4">
                            <img src="images/testi/img-3.png" alt="" className="rounded-circle img-thumbnail" />
                            </div>
                            <p className="text-muted mb-1">Dono do InfoProduto "Inglês com 7 em 30."</p>
                            <h5 className="font-18">Richard Ferreira</h5>
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