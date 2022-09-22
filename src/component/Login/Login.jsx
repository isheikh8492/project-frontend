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
                </div>
            </div>
        );
    }
}
