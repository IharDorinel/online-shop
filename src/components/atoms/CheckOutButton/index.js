import {Component} from "react";
import styles from "./style.module.scss";
import {store} from "../../../store";
import {deleteItemsFromCart} from "../../../store/reducers/cartReducer";

export default class CheckOutButton extends Component {

  handleClick = () => {
    store.dispatch(deleteItemsFromCart())
    this.props.closeCartModal()
  }

  render() {
    return (
        <button className={styles.checkOutButton} onClick={this.handleClick}>CHECK OUT</button>
    )
  }
}
