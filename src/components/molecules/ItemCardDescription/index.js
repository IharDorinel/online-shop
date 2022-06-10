import {Component} from "react";

import styles from './style.module.scss';
import CardButton from "../../atoms/CardButton";

export default class ItemCardDescription extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const arr = JSON.parse(JSON.stringify(this.props.content[0]?.attributes))
    // console.log(arr
    //     .find(el => el.name = 'Size').items
    // )
    // console.log(arr
    //     .find(el => el.name = 'Color').items
    // )
    console.log(this.props.content[0].description)
    return (
        <div className={styles.ItemCardDescription}>
        <div className={styles.titleName}>{this.props.content[0].brand}</div>
        <div className={styles.titleType}>{this.props.content[0].name}</div>

          <div className={styles.paramSizeCont}>
            <div className={styles.params}>SIZE:</div>
            <div className={styles.sizeCont}>
              {/*{arr.find(el => el.id = 'Size').items.map(item => (*/}
              {/*    <div className={styles.color} key={item.value}></div>*/}

              {/*))}*/}
            </div>
          </div>

          <div className={styles.paramColorCont}>
            <div className={styles.params}>COLOR:</div>
            <div className={styles.colorCont}>
              {/*{arr.find(el => el.id = 'Color').items.map(item => (*/}
              {/*  <div className={styles.color} key={item.value}></div>*/}

              {/*))}*/}
            </div>
          </div>

          <div className={styles.paramPriceCont}>
            <div className={styles.params}>PRICE:</div>
            <div className={styles.price}>{this.props.content[0].prices[0].currency.symbol}{this.props.content[0].prices[0].amount}</div>
          </div>
          <CardButton content={this.props.content[0]}/>
          <div className={styles.description}>{this.props.content[0].description}</div>
        </div>
    )
  }
}
