import React, { Component } from 'react';

export default class CounterSection extends Component {
    render() {
        return (
            <>
                <section className="section bg-gradient">
                    <div className="container-fluid">
                    <div className="row" id="counter">
                        <div className="col-lg-3 col-sm-6">
                        <div className="text-center p-3">
                            <div className="counter-icon text-white-50 mb-4">
                            <i className="pe-7s-add-user display-4" />
                            </div>
                            <div className="counter-content text-white">
                            <h2 className="counter-value mb-3" data-count={1200}>0</h2>
                            <h5 className="counter-name">Usuários</h5>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                        <div className="text-center p-3">
                            <div className="counter-icon text-white-50 mb-4">
                            <i className="pe-7s-note2 display-4" />
                            </div>
                            <div className="counter-content text-white">
                            <h2 className="mb-3"><span className="counter-value" data-count={50}>10</span> +</h2>
                            <h5 className="counter-name">Listas e Canais</h5>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                        <div className="text-center p-3">
                            <div className="counter-icon text-white-50 mb-4">
                            <i className="pe-7s-mail display-4" />
                            </div>
                            <div className="counter-content text-white">
                            <h2 className="counter-value mb-3" data-count={6931}>608</h2>
                            <h5 className="counter-name">Mensagens Enviadas</h5>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                        <div className="text-center p-3">
                            <div className="counter-icon text-white-50 mb-4">
                            <i className="pe-7s-graph2 display-4" />
                            </div>
                            <div className="counter-content text-white">                       
                            <h2 className="counter-value mb-3" data-count={120}>2</h2>
                            <h5 className="counter-name">Relatórios Gerados/Baixados</h5>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </>
        )
    }
};