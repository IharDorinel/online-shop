import {Component} from "react";

import styles from './style.module.scss';

export default class CurrencyModal extends Component {

  render() {
    return (
       <ul className={styles.currencyCont}>
         <li className={styles.currencyItem}>$ USD</li>
         <li className={styles.currencyItemActive}>€ EUR</li>
         <li className={styles.currencyItem}>¥ JPY</li>
       </ul>
    )
  }
}
