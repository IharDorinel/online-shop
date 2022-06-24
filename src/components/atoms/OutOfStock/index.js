import {Component} from "react";
import styles from "./style.module.scss";

export default class OutOfStock extends Component {

  render() {
    return (
        <p className={styles.outOfStock}>OUT OF STOCK</p>
    )
  }
}
