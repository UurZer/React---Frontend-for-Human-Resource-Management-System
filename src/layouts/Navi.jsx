import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
export default function Navi() {
  return (
    <div>
      <Menu >
        <Container>
        <Menu.Item  name="home">
        <Link  to="/">Home</Link>
        </Menu.Item>
          <Menu.Item name="messages" />
          <Menu.Item>
          <Link  to="/JobAdvertisementAdd">Employer SignIn</Link>
          </Menu.Item>
          <Menu.Menu position="right">
      

            <Menu.Item>
              <Button primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
