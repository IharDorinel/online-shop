import {Component} from "react";
import styles from "./style.module.scss";
import dollar from "../../organisms/Header/images/$.svg";
import arrow from "../../organisms/Header/images/Vector.svg";
import cart from "../../organisms/Header/images/Empty Cart.svg";
import countCircle from './images/Rectangle 13.svg';
import CurrencyModal from "../../molecules/CurrencyModal";
import CartModal from "../../organisms/CartModal";
import {store} from "../../../store";


export default class CartContainer extends Component {
  constructor(props) {
    super(props)
  }


  render() {

    const count = store.getState().cart.itemsInCart.reduce((acc, el) => el.quantity + acc, 0)

    console.log(count)
    return (
        <>
        <div className={styles.cartContainer}>
          <div className={styles.currencyContainer} onClick={this.props.showCurrModal} >
            <img src={dollar} className={styles.dollarImg} alt={dollar} />
            <img src={arrow} className={styles.arrowImg} alt={arrow} />
          </div >
          <div onClick={this.props.showCartModal} >
          <img src={cart} className={styles.cartImg} alt={cart} />
            <div className={styles.countCircleContainer}>
              <p className={styles.cartCount}>{count}</p>
          <img src={countCircle} className={styles.countCircle} alt={countCircle} />
            </div>
          </div>
        </div>
          {this.props.currModalVisible &&
              <CurrencyModal currencies={this.props.currencies} currency={this.props.currency} closeCurrModal={this.props.closeCurrModal} setCurrency={this.props.setCurrency}/>
          }
          {this.props.cartModalVisible &&
              <CartModal setCart={this.props.setCart} count={count} closeCartModal={this.props.closeCartModal} currency={this.props.currency}/>
          }
        </>
        )

  }

}
