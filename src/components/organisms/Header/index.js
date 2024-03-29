import {Component} from "react";
import logo from '../../../images/a-logo.svg';
import Categories from "../../atoms/Categories";
import CartContainer from "../../atoms/CartContainer";
import styles from './style.module.scss';


export default class Header extends Component {



  render() {
      const { content, categories, currency, currencies, currSymbol, currModalVisible, setStartPage, setCurrency, setCategory, showCartModal, showCurrModal, cartModalVisible, closeCurrModal, closeCartModal, setCart} = this.props

      return (
        <section className={styles.header}>
          <Categories categories={categories} setCategory={setCategory}/>
            <a href="/">
          <img src={logo} className={styles.headerLogo} onClick={setStartPage} alt={logo} />
            </a>
          <CartContainer content={content} currencies={currencies} currency={currency} currSymbol={currSymbol} currModalVisible={currModalVisible}
                         setCurrency={setCurrency} showCartModal={showCartModal} showCurrModal={showCurrModal}
                         cartModalVisible={cartModalVisible} closeCurrModal={closeCurrModal}
                         closeCartModal={closeCartModal} setCart={setCart}/>
        </section>
    )
  }

}
