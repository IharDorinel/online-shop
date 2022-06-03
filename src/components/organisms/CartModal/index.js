import {Component} from "react";
import styles from "./style.module.scss";
import plus from "../Cart/images/plus-square.svg";
import minus from "../Cart/images/minus-square.svg";
import product from "../Cart/images/Product D.jpg";
import ViewButton from "../../atoms/ViewButton";
import CheckOutButton from "../../atoms/CheckOutButton";


export default class CartModal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className={styles.cartModalContainer}>
          <div className={styles.cartModalTitleCont}>
            <span className={styles.cartModalTitle1}>My Bag,</span>
            <span className={styles.cartModalTitle2}>&nbsp;3 items</span>
          </div>
          <div className={styles.cartItem}>
            <div className={styles.cartContent}>
              <div className={styles.cartItemDescr}>
                <div className={styles.cartItemTitle}>Apollo</div>
                <div className={styles.cartItemTitle}>Running Short</div>
                <div className={styles.cartItemPrice}>$50.00</div>
                <div className={styles.paramSizeCont}>
                  <div className={styles.params}>SIZE:</div>
                  <div className={styles.sizeCont}>
                    <div className={styles.size}>XS</div>
                    <div className={styles.size}>S</div>
                    <div className={styles.size}>M</div>
                    <div className={styles.size}>L</div>
                  </div>
                </div>
                <div className={styles.paramColorCont}>
                  <div className={styles.params}>COLOR:</div>
                  <div className={styles.colorCont}>
                    <div className={styles.color}></div>
                    <div className={styles.color}></div>
                    <div className={styles.color}></div>
                  </div>
                </div>
              </div>

              <div className={styles.countImageCont}>
                <div className={styles.countCont}>
                  <img src={plus} className={styles.cartModalPlusMinus} alt={plus} />
                  <p>1</p>
                  <img src={minus} className={styles.cartModalPlusMinus} alt={minus} />
                </div>
                <img src={product} className={styles.cartImg} alt={product} />
              </div>
            </div>
          </div>
          <div className={styles.totalCont}>
          <span>Total</span>
          <span>$200.00</span>
          </div>
          <div className={styles.cartButtons}>
          <ViewButton/>
          <CheckOutButton/>
          </div>
        </div>
    )
  }
}
