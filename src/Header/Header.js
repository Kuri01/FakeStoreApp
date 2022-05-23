import React from 'react';
import {
  Container,
  Navbar,
  Button,
  Form,
  FormControl,
  Badge,
} from 'react-bootstrap';

const Header = (props) => {
  const handleChange = (event) => {
    event.preventDefault();
    props.handleSearch(event.target.value);
  };
  return (
    <Navbar bg='light' expand='lg'>
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
          <Button variant='primary' className='mx-2'>
            Cart <Badge bg='secondary'>{props.inCart}</Badge>
            <span className='visually-hidden'>unread messages</span>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
