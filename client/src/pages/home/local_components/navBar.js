import React, { Component } from 'react';

export default class NavBar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
                    <div className="container-fluid">
                        {/* LOGO */}
                        <a className="logo text-uppercase" href="index.html">
                        <img src="images/logo-white.png" alt="GriffinGram" className="logo-light" />
                        <img src="images/logo-black.png" alt="GriffinGram" className="logo-dark" />
                        </a>
                        <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                        <i className="mdi mdi-menu" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
                            <li className="nav-item active">
                            <a href="#home" className="nav-link">
                                Home
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="#features" className="nav-link">
                                Features
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="#services" className="nav-link">
                                Serviços
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="#demo" className="nav-link">
                                Demos
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="#clients" className="nav-link">
                                Depoimentos
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="#pricing" className="nav-link">
                                Preços
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="#contact" className="nav-link">
                                Contatos
                            </a>
                            </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
            </>
        )
    }
};
