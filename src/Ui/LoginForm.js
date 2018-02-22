import React, { Component } from 'react';
import App from '../App';
import Home from '../container/Home';
import { hashHistory } from 'react-router/lib';

class LoginForm extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

        this.state = {
            username: undefined,
            email: undefined,
            password: undefined,
            signUp: {
                success: undefined,
                message: undefined
            },
            logged: false,
            users: undefined,
            error: undefined
        }
    }

    static displayName = 'Ui-LoginForm'

    componentDidMount() {
        this.verifytoken();
    }

    verifytoken() {
        let url = 'http://localhost:3001/auth/verifytoken';
        let token = localStorage.getItem('DD101_TOKEN');

        if (!token) {
            this.setState({
                error: 'No token defined. Please Login.'
            })
            return
        }

        fetch(url, {
            method: "GET",
            body: undefined,
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`
            }
        }).then(response => response.json())
            .then(responseJson => {
                if (responseJson.success) {
                    this.setState({
                        logged: responseJson.success,
                        error: undefined
                    })
                    this.loadUsers()
                } else {
                    this.setState({
                        error: responseJson.error.message
                    })
                }
            }).catch(err => this.setState({ error: err }));
    }

    loadUsers() {
        let url = 'http://localhost:3001/users/listusers';
        let token = localStorage.getItem('DD101_TOKEN');
        if (!token) {
            this.setState({
                error: 'No token defined. Please Login.'
            })
            return
        }

        fetch(url, {
            method: "POST",
            body: undefined,
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`
            }
        }).then(response => response.json())
            .then(responseJson => {
                this.setState({
                    users: responseJson.data,
                    error: undefined
                })
            }).catch(err => this.setState({ error: err }));
    }


    showAuthorizedArea() {
        if (this.state.logged) {
            return (
                <div>
                    {Home}
                </div>
            )
        }
    }

    /*
    Register Form area
    */

    handleSignUpSubmit(e) {
        e.preventDefault();
        let dataToSend = {
            userData: {
                username: this.refs.username.value,
                email: this.refs.email.value,
                password: this.refs.password.value
            }
        };


        let url = 'http://localhost:3001/users/register';

        fetch(url, {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(responseJson => {
                console.log(responseJson)
                if (responseJson.success) {
                    this.setState({
                        signUp: {
                            success: true,
                            message: responseJson.message
                        }
                    });
                } else {
                    this.setState({
                        signUp: {
                            success: false,
                            message: responseJson.message
                        }
                    });
                }
            }).catch(err => console.log('Error ', err));

        this.refs.username.value = '';
        this.refs.email.value = '';
        this.refs.password.value = '';

    }



    /*
    Login Form area
    */

    handleSubmit(e) {
        e.preventDefault();
        let dataToSend = {
            userData: {
                email: this.state.email,
                password: this.state.password
            }
        };
        console.log(JSON.stringify(dataToSend))
        let url = 'http://localhost:3001/auth/login';

        fetch(url, {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(responseJson => {
                if (responseJson.success) {
                    localStorage.setItem('DD101_TOKEN', responseJson.token);
                    this.setState({
                        logged: true,
                        error: undefined
                    })
                    this.loadUsers()
                }
            }).catch(err => this.setState({ error: err }));

            e.target.reset()
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    render() {
        return (
            <div className="container">
                {/* Begin Modal Register Form */}
                <div className="modal fade" id="signupModel" tabIndex="-1" role="dialog" aria-labelledby="signupModelLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="signupModelLabel">Formulário de Registro</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                {
                                    this.state.signUp.success !== undefined ? (
                                        this.state.signUp.success === true ?
                                            <div className="alert alert-success" role="alert">
                                                {this.state.signUp.message}
                                            </div>
                                            :
                                            <div className="alert alert-danger" role="alert">
                                                {this.state.signUp.message}
                                            </div>
                                    ) : ''
                                }

                              
                                <form onSubmit={this.handleSignUpSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="recipient-name" className="form-control-label">Name</label>
                                        <input type="text" ref="username" className="form-control" id="username" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-control-label">Email</label>
                                        <input type="email" ref="email" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="form-control-label">Password:</label>
                                        <input type="password" ref="password" className="form-control" id="password" />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                      </div>
                   </div>
             
                {/* Begin Modal Register Form */}

                {/* Begin Modal List Authenticad List  */}

                <div className="modal fade" id="authenticatedModal" tabIndex="-1" role="dialog" aria-labelledby="authenticatedModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="authenticatedModalLabel">Only Authenticated Users can see this list!</h5>
                            </div>
                            <div className="modal-body">

                                <div className="list-group">

                                    {
                                        /**
                                         * List the users when authenticated
                                         */
                                        (this.state.users !== undefined && this.error === undefined) ? (
                                            this.state.users.map((user) => (
                                                <a key={user.email} href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                                    <div className="d-flex w-100 justify-content-between">
                                                        <h5 className="mb-1">Name: {user.name}</h5>
                                                        <small>20/02/2018</small>
                                                    </div>
                                                    <p className="mb-1">E-mail: {user.email}</p>
                                                    <small>Password (Should never do that)</small>
                                                </a>
                                            ))
                                        ) : this.state.error
                                    }


                                  </div>

                                </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary btn-block" data-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>

                {/* End Modal List Authenticad List */}


                {/* Begin Login Form */}
                <div className="row" style={{ paddingTop: '50px', marginBottom:'50px' }}>
                    <div className="col">
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: '20rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img className="card-img-right" src="http://ap.imagensbrasil.org/images/2018/02/20/Login2.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Endereço de Email</label>
                                        <input type="email" onChange={this.handleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        <small id="emailHelp" className="form-text text-muted">Email protegido.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Senha de acesso</label>
                                        <input type="password" onChange={this.handlePasswordChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" />
                                            <span>Lembrar-me</span>
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                                    <small id="emailHelp" className="form-text text-muted">Se você não está registrado.. <a href="#" data-toggle="modal" data-target="#signupModel" data-whatever="@mdo" >Registre-se</a></small>
                                    <br />
                                </form>


                            </div>
                        </div>

                    </div>
                    <div className="col">
                    </div>
                </div>
                {/* End Login Form */}
            </div>
        );
    }
}
export default LoginForm;