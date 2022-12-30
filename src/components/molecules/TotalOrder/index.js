import {Component} from "react";
import CartButton from "../../atoms/CartButton";
import styles from './style.module.scss';


export default class TotalOrder extends Component {

  render() {
      const { tax, symbol, totalQuantity, totalCost, closeCart} = this.props

    return (
       <div className={styles.totalOrderCont}>
         <hr className={styles.cartHr}/>
         <div className={styles.totalCont}>
         <div className={styles.textCont}>
           <span className={styles.totalOrderText}>Tax 21%:</span>
           <span className={styles.totalOrderTextBold}>&nbsp;&nbsp;{tax}</span>
         </div>
         <div className={styles.textCont}>
           <span className={styles.totalOrderText}>Quantity:</span>
           <span className={styles.totalOrderTextBold}>&nbsp;&nbsp;{totalQuantity}</span>
         </div>
         <div className={styles.textCont}>
           <span className={styles.totalOrderText}>Total:</span>
           <span className={styles.totalOrderTextBold}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{symbol}{totalCost}</span>
         </div>
         </div>
         <CartButton closeCart={closeCart}/>
       </div>
    )
  }
}
