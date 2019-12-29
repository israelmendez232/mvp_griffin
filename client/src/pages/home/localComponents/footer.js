import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer bg-dark">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                        <div className="text-center">
                            <div className="footer-logo mb-3">
                            <img src="images/logo-white.png" className="logo-light" alt="GriffinGram" />
                            </div>
                            <ul className="list-inline footer-list text-center mt-5">
                                <li className="list-inline-item"><a href="/">Home</a></li>
                                <li className="list-inline-item"><a href="#features">Features</a></li>
                                <li className="list-inline-item"><a href="#clientes">Depoimentos</a></li>
                                <li className="list-inline-item"><a href="#pricing">Preços</a></li>
                                <li className="list-inline-item"><a href="#clients">Clientes</a></li>
                                <li className="list-inline-item"><a href="#contact">Contato</a></li>
                                <li className="list-inline-item"><a href="/login">Login / Registro</a></li>
                            </ul>
                            <ul className="list-inline social-links mb-4 mt-5">
                                <li className="list-inline-item"><a href="/"><i className="mdi mdi-facebook" /></a></li>
                                <li className="list-inline-item"><a href="/"><i className="mdi mdi-instagram" /></a></li>
                            </ul>
                            <p className="text-white-50 mb-4">2019 © GriffinGram. Todos os Direitos Reservados.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </footer>
            </>
        )
    }
};