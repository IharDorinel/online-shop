import {Component} from "react";
import ViewButton from "../../atoms/ViewButton";
import CheckOutButton from "../../atoms/CheckOutButton";
import CartItem from "../../molecules/CartItem";
import styles from "./style.module.scss";


export default class CartModal extends Component {


  handleClick = () => {
    const { closeCartModal } = this.props
    closeCartModal()
  }

  render() {

    const {content, currency, count, currSymbol, setCart, closeCartModal } = this.props

    const countNum = content.map(el => ({
      id: el.id,
      price: el.prices.filter(el => el.currency.label === currency)[0]?.amount,
      symbol: el.prices.filter(el => el.currency.label === currency)[0]?.currency.symbol,
      quantity: el.quantity,
      activeSize: el.activeSize,
      activeColor: el.activeColor,
      activeCapacity: el.activeCapacity,
      activeUSB: el.activeUSB,
      activeID: el.activeID
    }))

    const totalCost = ((countNum.reduce((acc, el) => (((el.price * el.quantity + acc))), 0))* 1.21).toFixed(2)


    return (
        <>
        <div className={styles.cartModalContainer}>
          <div className={styles.cartModalTitleCont}>
            <span className={styles.cartModalTitle1}>My Bag,</span>
            <span className={styles.cartModalTitle2}>&nbsp;{count} items</span>
          </div>
          {content.map(item => (
              <CartItem key={item.id} item={item} currency={currency} count={countNum} currSymbol={currSymbol} />
          ))}
          <div className={styles.totalCont}>
          <span>Total</span>
          <span>{currSymbol}{totalCost}</span>
          </div>
          <div className={styles.cartButtons}>
          <ViewButton setCart={setCart}/>
          <CheckOutButton closeCartModal={closeCartModal}/>
          </div>
        </div>
          <div className={styles.cartModalShadow} onClick={this.handleClick}/>
        </>
    )
  }
}
