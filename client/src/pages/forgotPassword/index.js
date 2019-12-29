import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom'

import { Container, Row, Col, Card, CardBody, FormGroup, Button, Alert } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

import { isUserAuthenticated } from '../../services/authUtils';
import Loader from '../../global_components/Loader';

class ForgetPassword extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
        this.state = {
            passwordResetSuccessful: false,
            isLoading: false
        }
    }

    componentDidMount() {
        this._isMounted = true;
        document.body.classList.add('authentication-bg');
    }

    componentWillUnmount() {
        this._isMounted = false;
        document.body.classList.remove('authentication-bg');
    }

    /**
     * On error dismiss
     */
    onDismiss() {
        this.setState({ passwordResetSuccessful: false });
    }

    /**
     * Handles the submit
     */
    handleValidSubmit = (event, values) => {
        console.log(values);

        this.setState({ isLoading: true });

        // You can make actual api call to register here

        window.setTimeout(() => {
            this.setState({ isLoading: false, passwordResetSuccessful: true });
        }, 1000)
    }


    /**
     * Redirect to root
     */
    renderRedirectToRoot = () => {
        const isAuthTokenValid = isUserAuthenticated();
        if (isAuthTokenValid) {
            return <Redirect to='/' />
        }
    }

    render() {
        const isAuthTokenValid = isUserAuthenticated();
        return (
            <React.Fragment>

                {this.renderRedirectToRoot()}

                {(this._isMounted || !isAuthTokenValid) && <React.Fragment>

                    <div className="home-btn d-none d-sm-block">
                        <Link to="/"><i className="fas fa-home h2 text-dark"></i></Link>
                    </div>

                    <div className="account-pages mt-5 mb-5">
                        <Container>
                            <Row className="justify-content-center">
                                <Col md={8} lg={6} xl={5} >
                                    <div className="text-center">
                                        <Link to="/">
                                            <span><img src="images/logo-black.png" alt="" height="22" /></span>
                                        </Link>
                                    </div>
                                    <Card >
                                        <CardBody className="p-4 position-relative">
                                            { /* preloader */}
                                            {this.state.isLoading && <Loader />}

                                            <div className="text-center mb-4">
                                                <h4 className="text-uppercase mt-0 mb-3">Redefinir Senha</h4>
                                                <p className="text-muted mb-0 font-13">Entre seu email e vamos te envar uma mensagem com instruções para redefinir sua senha.</p>
                                            </div>

                                            <Alert color="success" isOpen={this.state.passwordResetSuccessful} toggle={this.onDismiss}>
                                                Enviamos uma mensagem no seu email contendo o link para resetar sua senha.
                                            </Alert>

                                            <AvForm onValidSubmit={this.handleValidSubmit}>
                                                <AvField type="email" name="email" label="Email" placeholder="Entre seu email." required />

                                                <FormGroup className="mb-0 text-center">
                                                    <Button color="primary" className="btn-block">Redefinir Senha</Button>
                                                </FormGroup>
                                            </AvForm>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>

                            <Row className="mt-1">
                                <Col className="col-12 text-center">
                                    <p className="text-muted">Voltar para <Link to="/login" className="text-dark ml-1"><b>Login</b>.</Link></p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </React.Fragment>}
            </React.Fragment>
        )
    }
}

export default connect()(ForgetPassword);