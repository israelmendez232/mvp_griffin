import React, { Component } from 'react';

export default class HomeStart extends Component {
    render() {
        return(
            <section className="bg-home bg-gradient" id="home">
                <div className="home-center">
                <div className="home-desc-center">
                    <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-6">
                        <div className="home-title text-white">
                            <h5 className="mb-3 text-white-50">Descubra o GriffinGram Gratuitamente!</h5>
                            <h1 className="mb-4">Permita que o Telegram Faça Mais Por Você</h1>
                            <p className="text-white-50 home-desc font-16 mb-5">Plataforma funcional e completa para cuidar e gerenciar dos seus canais e contatos do Telegram. Rentabilize essa fonte de comunicação de maneira mais profissional.</p>
                            <div className="watch-video mt-5">
                            <a href="/" className="btn btn-custom mr-4">Confira Gratuitamente <i className="mdi mdi-chevron-right ml-1" /></a>
                            <a href="http://vimeo.com/99025203" className="video-play-icon text-white"><i className="mdi mdi-play play-icon-circle mr-2" /> <span>Watch The Video</span></a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 col-sm-6">
                        <div className="home-img mo-mt-20">
                            <img src="images/home-img.png" alt="" className="img-fluid mx-auto d-block" />
                        </div>
                        </div>
                    </div>
                    {/* end row */}
                    </div>
                    {/* end container-fluid */}
                </div>
                </div>
            </section>
        )
    }
};
