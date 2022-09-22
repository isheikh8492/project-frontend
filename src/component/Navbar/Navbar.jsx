import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "./Navbar.css";


export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="navbar-header">
                                <a class="navbar-brand">Health Love</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}