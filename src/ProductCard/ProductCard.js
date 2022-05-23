import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import styles from './ProductCard.module.scss';
const ProductCard = (props) => {
  const { title, image, price, description } = props.product;
  console.log(props);
  const shortDescription = description.slice(0, 250) + '...';
  const handleAdd = (event) => {
    event.preventDefault();
    props.addToCart(props.product);
  };

  return (
    <Col className='mx-1 my-3'>
      {' '}
      <Card style={{ width: '36rem', height: '55rem' }}>
        <Card.Img variant='top' src={image} className={styles.cardImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className={styles.description}>
            {description.length > 249 ? shortDescription : description}
          </Card.Text>
          <Card.Text>${price} </Card.Text>
          <Button variant='primary' onClick={handleAdd}>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
