import {Component} from "react";
import {CardButton} from "../../atoms/CardButton";
import {cardDescription} from "../../../utils/constants";
import styles from './style.module.scss';


export default class ItemCardDescription extends Component {


  handleSizeClick = (value) => {
    const {content, setActiveSize } = this.props
    if(content.inStock) {
    setActiveSize(value)
      localStorage.setItem('size', value)
  }
  }

  handleColorClick = (value) => {
    const {content, setActiveColor } = this.props
    if(content.inStock) {
      setActiveColor(value)
      localStorage.setItem('color', value)
    }
  }

  handleCapClick = (value) => {
    const {content, setActiveCapacity } = this.props
    if(content.inStock) {
    setActiveCapacity(value)
      localStorage.setItem('capacity', value)
    }
  }

  handleUSBClick = (value) => {
    const {content, setActiveUSB } = this.props
    if(content.inStock) {
    setActiveUSB(value)
      localStorage.setItem('USB', value)
    }
  }

  handleIDClick = (value) => {
    const {content, setActiveID } = this.props
    if(content.inStock) {
    setActiveID(value)
      localStorage.setItem('attrID', value)
    }
  }

  componentDidMount() {
    const { content, setActiveSize, setActiveColor, setActiveCapacity, setActiveUSB, setActiveID } = this.props
    const arrContent = content || []

    if(content.inStock) {
      const arrSize = arrContent?.attributes?.find(elem => elem?.id === cardDescription.size)
      if (arrSize) {
        if (localStorage.getItem('size')) {
          setActiveSize(localStorage.getItem('size'))
        } else {
          const defaultValue = content.attributes.find(el => el.id === cardDescription.size).items[0].value
          setActiveSize(defaultValue)
        }
      }

      const arrColor = arrContent?.attributes?.find(elem => elem?.id === cardDescription.color)
      if (arrColor) {
        if (localStorage.getItem('color')) {
          setActiveColor(localStorage.getItem('color'))
        } else {
          const defaultValue = content.attributes.find(el => el.id === cardDescription.color).items[0].displayValue
          setActiveColor(defaultValue)
        }
      }

      const arrCapacity = arrContent?.attributes?.find(elem => elem?.id === cardDescription.capacity)
      if (arrCapacity) {
        if (localStorage.getItem('capacity')) {
          setActiveCapacity(localStorage.getItem('capacity'))
        } else {
          const defaultValue = content.attributes.find(el => el.id === cardDescription.capacity).items[0].value
          setActiveCapacity(defaultValue)
        }
      }

      const arrUSB = arrContent?.attributes?.find(elem => elem?.id === cardDescription.usb)
      if (arrUSB) {
        if (localStorage.getItem('USB')) {
          setActiveUSB(localStorage.getItem('USB'))
        } else {
          const defaultValue = content.attributes.find(el => el.id === cardDescription.usb).items[0].value
          setActiveUSB(defaultValue)
        }
      }

      const arrID = arrContent?.attributes?.find(elem => elem?.id === cardDescription.id)
      if (arrID) {
        if (localStorage.getItem('attrID')) {
          setActiveID(localStorage.getItem('attrID'))
        } else {
          const defaultValue = content.attributes.find(el => el.id === cardDescription.id).items[0].value
          setActiveID(defaultValue)
        }
      }
    }

  }

  render() {
    const { content, currency, activeSize, setActiveSize, activeColor, setActiveColor, activeCapacity, setActiveCapacity, activeUSB, setActiveUSB, activeID, setActiveID } = this.props


    const arrContent = content || []

    const arrSize = arrContent?.attributes?.find(elem => elem?.id === cardDescription.size)

    const arrColor = arrContent?.attributes?.find(elem => elem?.id === cardDescription.color)

    const arrCapacity = arrContent?.attributes?.find(elem => elem?.id === cardDescription.capacity)

    const arrUSB = arrContent?.attributes?.find(elem => elem?.id === cardDescription.usb)

    const arrID = arrContent?.attributes?.find(elem => elem?.id === cardDescription.id)

    const currentCurrency = arrContent?.prices.filter(el => el.currency.label === currency)



    return (
        <div className={styles.ItemCardDescription}>
        <div className={styles.titleName}>{content.brand}</div>
        <div className={styles.titleType}>{content.name}</div>

          <div className={styles.attrCont}>
            {arrSize &&
            <div className={styles.paramAttrCont}>
              <div className={styles.params}>{cardDescription.size}:</div>
              <div className={styles.attrCont}>
                {arrSize?.items.map(item => (
                    <div className={arrContent.inStock ? activeSize === item.id ? `${styles.activeAttr} ${styles.cursorPointer}` : `${styles.attr} ${styles.cursorPointer}` : `${styles.attr}`} key={item.value} onClick={() => this.handleSizeClick(item.id)}>{item.value}</div>
                ))}
              </div>
            </div>
            }
            {arrColor &&
            <div className={styles.paramColorCont}>
              <div className={styles.params}>{cardDescription.color}:</div>
              <div className={styles.colorCont}>
                {arrColor?.items.map(item => {
                  return <div className={arrContent.inStock ? activeColor === item.id ? `${styles.activeColor} ${styles.cursorPointer}` : `${styles.color} ${styles.cursorPointer}` : `${styles.color}`} style={{backgroundColor: item.value}} key={item.value}
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
                  return <div className={arrContent.inStock ? activeCapacity === item.id ? `${styles.activeAttr} ${styles.cursorPointer}` : `${styles.attr} ${styles.cursorPointer}` : `${styles.attr}`} key={item.id}
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
                  return <div className={arrContent.inStock ? activeUSB === item.id ? `${styles.activeAttr} ${styles.cursorPointer}` : `${styles.attr} ${styles.cursorPointer}` : `${styles.attr}`} key={item.id}
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
                  return <div className={arrContent.inStock ? activeID === item.id ? `${styles.activeAttr} ${styles.cursorPointer}` : `${styles.attr} ${styles.cursorPointer}` : `${styles.attr}`} key={item.id}
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

          <CardButton content={arrContent} activeSize={activeSize} setActiveSize={setActiveSize} activeColor={activeColor} setActiveColor={setActiveColor} activeCapacity={activeCapacity}
                      setActiveCapacity={setActiveCapacity} activeUSB={activeUSB} setActiveUSB={setActiveUSB} activeID={activeID} setActiveID={setActiveID}/>
          <div dangerouslySetInnerHTML={{__html: content.description}} className={styles.description}/>
        </div>
    )
  }
}
