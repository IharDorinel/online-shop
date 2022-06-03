import {Component} from "react";

import styles from './style.module.scss';
import CardButton from "../../atoms/CardButton";

export default class ItemCardDescription extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className={styles.ItemCardDescription}>
        <div className={styles.titleName}>Apollo</div>
        <div className={styles.titleType}>Running Short</div>

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

          <div className={styles.paramPriceCont}>
            <div className={styles.params}>PRICE:</div>
            <div className={styles.price}>$50.00</div>
          </div>
          <CardButton/>
          <div className={styles.description}>Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</div>
        </div>
    )
  }
}
