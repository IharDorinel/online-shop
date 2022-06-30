import {Component} from "react";

import styles from './style.module.scss';
import {CardButton} from "../../atoms/CardButton";


export default class ItemCardDescription extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSize: '',
      activeColor: '',
    }
  }

  handleSizeClick = (value) => {
    this.setState({activeSize: value})
  }

  handleColorClick = (value) => {
    this.setState({activeColor: value})
  }

  render() {

    console.log(this.props.content[0]?.attributes)
    const arrSize = this.props.content[0]?.attributes.find(elem => elem.id === 'Size')

    const arrColor = this.props.content[0]?.attributes.find(elem => elem.id === 'Color')

    const currentCurrency = this.props.content[0]?.prices.filter(el => el.currency.label === this.props.currency)

    return (
        <div className={styles.ItemCardDescription}>
        <div className={styles.titleName}>{this.props.content[0].brand}</div>
        <div className={styles.titleType}>{this.props.content[0].name}</div>

          {arrSize &&
          <div className={styles.paramSizeCont}>
            <div className={styles.params}>SIZE:</div>
            <div className={styles.sizeCont}>
              {arrSize?.items.map(item => (
               <div className={this.state.activeSize === item.id ? styles.activeSize : styles.size} key={item.value} onClick={() => this.handleSizeClick(item.id)}>{item.value}</div>
              ))}
            </div>
          </div>
            }
          {arrColor &&
              <div className={styles.paramColorCont}>
                <div className={styles.params}>COLOR:</div>
                <div className={styles.colorCont}>
                  {arrColor?.items.map(item => {
                  return <div className={this.state.activeColor === item.id ? styles.activeColor : styles.color} style={{backgroundColor: item.value}} key={item.value}
                              onClick={() => this.handleColorClick(item.id)}></div>
                })}
                </div>
              </div>
          }

          <div className={styles.paramPriceCont}>
            <div className={styles.params}>PRICE:</div>
            <div className={styles.price}>{currentCurrency[0].currency.symbol}{currentCurrency[0].amount}</div>
          </div>
          <CardButton content={this.props.content[0]}/>
          <div dangerouslySetInnerHTML={{__html: this.props.content[0].description}} className={styles.description}/>
        </div>
    )
  }
}
