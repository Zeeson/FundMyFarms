import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import "./JoinUsPage.css";
// import Navbar from './Navbar';

export default class JoinUs extends Component {
  render() {
    return (
          <div className="mb-4 text-center">
            <div className="mt-5 ">
                <p className="h1 text-success contact-formHeader font-weight-bold">Get results. Join us today</p>
                <p className="h4 text-success contact-formHeader font-weight-bold">You will never regret it.</p>
            </div>
            <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-6">
             <NavLink to="/lendee/register">
                      <button className="btn btn-success btn-large joinbtn">Fundees</button>
            </NavLink>
            <img className="m-3" src="/images/farmyJoin.png" alt="" />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
            <NavLink to="/lender/register">
                      <button className="btn btn-success btn-large fleetjoinbtn">Funders</button>
            </NavLink>
            <img className="m-3" src="/images/tractyJoin.png" alt="" />
            </div>
            </div>
            <hr/>
            <div className="mb-3">
               <p className="h3">Already have an account ?</p>
               <NavLink to="/login">
                          <button className="btn h2 btn-success btn-large joinbtn">Login</button>
                </NavLink>
            </div>

        </div>
    );
  }
}
