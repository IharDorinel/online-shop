import {Component} from "react";

import styles from './style.module.scss';

export default class CardButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <button className={styles.cardButton}>ADD TO CART</button>
    )
  }

}
