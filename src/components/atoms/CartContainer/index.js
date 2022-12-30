import {Component} from "react";
import arrow from "../../../images/Vector.svg";
import cart from "../../../images/Empty Cart.svg";
import countCircle from '../../../images/Rectangle 13.svg';
import CurrencyModal from "../../molecules/CurrencyModal";
import CartModal from "../../organisms/CartModal";
import {store} from "../../../store";
import styles from "./style.module.scss";


export default class CartContainer extends Component {


  render() {

    const { currencies, currency, currSymbol, setCurrency, showCurrModal, showCartModal, currModalVisible, cartModalVisible, closeCurrModal, setCart, closeCartModal } = this.props
    const count = store.getState().cart.itemsInCart.reduce((acc, el) => el.quantity + acc, 0)

    return (
        <>
        <div className={styles.cartContainer}>
          <div className={styles.currencyContainer} onClick={showCurrModal} >
            <span>{currSymbol}</span>
            <img src={arrow} className={styles.arrowImg} alt={arrow} />
          </div >
          <div onClick={showCartModal} >
          <img src={cart} className={styles.cartImg} alt={cart} />
            <div className={styles.countCircleContainer}>
              <p className={styles.cartCount}>{count}</p>
          <img src={countCircle} className={styles.countCircle} alt={countCircle} />
            </div>
          </div>
        </div>
          {currModalVisible &&
              <CurrencyModal currencies={currencies} currency={currency} closeCurrModal={closeCurrModal} setCurrency={setCurrency}/>
          }
          {cartModalVisible &&
              <CartModal setCart={setCart} count={count} closeCartModal={closeCartModal} currency={currency} currSymbol={currSymbol}/>
          }
        </>
        )

  }

}
