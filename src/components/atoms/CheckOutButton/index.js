import {Component} from "react";
import {store} from "../../../store";
import {deleteItemsFromCart} from "../../../store/reducers/cartReducer";
import styles from "./style.module.scss";


export default class CheckOutButton extends Component {

  handleClick = () => {
    const { closeCartModal } = this.props
    store.dispatch(deleteItemsFromCart())
    closeCartModal()
  }

  render() {
    return (
        <button className={styles.checkOutButton} onClick={this.handleClick}>CHECK OUT</button>
    )
  }
}
