import { Offcanvas } from 'react-bootstrap';
import CartProduct from '../CartProduct/CartProduct';
import CartSubmitButton from '../CartSubmitButton/CartSubmitButton';
import styles from './CartCanvas.module.scss';
import { Alert } from 'react-bootstrap';
const CartCanvas = (props) => {
  console.log(props.inCart);
  return (
    <Offcanvas show={props.showCart} onHide={props.handleCloseCart}>
      <Offcanvas.Header closeButton className={styles.canvasHeader}>
        <Offcanvas.Title className={styles.title}>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className={styles.container}>
        {props.inCart.length === 0 && props.cartAccess !== false ? (
          <div>
            <h4>Your cart is empty!</h4>
            <p>
              Add some items by clicking "Add to cart" button on each product
              cards
            </p>
          </div>
        ) : (
          props.inCart.map((product) => <CartProduct product={product} />)
        )}
        {props.inCart.length === 0 || props.cartAccess !== true ? (
          ''
        ) : (
          <CartSubmitButton handleClearCart={props.handleClearCart} />
        )}
        {props.cartAccess !== true ? (
          <Alert variant='danger'>You don't have access to the cart!</Alert>
        ) : (
          ''
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartCanvas;
