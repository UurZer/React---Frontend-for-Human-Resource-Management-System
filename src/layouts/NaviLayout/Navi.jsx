import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import LoggedIn from "../LoggedInLayout/LoggedIn";
export default function Navi() {
  return (
    <div>
      <Menu>
        <Container>
          <Menu.Item name="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item name="messages" />
          <Menu.Item>
            <Link to="/JobAdvertisementAdd">Employer SignIn</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/Home">Employer</Link>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Link to="/register/seeker">Sign Up</Link>
            </Menu.Item>
            <Menu.Item>
              <span className="my-auto">
                {LoggedIn ? (
                  <LoggedIn />
                ) : (
                  <button className="btn btn-block btn-light font-weight-bold my-auto btn-sm border btn-main shadow">
                    <FontAwesomeIcon icon={faUser} /> Giriş Yap
                  </button>
                )}
              </span>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
