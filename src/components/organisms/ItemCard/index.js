import {Component} from "react";

import styles from './style.module.scss';

import image from './images/Image.jpg';
import ItemCardDescription from "../../molecules/ItemCardDescription";


export default class ItemCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.item)
    return (
        <div className={styles.itemCardContent}>
          <div className={styles.miniImgCont}>
            {this.props.item[0]?.gallery?.map(item => (
            <img src={item} key={item} className={styles.miniImg} alt={image} />
                ))}
          </div>
          <img src={this.props.item[0].gallery[0]} className={styles.itemCardImg} alt={image} />
          <ItemCardDescription content={this.props.item}/></div>
    )
  }
}
