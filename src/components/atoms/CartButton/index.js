import {Component} from "react";
import {deleteItemsFromCart} from "../../../store/reducers/cartReducer";
import {store} from "../../../store";
import styles from './style.module.scss';


export default class CartButton extends Component {


  handleClick = () => {
    const { closeCart } = this.props
    store.dispatch(deleteItemsFromCart())
    closeCart()
  }

  render() {
    return (
        <>
          <button className={styles.cartButton} onClick={this.handleClick}>ORDER</button>
        </>
    )
  }

}
