import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import LoginPage from '../LoginPage/LoginPage';

const LoginOffCanvas = (props) => {
  return (
    <Offcanvas
      show={props.showLogin}
      onHide={props.handleCloseLogin}
      placement='end'
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Sign in</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <LoginPage
          users={props.users}
          handleCloseLogin={props.handleCloseLogin}
          handleLogin={props.handleLogin}
        />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default LoginOffCanvas;
