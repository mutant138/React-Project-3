import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import { useContext } from "react";
import CartContext from "../../store/cart-context";


const HeaderCartButton = props =>{
    
const ctx = useContext(CartContext)
let numOfItems = 0
ctx.items.forEach(item => {
 numOfItems  = numOfItems + Number(item.quantity)
})
    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {numOfItems}
            </span>
        </button>
    )
}

export default HeaderCartButton
