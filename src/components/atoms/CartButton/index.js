import {Component} from "react";

import styles from './style.module.scss';
import {deleteItemsFromCart} from "../../../store/reducers/cartReducer";
import {store} from "../../../store";

export default class CartButton extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    store.dispatch(deleteItemsFromCart())
    this.props.closeCart()
  }

  render() {
    return (
        <>
          <button className={styles.cartButton} onClick={this.handleClick}>ORDER</button>
        </>

    )
  }

}
