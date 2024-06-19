import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const totalAmount = ctx.items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <li key={item.id} className={classes["cart-item"]}>
          <div>
            <h2>{item.name}</h2>
            <div className={classes.summary}>
              <span className={classes.price}>${item.price.toFixed(2)}</span>
              <span className={classes.amount}>x {item.quantity}</span>
            </div>
          </div>
          <div className={classes.actions}>
            <button onClick={() => ctx.decreaseQuantity(item.id)}>-</button>
            <button onClick={() => ctx.increaseQuantity(item.id)}>+</button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
