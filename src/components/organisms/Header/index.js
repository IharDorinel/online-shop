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
          <CartContainer showCartModal={this.props.showCartModal} cartModalVisible={this.props.cartModalVisible} setCart={this.props.setCart}/>
        </section>
    )
  }

}
