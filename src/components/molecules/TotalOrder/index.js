import {Component} from "react";

import styles from './style.module.scss';
import CartButton from "../../atoms/CartButton";

export default class TotalOrder extends Component {

  render() {
    return (
       <div className={styles.totalOrderCont}>
         <hr className={styles.cartHr}/>
         <div className={styles.totalCont}>
         <div className={styles.textCont}>
           <span className={styles.totalOrderText}>Tax 21%:</span>
           <span className={styles.totalOrderTextBold}>&nbsp;&nbsp;$42.00</span>
         </div>
         <div className={styles.textCont}>
           <span className={styles.totalOrderText}>Quantity:</span>
           <span className={styles.totalOrderTextBold}>&nbsp;&nbsp;3</span>
         </div>
         <div className={styles.textCont}>
           <span className={styles.totalOrderText}>Total:</span>
           <span className={styles.totalOrderTextBold}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$200.00</span>
         </div>
         </div>
         <CartButton/>
       </div>
    )
  }
}
