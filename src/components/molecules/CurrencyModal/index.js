import {Component} from "react";

import styles from './style.module.scss';
import CurrencyItem from "../../atoms/CurrencyItem";

export default class CurrencyModal extends Component {


  render() {
    return (
       <div className={styles.currencyCont}>
         {this.props.currencies.map(el => (
             <CurrencyItem item={el.label} currency={this.props.currency} closeCurrModal={this.props.closeCurrModal} key={el.symbol} setCurrency={this.props.setCurrency}/>
             ))
         }
       </div>
    )
  }
}
