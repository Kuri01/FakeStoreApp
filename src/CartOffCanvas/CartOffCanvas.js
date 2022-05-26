import { Offcanvas } from 'react-bootstrap';
import CartProduct from '../CartProduct/CartProduct';
import CartSubmitButton from '../CartSubmitButton/CartSubmitButton';
import styles from './CartCanvas.module.scss';
const CartCanvas = (props) => {
  console.log(props.inCart);
  return (
    <Offcanvas show={props.showCart} onHide={props.handleCloseCart}>
      <Offcanvas.Header closeButton className={styles.canvasHeader}>
        <Offcanvas.Title className={styles.title}>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className={styles.container}>
        {props.inCart.length === 0 ? (
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
        {props.inCart.length === 0 ? (
          ''
        ) : (
          <CartSubmitButton handleClearCart={props.handleClearCart} />
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartCanvas;
