import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import "../JoinUs/JoinUsPage.css";
// import Navbar from './Navbar';
import FlashMessage from 'react-flash-message';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);

      this.state = {
        message: false,
        }
      }

  render() {
    return (
            <div className="text-center">
            <div className="mt-5 ">
                <p className="h1 text-success contact-formHeader font-weight-bold">Login and continue to enjoy our unique services</p>
            </div>
        <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-6">
             <NavLink to="/lendee/login">
                      <button className="btn btn-success btn-large joinbtn">Fundees</button>
            </NavLink>
            <img className="m-3" src="/images/farmyJoin.png" alt="" />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
            <NavLink to="/fundee/login">
                      <button className="btn btn-success btn-large fleetjoinbtn">Funders</button>
            </NavLink>
            <img className="m-3" src="/images/tractyJoin.png" alt="" />
            </div>
        </div>
        <hr/>
        <div className="mb-5">
           <p className="h2 mb-3 text-success">Dont have an account ?</p>
           <NavLink to="/register">
                      <button className="btn h2 btn-success btn-large joinbtn">Join us</button>
            </NavLink>
        </div>
    </div>
    );
  }
}
