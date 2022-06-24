import {Component} from "react";

import styles from './style.module.scss';
import CartButton from "../../atoms/CartButton";
import {store} from "../../../store";

export default class TotalOrder extends Component {

  render() {



    return (
       <div className={styles.totalOrderCont}>
         <hr className={styles.cartHr}/>
         <div className={styles.totalCont}>
         <div className={styles.textCont}>
           <span className={styles.totalOrderText}>Tax 21%:</span>
           <span className={styles.totalOrderTextBold}>&nbsp;&nbsp;{this.props.tax}</span>
         </div>
         <div className={styles.textCont}>
           <span className={styles.totalOrderText}>Quantity:</span>
           <span className={styles.totalOrderTextBold}>&nbsp;&nbsp;{this.props.totalQuantity}</span>
         </div>
         <div className={styles.textCont}>
           <span className={styles.totalOrderText}>Total:</span>
           <span className={styles.totalOrderTextBold}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${this.props.totalCost}</span>
         </div>
         </div>
         <CartButton/>
       </div>
    )
  }
}
