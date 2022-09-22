import React, { Component } from "react";
import LoginImg from "../../img/login2.jpg";
import Container from "react-bootstrap/Container";
import Navbar from "../Navbar/Navbar";
import "./Login.css";

export default class Login extends Component {
    render() {
        return (
            <div class="container">
                <div class="Left">
                    <img id="login-img" src={LoginImg} alt="Login Image" />
                </div>
                <div class="Right">
                    <Navbar />
                    <div class="loginForm">
                        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
                            <form id="form-container">
                                <h5>Sign In</h5>
                                <p>
                                    <input type="text" id="username" placeholder="username" />
                                </p>
                                <p>
                                    <input type="password" id="password" placeholder="password" />
                                </p>
                                <p>
                                    <button id="submitButton" type="button">Se connecter</button>
                                </p>
                            </form>
                            <div className="alert alert-success mt-2" role="alert">
                            </div>
                            <div className="registerMessage">
                                <span>Don't have an account? </span>
                                <span className="loginText">Register</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
