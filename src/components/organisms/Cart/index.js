import {Component} from "react";

import styles from './style.module.scss';

import plus from './images/plus-square.svg';
import minus from './images/minus-square.svg';
import product from './images/Product D.jpg';
import leftArrow from './images/Group 1417.svg';
import rightArrow from './images/Group 1418.svg';
import TotalOrder from "../../molecules/TotalOrder";

export default class Cart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className={styles.cartContainer}>
          <div className={styles.cartTitle}>CART</div>
          <div className={styles.cartItem}>
            <hr className={styles.cartHr}/>
            <div className={styles.cartContent}>
            <div className={styles.cartItemDescr}>
              <div className={styles.cartItemTitle}>Apollo</div>
              <div className={styles.cartItemType}>Running Short</div>
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
              <img src={plus} alt={plus} />
              <p>1</p>
              <img src={minus} alt={minus} />
              </div>
              <img src={product} className={styles.cartImg} alt={product} />
              <div className={styles.arrowCont}>
                <img src={leftArrow} className={styles.arrow} alt={leftArrow} />
                <img src={rightArrow} className={styles.arrow} alt={rightArrow} />
              </div>
            </div>
            </div>
          </div>
          <TotalOrder/>
        </div>
    )
  }
}
