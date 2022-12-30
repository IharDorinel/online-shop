import {Component} from "react";
import TotalOrder from "../../molecules/TotalOrder";
import CartItem from "../../molecules/CartItem";
import {store} from "../../../store";
import arrow from "../../../images/arrow.png";
import styles from './style.module.scss';


export default class Cart extends Component {

  render() {

    const content = store.getState().cart.itemsInCart

    const { currency, currSymbol, isCartOpen, closeCart} = this.props

    const count = content.map(el => ({
      id: el.id,
      price: el.prices.filter(el => el.currency.label === currency)[0].amount,
      symbol: el.prices.filter(el => el.currency.label === currency)[0].currency.symbol,
      quantity: el.quantity
    }))

    const totalQuantity = count.reduce((acc, el) => el.quantity + acc, 0)

    const totalCost = ((count.reduce((acc, el) => (((el.price * el.quantity + acc))), 0)) * 1.21).toFixed(2)

    const tax = (count.reduce((acc, el) => (((el.price * el.quantity + acc))), 0) * 0.21).toFixed(2)


    return (
        <div className={styles.cartContainer}>
          <a href="/">
            <img src={arrow} className={styles.cartBack} alt={arrow}/>
          </a>
          <div className={styles.cartTitle}>CART</div>
                {content.map(item => (
                    <CartItem key={item.id} item={item} currency={currency} currSymbol={currSymbol} count={count} isCartOpen={isCartOpen}/>

                ))}
          <TotalOrder totalQuantity={totalQuantity} totalCost={totalCost} tax={tax} symbol={count[0]?.symbol} closeCart={closeCart}/>
        </div>
    )
  }
}
