import {Component} from "react";

import styles from './style.module.scss';

import image from './images/Image.jpg';
import ItemCardDescription from "../../molecules/ItemCardDescription";


export default class ItemCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className={styles.itemCardContent}>
          <div className={styles.miniImgCont}>
            <img src={image} className={styles.miniImg} alt={image} />
            <img src={image} className={styles.miniImg} alt={image} />
            <img src={image} className={styles.miniImg} alt={image} />
          </div>
          <img src={image} className={styles.itemCardImg} alt={image} />
          <ItemCardDescription/>
        </div>
    )
  }
}
