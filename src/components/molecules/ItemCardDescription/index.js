import {Component} from "react";
import {CardButton} from "../../atoms/CardButton";
import {cardDescription} from "../../../utils/constants";
import styles from './style.module.scss';


export default class ItemCardDescription extends Component {


  handleSizeClick = (value) => {
    const { setActiveSize } = this.props
    setActiveSize(value)
  }

  handleColorClick = (value) => {
    const { setActiveColor } = this.props
    setActiveColor(value)
  }

  handleCapClick = (value) => {
    const { setActiveCapacity } = this.props
    setActiveCapacity(value)
  }

  handleUSBClick = (value) => {
    const { setActiveUSB } = this.props
    setActiveUSB(value)
  }

  handleIDClick = (value) => {
    const { setActiveID } = this.props
    setActiveID(value)
  }

  render() {
    const { content, currency, activeSize, activeColor, activeCapacity, activeUSB, activeID } = this.props


    const arrContent = content || []

    const arrSize = arrContent[0]?.attributes?.find(elem => elem?.id === cardDescription.size)

    const arrColor = arrContent[0]?.attributes?.find(elem => elem?.id === cardDescription.color)

    const arrCapacity = arrContent[0]?.attributes?.find(elem => elem?.id === cardDescription.capacity)

    const arrUSB = arrContent[0]?.attributes?.find(elem => elem?.id === cardDescription.usb)

    const arrID = arrContent[0]?.attributes?.find(elem => elem?.id === cardDescription.id)

    const currentCurrency = arrContent[0]?.prices.filter(el => el.currency.label === currency)

    return (
        <div className={styles.ItemCardDescription}>
        <div className={styles.titleName}>{content[0].brand}</div>
        <div className={styles.titleType}>{content[0].name}</div>

          <div className={styles.attrCont}>
            {arrSize &&
            <div className={styles.paramAttrCont}>
              <div className={styles.params}>{cardDescription.size}:</div>
              <div className={styles.attrCont}>
                {arrSize?.items.map(item => (
                    <div className={activeSize === item.id ? styles.activeAttr : styles.attr} key={item.value} onClick={() => this.handleSizeClick(item.id)}>{item.value}</div>
                ))}
              </div>
            </div>
            }
            {arrColor &&
            <div className={styles.paramColorCont}>
              <div className={styles.params}>{cardDescription.color}:</div>
              <div className={styles.colorCont}>
                {arrColor?.items.map(item => {
                  return <div className={activeColor === item.id ? styles.activeColor : styles.color} style={{backgroundColor: item.value}} key={item.value}
                              onClick={() => this.handleColorClick(item.id)}></div>
                })}
              </div>
            </div>
            }
            {arrCapacity &&
            <div className={styles.paramAttrCont}>
              <div className={styles.params}>{cardDescription.capacity}:</div>
              <div className={styles.attrCont}>
                {arrCapacity?.items.map(item => {
                  return <div className={activeCapacity === item.id ? styles.activeAttr : styles.attr} key={item.id}
                              onClick={() => this.handleCapClick(item.id)}>{item.value}</div>
                })}
              </div>
            </div>
            }
            {arrUSB &&
            <div className={styles.paramAttrCont}>
              <div className={styles.params}>{cardDescription.usb}:</div>
              <div className={styles.attrCont}>
                {arrUSB?.items.map(item => {
                  return <div className={activeUSB === item.id ? styles.activeAttr : styles.attr} key={item.id}
                              onClick={() => this.handleUSBClick(item.id)}
                  >{item.value}</div>
                })}
              </div>
            </div>
            }
            {arrID &&
            <div className={styles.paramAttrCont}>
              <div className={styles.params}>{cardDescription.id}:</div>
              <div className={styles.attrCont}>
                {arrID?.items.map(item => {
                  return <div className={activeID === item.id ? styles.activeAttr : styles.attr} key={item.id}
                              onClick={() => this.handleIDClick(item.id)}
                  >{item.value}</div>
                })}
              </div>
            </div>
            }

            <div className={styles.paramPriceCont}>
              <div className={styles.params}>PRICE:</div>
              <div className={styles.price}>{currentCurrency[0].currency.symbol}{currentCurrency[0].amount}</div>
            </div>
          </div>

          <CardButton content={content[0]} activeSize={activeSize} activeColor={activeColor} activeCapacity={activeCapacity} activeUSB={activeUSB} activeID={activeID}/>
          <div dangerouslySetInnerHTML={{__html: content[0].description}} className={styles.description}/>
        </div>
    )
  }
}
