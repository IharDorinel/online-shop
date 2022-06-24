import {Component} from "react";

import styles from './style.module.scss';

import TotalOrder from "../../molecules/TotalOrder";
import CartItem from "../../molecules/CartItem";
import {store} from "../../../store";

export default class Cart extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const content = store.getState().cart.itemsInCart

    const count = content.map(el => ({
      id: el.id,
      price: el.prices[0].amount,
      quantity: el.quantity
    }))

    const totalQuantity = count.reduce((acc, el) => el.quantity + acc, 0)

    const totalCost = ((count.reduce((acc, el) => (((el.price * el.quantity + acc))), 0)) * 1.21).toFixed(2)

    const tax = (count.reduce((acc, el) => (((el.price * el.quantity + acc))), 0) * 0.21).toFixed(2)

    return (
        <div className={styles.cartContainer}>
          <div className={styles.cartTitle}>CART</div>
                {content.map(item => (
                    <CartItem key={item.id} item={item} count={count} isCartOpen={this.props.isCartOpen}/>

                ))}
          <TotalOrder totalQuantity={totalQuantity} totalCost={totalCost} tax={tax}/>
        </div>
    )
  }
}
