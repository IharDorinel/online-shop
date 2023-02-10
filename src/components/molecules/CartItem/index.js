import {Component} from "react";
import plus from '../../../images/plus-square.svg';
import minus from '../../../images/minus-square.svg';
import leftArrow from '../../../images/Group 1417.svg';
import rightArrow from '../../../images/Group 1418.svg';
import cross from '../../../images/cross.png';
import {store} from "../../../store";
import {
  decreaseCount,
  removeItemFromCart,
  increaseCount
} from "../../../store/reducers/cartReducer";
import {cardDescription} from "../../../utils/constants";
import styles from './style.module.scss';


export default class CartItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start: 0,
      end: 1,
    }
  }


  increaseGoods = () => {
    const { item } = this.props
    store.dispatch(increaseCount(item))
  }


  decreaseGoods = () => {
    const { item } = this.props
    store.dispatch(decreaseCount(item))
  }

  leftClick = () => {
    const { item } = this.props
    if(this.state.start > 0) {
      this.setState({start: this.state.start - 1})
      this.setState({end: this.state.end - 1})
    } else {
      this.setState({start: item.gallery.length - 2})
      this.setState({end: item.gallery.length - 1})
    }
  }

  rightClick = () => {
    const { item } = this.props
    if(this.state.end < item.gallery.length) {
      this.setState({start: this.state.start + 1})
      this.setState({end: this.state.end + 1})
    } else {
      this.setState({start: 0})
      this.setState({end: 1})
    }
  }


  deleteProduct = (item) => {
    store.dispatch(removeItemFromCart(item))
  }

  render() {
    const { item, count, currency, currSymbol, isCartOpen } = this.props

    const arrSize = item.attributes.find(elem => elem.id === cardDescription.size)

    const arrColor = item.attributes.find(elem => elem.id === cardDescription.color)

    const arrCapacity = item.attributes.find(elem => elem.id === cardDescription.capacity)

    const arrUSB = item.attributes.find(elem => elem.id === cardDescription.usb)

    const arrID = item.attributes.find(elem => elem.id === cardDescription.id)

    const countGoods = count.filter(el => ((el.id === item.id) && (
        (el.activeSize && el.activeSize === item.activeSize)
    || (el.activeColor && el.activeCapacity && el.activeColor === item.activeColor && el.activeCapacity === item.activeCapacity)
    || (el.activeCapacity && el.activeUSB && el.activeID && el.activeCapacity === item.activeCapacity && el.activeUSB === item.activeUSB && el.activeID === item.activeID)
    || (!item.activeSize && !item.activeColor && !item.activeCapacity && !item.activeUSB && !item.activeID))
    ))

    const countCost = item.prices.filter(el => el.currency.label === currency)[0]?.amount

    return (

        <div className={isCartOpen ? styles.cartItem : styles.cartModalItem} key={item.id}>
          <hr className={isCartOpen ? styles.cartHr : styles.cartModalHr}/>
          <div className={isCartOpen ? styles.cartContent : styles.cartModalContent}>
            <div className={isCartOpen ? styles.cartItemDescr : styles.cartModalItemDescr}>
              <div className={isCartOpen ? styles.cartItemTitle : styles.cartModalItemTitle}>{item.brand}</div>
              <div className={isCartOpen ? styles.cartItemType : styles.cartModalItemType}>{item.name}</div>
              <div className={isCartOpen ? styles.cartItemPrice : styles.cartModalItemPrice}>{currSymbol}{countCost}</div>
              {arrSize &&
                  <div className={styles.paramAttrCont}>
                    <div className={styles.params}>{cardDescription.size}:</div>
                    <div className={styles.attrCont}>
                      {item.attributes?.filter(el => el.name === cardDescription.size)[0].items.map(el => (
                        <div className={item.activeSize === el.id ? styles.activeAttr : styles.attr} key={el.id}
                        >{el.value}</div>
                        ))}
                    </div>
                  </div>
              }
              {arrColor &&
              <div className={styles.paramColorCont}>
                <div className={styles.params}>{cardDescription.color}:</div>
                <div className={styles.colorCont}>
                  {item.attributes?.filter(el => el.name === cardDescription.color)[0].items.map(el => (
                  <div className={item.activeColor === el.id ? styles.activeColor : styles.color} style={{backgroundColor: el.value}} key={el.id}
                  ></div>
                  ))}
                </div>
              </div>
              }
              {arrCapacity &&
              <div className={styles.paramAttrCont}>
                <div className={styles.params}>{cardDescription.capacity}:</div>
                <div className={styles.attrCont}>
                  {item.attributes?.filter(el => el.name === cardDescription.capacity)[0].items.map(el => (
                      <div className={item.activeCapacity === el.id ? styles.activeAttr : styles.attr} style={{backgroundColor: el.value}} key={el.id}
                      >{el.value}</div>
                  ))}
                </div>
              </div>
              }
              {arrUSB &&
              <div className={styles.paramAttrCont}>
                <div className={styles.params}>{cardDescription.usb}:</div>
                <div className={styles.attrCont}>
                  {item.attributes?.filter(el => el.name === cardDescription.usb)[0].items.map(el => (
                      <div className={item.activeUSB === el.id ? styles.activeAttr : styles.attr} style={{backgroundColor: el.value}} key={el.id}
                      >{el.value}</div>
                  ))}
                </div>
              </div>
              }
              {arrID &&
              <div className={styles.paramAttrCont}>
                <div className={styles.params}>{cardDescription.id}:</div>
                <div className={styles.attrCont}>
                  {item.attributes?.filter(el => el.name === cardDescription.id)[0].items.map(el => (
                      <div className={item.activeID === el.id ? styles.activeAttr : styles.attr} style={{backgroundColor: el.value}} key={el.id}
                      >{el.value}</div>
                  ))}
                </div>
              </div>
              }
            </div>
            <div className={isCartOpen ? styles.countImageCont : styles.countModalImageCont}>
              <img src={cross} className={isCartOpen ? styles.removeCross : styles.removeModalCross} onClick={() => this.deleteProduct(item)} alt={cross}/>
              <div className={isCartOpen ? styles.countCont : styles.countModalCont}>
                <img src={plus} className={isCartOpen ? styles.plusMinus : styles.cartModalPlusMinus} onClick={this.increaseGoods} alt={plus}/>
                <p>{countGoods[0]?.quantity}</p>
                <img src={minus} className={isCartOpen ? styles.plusMinus : styles.cartModalPlusMinus} onClick={this.decreaseGoods} alt={minus}/>
              </div>
              {item.gallery?.slice(this.state.start, this.state.end).map(item => (
              <img src={item} className={styles.cartImg} alt={item} key={item}/>
              ))}
              {item.gallery?.length > 1 &&
                <div className={isCartOpen ? styles.arrowCont : styles.arrowModalCont}>
                  <img src={leftArrow} className={styles.arrow} onClick={this.leftClick} alt={leftArrow}/>
                  <img src={rightArrow} className={styles.arrow} onClick={this.rightClick} alt={rightArrow}/>
                </div>
              }

            </div>
          </div>
        </div>
    )
}
}
