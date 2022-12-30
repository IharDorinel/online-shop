import {Component} from "react";
import styles from './style.module.scss';


export default class CurrencyItem extends Component {


  handleClick = () => {
    const { setCurrency, symbol, item, closeCurrModal } = this.props
    setCurrency(symbol, item)
    localStorage.setItem('currency', item)
    localStorage.setItem('currSymbol', symbol)
    closeCurrModal()
  }

  render() {
    const { item, symbol, currency } = this.props

    return (
        <div className={currency === item ? styles.currencyItemActive : styles.currencyItem} onClick={this.handleClick}>{symbol} {item}</div>
    )
  }
}
