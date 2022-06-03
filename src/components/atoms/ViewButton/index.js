import {Component} from "react";
import styles from "./style.module.scss";

export default class ViewButton extends Component {

  render() {
    return (
        <button className={styles.viewButton}>VIEW BAG</button>
    )
  }
}
