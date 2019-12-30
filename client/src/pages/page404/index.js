import React, { Component } from 'react';

class page404 extends Component {
    componentDidMount() {
        document.body.classList.add('authentication-bg');
    }

    componentWillUnmount() {
        document.body.classList.remove('authentication-bg');
    }
    
    render() {
        return (
            <>
                <div className="authentication-bg">
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
                                <div className="text-center">
                                <h1 className="text-error">Erro 404</h1>
                                <h3 className="mt-3 mb-2">Página Não Encontrada.</h3>
                                <p className="text-muted mb-3">Parece que você entrou na página errada :/ - Isso acontece! Clique no botão abaixo para voltar ao site.</p>
                                <a href="/" className="btn btn-danger waves-effect waves-light"><i className="fas fa-home mr-1" /> Voltar para Home</a>
                                </div>
                            </div> {/* end card-body */}
                            </div>
                            {/* end card */}
                        </div> {/* end col */}
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container */}
                    </div>
                    {/* end page */}
                </div>
            </>
        )
    }
};

export default page404;