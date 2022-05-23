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

const Header = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    event.preventDefault();
    props.handleSearch(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    handleShow();
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
        </Navbar.Collapse>
        <CartOffCanvas
          show={show}
          handleClose={handleClose}
          inCart={props.inCart}
          handleClearCart={props.handleClearCart}
        />
      </Container>
    </Navbar>
  );
};

export default Header;
