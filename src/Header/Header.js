import React from 'react';
import {
  Container,
  Navbar,
  Button,
  Form,
  FormControl,
  Badge,
} from 'react-bootstrap';
import { useState } from 'react';
import CartOffCanvas from '../CartOffCanvas/CartOffCanvas';
import LoginOffCanvas from './../LoginCanvas/LoginOffCanvas';

const Header = (props) => {
  const [showCart, setshowCart] = useState(false);
  const [showLogin, setshowLogin] = useState(true);

  const handleCloseCart = () => setshowCart(false);
  const handleshowCart = () => setshowCart(true);

  const handleCloseLogin = () => setshowLogin(false);
  const handleshowLogin = () => setshowLogin(true);

  const handleChange = (event) => {
    event.preventDefault();
    props.handleSearch(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    handleshowCart();
  };
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container fluid>
        <Navbar.Brand href='#'>Best shop in world</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll' className='justify-content-end'>
          <Form className='justify-content-end'>
            <FormControl
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
              value={props.searchText}
              onChange={handleChange}
            />
          </Form>
          <Button variant='primary' className='mx-2' onClick={handleClick}>
            Cart <Badge bg='secondary'>{props.inCart.length}</Badge>
            <span className='visually-hidden'>unread messages</span>
          </Button>
          {props.currentUser === undefined ? (
            <Button variant='dark' className='mx-2' onClick={handleshowLogin}>
              Login
            </Button>
          ) : (
            <Button
              variant='dark'
              className='mx-2'
              onClick={props.handleLogout}
            >
              Log out
            </Button>
          )}
        </Navbar.Collapse>
        <CartOffCanvas
          showCart={showCart}
          handleCloseCart={handleCloseCart}
          inCart={props.inCart}
          handleClearCart={props.handleClearCart}
        />

        <LoginOffCanvas
          showLogin={showLogin}
          handleCloseLogin={handleCloseLogin}
          users={props.users}
          accessAs={props.accessAs}
          currentUser={props.currentUser}
          handleLogin={props.handleLogin}
        />
      </Container>
    </Navbar>
  );
};

export default Header;
