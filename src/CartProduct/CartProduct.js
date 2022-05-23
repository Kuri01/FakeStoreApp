import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styles from './CartProduct.module.scss';
const CartProduct = (props) => {
  console.log(props.product);
  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <h6>{props.product.title}</h6>
        </Col>
        <Col className={styles.price}>${props.product.price}</Col>
      </Row>
    </Container>
  );
};

export default CartProduct;
