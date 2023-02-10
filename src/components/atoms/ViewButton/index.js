import {Component} from "react";
import styles from "./style.module.scss";


export default class ViewButton extends Component {

  handleClick = () => {
    const { setCart } = this.props
    setCart()
  }

  render() {
    return (
        <button className={styles.viewButton} onClick={this.handleClick}>VIEW BAG</button>
    )
  }
}
