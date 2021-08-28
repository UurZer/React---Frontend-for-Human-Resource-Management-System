import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import LoggedIn from "../LoggedInLayout/LoggedIn";

export default function Navi() {
  return (
    <div class="header-area header-transparrent">
      <div class="headder-top header-sticky">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-3 col-md-2">
              <div class="logo">
                <a href="index.html">
                  <img src="assets/img/logo/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div class="col-lg-9 col-md-9">
              <div class="menu-wrapper">
                <div class="main-menu">
                  <nav class="d-none d-lg-block">
                    <ul id="navigation">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/">Find a Jobs</Link>
                      </li>
                      <li>
                        <Link to="/">About</Link>
                      </li>
                      <li>
                        <Link to="/">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="header-btn d-none f-right d-lg-block">
                  <Link className="btn head-btn1" to="/">
                    Register
                  </Link>
                  <Link className="btn head-btn2" to="/">
                    Login
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="mobile_menu d-block d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}