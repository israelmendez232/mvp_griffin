import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom'

import { Container, Row, Col, Card, CardBody, Label, FormGroup, Button, Alert } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';

import { loginUser } from '../../redux/actions';
import { isUserAuthenticated } from '../../services/authUtils';
import Loader from '../../global_components/Loader';

class Login extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.state = {
            username: 'test',
            password: 'test'
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
     * Handles the submit
     */
    handleValidSubmit = (event, values) => {
        this.props.loginUser(values.username, values.password, this.props.history);
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
        return (
            <React.Fragment>

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
                                    <Card>
                                        <CardBody className="p-4 position-relative">
                                            { /* prePreLoaderWidget */}
                                            {this.props.loading && <Loader />}

                                            <div className="text-center mb-4">
                                                <h4 className="text-uppercase mt-0">Entre Aqui</h4>
                                            </div>

                                            {this.props.error && <Alert color="danger" isOpen={this.props.error ? true : false}>
                                                <div>{this.props.error}</div>
                                            </Alert>}

                                            <AvForm onValidSubmit={this.handleValidSubmit}>
                                                <AvField name="username" label="Email" placeholder="Entre seu email" value={this.state.username} required />

                                                <AvGroup className="mb-3">
                                                    <Label for="password">Senha</Label>
                                                    <AvInput type="password" name="password" id="password" placeholder="Entre sua senha" value={this.state.password} required />
                                                    <AvFeedback>Isso é inválido.</AvFeedback>
                                                </AvGroup>

                                                <FormGroup>
                                                    <Button color="primary" className="btn-block">Entre Aqui</Button>
                                                </FormGroup>

                                                <p><strong>Email:</strong> test &nbsp;&nbsp; <strong>Senha:</strong> test</p>
                                            </AvForm>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>

                            <Row className="mt-1">
                                <Col className="col-12 text-center">
                                    <p><Link to="/forgot-password" className="text-muted ml-1"><i className="fa fa-lock mr-1"></i>Esqueceu sua senha?</Link></p>
                                    <p className="text-muted">Não tem uma conta? <Link to="/register" className="text-dark ml-1"><b>Registre-se Aqui</b></Link></p>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    const { user, loading, error } = state.Auth;
    return { user, loading, error };
};

export default connect(mapStateToProps, { loginUser })(Login);