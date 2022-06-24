import {Component} from "react";
import styles from "./style.module.scss";

export default class ViewButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      handleClick: this.handleClick.bind(this)
    }
  }

  handleClick = () => {
    this.props.setCart()
  }

  render() {
    return (
        <button className={styles.viewButton} onClick={this.handleClick}>VIEW BAG</button>
    )
  }
}
