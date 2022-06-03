import {Component} from "react";
import styles from "./style.module.scss";


export default class Categories extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className={styles.category_container}>
          <p className={styles.categoryItem}>WOMEN</p>
          <p className={styles.categoryItem}>MEN</p>
          <p className={styles.categoryItem}>KIDS</p>
        </div>
    )
  }

}
