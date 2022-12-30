import {Component} from "react";
import CurrencyItem from "../../atoms/CurrencyItem";
import styles from './style.module.scss';


export default class CurrencyModal extends Component {


  render() {
      const { currencies, currency, closeCurrModal, setCurrency } = this.props

    return (
       <div className={styles.currencyCont}>
         {currencies.map(el => (
             <CurrencyItem item={el.label} currency={currency} closeCurrModal={closeCurrModal} key={el.symbol} symbol={el.symbol} setCurrency={setCurrency}/>
             ))
         }
       </div>
    )
  }
}
