import React, { Component } from 'react';
import axios from 'axios';

function login(email, password) {
    axios.get(`/user?email=${email}`)
    .then((response) => {
        // handle success
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
}

class Login extends Component {
    componentDidMount() {
        document.body.classList.add('authentication-bg');
    }

    componentWillUnmount() {
        document.body.classList.remove('authentication-bg');
    }



    render() {
        return (
            <>
                {/* <div className="authentication-bg"> */}
                    <div className="home-btn d-none d-sm-block">
                    <a href="/"><i className="fas fa-home h2 text-dark" /></a>
                    </div>
                    <div className="account-pages mt-5 mb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-5">
                            <div className="text-center">
                            <a href="/">
                                <span><img  className="mt-2 mb-4" src="/images/logo-black.png" alt="" height={60} /></span>
                            </a>
                            </div>
                            <div className="card">
                            <div className="card-body p-4">
                                <div className="text-center mb-4">
                                <h4 className="text-uppercase mt-0">Login</h4>
                                </div>
                                <form action="#">
                                <div className="form-group mb-3">
                                    <label htmlFor="emailaddress">E-mail</label>
                                    <input className="form-control" type="email" id="emailaddress" required placeholder="Entre seu e-mail." />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password">Senha</label>
                                    <input className="form-control" type="password" required id="password" placeholder="Entre sua senha." />
                                </div>
                                <div className="form-group mb-3">
                                    <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="checkbox-signin" defaultChecked />
                                    <label className="custom-control-label" htmlFor="checkbox-signin">Lembrar-se de Mim</label>
                                    </div>
                                </div>
                                <div className="form-group mb-0 text-center">
                                    <button className="btn btn-primary btn-block" type="submit"> Entrar </button>
                                </div>
                                </form>
                            </div> {/* end card-body */}
                            </div>
                            {/* end card */}
                            <div className="row mt-3">
                            <div className="col-12 text-center">
                                <p> <a href="/forgot-password" className="text-muted ml-1"><i className="fa fa-lock mr-1" />Esqueceu sua Senha?</a></p>
                                <p className="text-muted">Não tem conta? <a href="/register" className="text-dark ml-1"><b>Registre-se</b>.</a></p>
                            </div> {/* end col */}
                            </div>
                            {/* end row */}
                        </div> {/* end col */}
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container */}
                    </div>
                {/* </div> */}
            </>
        )
    }
}

export default Login;