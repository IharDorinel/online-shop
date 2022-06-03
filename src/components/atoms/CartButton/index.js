import {Component} from "react";

import styles from './style.module.scss';

export default class CartButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <>
          <button className={styles.cartButton}>ORDER</button>
        </>

    )
  }

}
