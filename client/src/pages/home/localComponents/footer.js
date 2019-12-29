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
                            <li className="list-inline-item"><a href="/">About</a></li>
                            <li className="list-inline-item"><a href="/">Services</a></li>
                            <li className="list-inline-item"><a href="/">Clients</a></li>
                            <li className="list-inline-item"><a href="/">Pricing</a></li>
                            <li className="list-inline-item"><a href="/">Contact</a></li>
                            </ul>
                            <ul className="list-inline social-links mb-4 mt-5">
                            <li className="list-inline-item"><a href="/"><i className="mdi mdi-facebook" /></a></li>
                            <li className="list-inline-item"><a href="/"><i className="mdi mdi-twitter" /></a></li>
                            <li className="list-inline-item"><a href="/"><i className="mdi mdi-instagram" /></a></li>
                            <li className="list-inline-item"><a href="/"><i className="mdi mdi-google-plus" /></a></li>
                            </ul>
                            <p className="text-white-50 mb-4">2016 - 2019 © Adminto. Design by <a href="/" target="_blank" className="text-white-50">Coderthemes</a> </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </footer>
            </>
        )
    }
};