import {Component} from "react";
import styles from "./style.module.scss";
import dollar from "../../organisms/Header/images/$.svg";
import arrow from "../../organisms/Header/images/Vector.svg";
import cart from "../../organisms/Header/images/Empty Cart.svg";
import countCircle from './images/Rectangle 13.svg';
import CurrencyModal from "../../molecules/CurrencyModal";
import CartModal from "../../organisms/CartModal";


export default class CartContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currModalVisible: false,
      cartModalVisible: false,
      showCurrModal: this.showCurrModal.bind(this),
      showCartModal: this.showCartModal.bind(this)
    }
  }

  showCurrModal = () => {
    this.setState({currModalVisible: !this.state.currModalVisible})
  }

  showCartModal = () => {
    this.setState({cartModalVisible: !this.state.cartModalVisible})
  }


  render() {
    return (
        <>
        <div className={styles.cart_container}>
          <div className={styles.currency_container}>
            <img src={dollar} className={styles.dollarImg} alt={dollar} />
            <img src={arrow} className={styles.arrowImg} onClick={this.showCurrModal} alt={arrow} />
          </div>
          <img src={cart} className={styles.cartImg} onClick={this.showCartModal} alt={cart} />
          <img src={countCircle} className={styles.countCircle} alt={countCircle} />
        </div>
          {this.state.currModalVisible &&
              <CurrencyModal/>
          }
          {this.state.cartModalVisible &&
              <CartModal/>
          }
        </>
        )

  }

}
