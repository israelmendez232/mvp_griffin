import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom'

import { Container, Row, Col, Card, CardBody, Label, FormGroup, Button, Alert } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';

import { registerUser } from '../../redux/actions';
import { isUserAuthenticated } from '../../services/authUtils';
import Loader from '../../global_components/Loader';

class Register extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.handleValidSubmit = this.handleValidSubmit.bind(this);
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
     * Handles the submit
     */
    handleValidSubmit = (event, values) => {
        this.props.registerUser(values.fullname, values.email, values.password);
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

    /**
     * Redirect to confirm
     */
    renderRedirectToConfirm = () => {
        return <Redirect to='/confirm' />;
    }

    render() {
        const isAuthTokenValid = isUserAuthenticated();
        return (
            <React.Fragment>

                {this.renderRedirectToRoot()}

                {Object.keys(this.props.user || {}).length > 0 && this.renderRedirectToConfirm()}

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
                                            <span><img src="/images/logo-black.png" alt="" height="22" /></span>
                                        </Link>
                                    </div>
                                    <Card>

                                        <CardBody className="p-4 position-relative">
                                            { /* preloader */}
                                            {this.props.loading && <Loader />}

                                            <div className="text-center mb-4">
                                                <h4 className="text-uppercase mt-0">Registre-se</h4>
                                            </div>

                                            {this.props.error && <Alert color="danger" isOpen={this.props.error ? true : false}>
                                                <div>{this.props.error}</div>
                                            </Alert>}

                                            <AvForm onValidSubmit={this.handleValidSubmit}>
                                                <AvField name="fullname" label="Nome Completo" placeholder="Entre seu nome" required />

                                                <AvField type="email" name="email" label="Email" placeholder="Entre seu email" required />

                                                <AvGroup>
                                                    <Label for="password">Senha</Label>
                                                    <AvInput type="password" name="password" id="password" placeholder="Enter your password" required />
                                                    <AvFeedback>Isso é inválido.</AvFeedback>
                                                </AvGroup>

                                                <FormGroup className="mt-3 mb-0 text-center">
                                                    <Button color="primary" className="btn-block">Enviar</Button>
                                                </FormGroup>
                                            </AvForm>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>

                            <Row className="mt-1">
                                <Col className="col-12 text-center">
                                    <p className="text-muted">Já tem uma conta? <Link to="/login" className="text-dark ml-1"><b>Acesse Aqui.</b></Link></p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </React.Fragment>}

            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    const { user, loading, error } = state.Auth;
    return { user, loading, error };
};

export default connect(mapStateToProps, { registerUser })(Register);