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
    this.state = {
      currModalVisible: false,
      showCurrModal: this.showCurrModal.bind(this),
    }
  }

  showCurrModal = () => {
    this.setState({currModalVisible: !this.state.currModalVisible})
  }


  render() {

    const count = store.getState().cart.itemsInCart.reduce((acc, el) => el.quantity + acc, 0)

    return (
        <>
        <div className={styles.cartContainer}>
          <div className={styles.currencyContainer}>
            <img src={dollar} className={styles.dollarImg} alt={dollar} />
            <img src={arrow} className={styles.arrowImg} onClick={this.showCurrModal} alt={arrow} />
          </div >
          <div onClick={this.props.handleClick}>
          <img src={cart} className={styles.cartImg} onClick={this.props.showCartModal} alt={cart} />
            <div className={styles.countCircleContainer}>
              <p className={styles.cartCount}>{count}</p>
          <img src={countCircle} className={styles.countCircle} alt={countCircle} />
            </div>
          </div>
        </div>
          {this.state.currModalVisible &&
              <CurrencyModal/>
          }
          {this.props.cartModalVisible &&
              <CartModal setCart={this.props.setCart}/>
          }
        </>
        )

  }

}
