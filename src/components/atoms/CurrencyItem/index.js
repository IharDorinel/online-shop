import {Component} from "react";

import styles from './style.module.scss';

export default class CurrencyItem extends Component {


  handleClick = () => {
    this.props.setCurrency(this.props.item)
    localStorage.setItem('currency', this.props.item)
    this.props.closeCurrModal()
  }

  render() {

    return (
        <div className={this.props.currency === this.props.item ? styles.currencyItemActive : styles.currencyItem} onClick={this.handleClick}>{this.props.item}</div>
    )
  }
}
