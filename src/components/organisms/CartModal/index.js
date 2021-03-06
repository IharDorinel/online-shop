import {Component} from "react";
import styles from "./style.module.scss";
import plus from "../Cart/images/plus-square.svg";
import minus from "../Cart/images/minus-square.svg";
import product from "../Cart/images/Product D.jpg";
import ViewButton from "../../atoms/ViewButton";
import CheckOutButton from "../../atoms/CheckOutButton";
import {store} from "../../../store";
import CartItem from "../../molecules/CartItem";


export default class CartModal extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    this.props.closeCartModal()
  }

  render() {

    const content = store.getState().cart.itemsInCart

    const count = content.map(el => ({
      id: el.id,
      price: el.prices.filter(el => el.currency.label === this.props.currency)[0]?.amount,
      symbol: el.prices.filter(el => el.currency.label === this.props.currency)[0]?.currency.symbol,
      quantity: el.quantity
    }))

    const totalCost = ((count.reduce((acc, el) => (((el.price * el.quantity + acc))), 0))* 1.21).toFixed(2)


    return (
        <>
        <div className={styles.cartModalContainer}>
          <div className={styles.cartModalTitleCont}>
            <span className={styles.cartModalTitle1}>My Bag,</span>
            <span className={styles.cartModalTitle2}>&nbsp;{this.props.count} items</span>
          </div>
          {content.map(item => (
              <CartItem key={item.id} item={item} count={count}/>
          ))}
          <div className={styles.totalCont}>
          <span>Total</span>
          <span>{count[0]?.symbol}{totalCost}</span>
          </div>
          <div className={styles.cartButtons}>
          <ViewButton setCart={this.props.setCart}/>
          <CheckOutButton closeCartModal={this.props.closeCartModal}/>
          </div>
        </div>
          <div className={styles.cartModalShadow} onClick={this.handleClick}/>
        </>
    )
  }
}
