import {Component} from "react";

import styles from './style.module.scss';

import logo from './images/a-logo.svg';
import Categories from "../../atoms/Categories";
import CartContainer from "../../atoms/CartContainer";

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <section className={styles.header}>
          <Categories/>
          <img src={logo} className={styles.headerLogo} alt={logo} />
          <CartContainer currencies={this.props.currencies} currency={this.props.currency} currModalVisible={this.props.currModalVisible}
                         setCurrency={this.props.setCurrency} showCartModal={this.props.showCartModal} showCurrModal={this.props.showCurrModal}
                         cartModalVisible={this.props.cartModalVisible} closeCurrModal={this.props.closeCurrModal}
                         closeCartModal={this.props.closeCartModal} setCart={this.props.setCart}/>
        </section>
    )
  }

}
