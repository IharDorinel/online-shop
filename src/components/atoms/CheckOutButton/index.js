import {Component} from "react";
import styles from "./style.module.scss";

export default class CheckOutButton extends Component {

  render() {
    return (
        <button className={styles.checkOutButton}>CHECK OUT</button>
    )
  }
}
