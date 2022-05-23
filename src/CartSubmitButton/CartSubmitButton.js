import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';

const CartSubmitButton = (props) => {
  const [show, setShow] = useState(false);

  const handleOrderNextOnes = (event) => {
    event.preventDefault();
    props.handleClearCart();
    setShow(false);
  };
  return (
    <>
      <Alert show={show} variant='success'>
        <Alert.Heading>Congrats!</Alert.Heading>
        <p> Your items has been succesfully ordered.</p>
        <hr />
        <div className='d-flex justify-content-end'>
          <Button onClick={handleOrderNextOnes} variant='outline-success'>
            Orderd next ones!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Order</Button>}
    </>
  );
};

export default CartSubmitButton;
