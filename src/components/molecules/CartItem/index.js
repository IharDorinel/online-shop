import {Component} from "react";

import styles from './style.module.scss';

import plus from './images/plus-square.svg';
import minus from './images/minus-square.svg';
import product from './images/Product D.jpg';
import leftArrow from './images/Group 1417.svg';
import rightArrow from './images/Group 1418.svg';
import {store} from "../../../store";
import {decreaseCount, increaseCount} from "../../../store/reducers/cartReducer";


export default class CartItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start: 0,
      end: 1,
      activeSize: '',
      activeColor: '',
    }
  }

  increaseGoods = () => {
    store.dispatch(increaseCount(this.props.item.id))
  }


  decreaseGoods = () => {
    store.dispatch(decreaseCount(this.props.item.id))
  }

  leftClick = () => {
    if(this.state.start > 0) {
      this.setState({start: this.state.start - 1})
      this.setState({end: this.state.end - 1})
    } else {
      this.setState({start: this.props.item.gallery.length - 2})
      this.setState({end:this.props.item.gallery.length - 1})
    }
  }

  rightClick = () => {
    if(this.state.end < this.props.item.gallery.length) {
      this.setState({start: this.state.start + 1})
      this.setState({end: this.state.end + 1})
    } else {
      this.setState({start: 0})
      this.setState({end: 1})
    }
  }

  handleSizeClick = (value) => {
    this.setState({activeSize: value})
     }

  handleColorClick = (value) => {
    this.setState({activeColor: value})
  }

  render() {

    const arrSize = this.props.item.attributes.find(elem => elem.id === 'Size')

    const arrColor = this.props.item.attributes.find(elem => elem.id === 'Color')

    const countGoods = this.props.count.filter(el => el.id === this.props.item.id)

    const countCost = this.props.item.prices[0].amount * countGoods[0].quantity

    return (
        <div className={this.props.isCartOpen ? styles.cartItem : styles.cartModalItem} key={this.props.item.id}>
          <hr className={this.props.isCartOpen ? styles.cartHr : styles.cartModalHr}/>
          <div className={this.props.isCartOpen ? styles.cartContent : styles.cartModalContent}>
            <div className={this.props.isCartOpen ? styles.cartItemDescr : styles.cartModalItemDescr}>
              <div className={this.props.isCartOpen ? styles.cartItemTitle : styles.cartModalItemTitle}>{this.props.item.brand}</div>
              <div className={this.props.isCartOpen ? styles.cartItemType : styles.cartModalItemType}>{this.props.item.name}</div>
              <div
                  className={this.props.isCartOpen ? styles.cartItemPrice : styles.cartModalItemPrice}>{this.props.item.prices[0].currency.symbol}{countCost}</div>
              {arrSize &&
                  <div className={styles.paramSizeCont}>
                    <div className={styles.params}>SIZE:</div>
                    <div className={styles.sizeCont}>
                      {this.props.item.attributes[0]?.items.map(el => (
                        <div className={this.state.activeSize === el.id ? styles.activeSize : styles.size} key={el.id}
                        onClick={() => this.handleSizeClick(el.id)}>{el.value}</div>
                        ))}
                    </div>
                  </div>
              }
              {arrColor &&
              <div className={styles.paramColorCont}>
                <div className={styles.params}>COLOR:</div>
                <div className={styles.colorCont}>
                  {this.props.item.attributes[0]?.items.map(el => (
                  <div className={this.state.activeColor === el.id ? styles.activeColor : styles.color} style={{backgroundColor: el.value}} key={el.id}
                       onClick={() => this.handleColorClick(el.id)}></div>
                  ))}
                </div>
              </div>
              }
            </div>
            <div className={this.props.isCartOpen ? styles.countImageCont : styles.countModalImageCont}>
              <div className={this.props.isCartOpen ? styles.countCont : styles.countModalCont}>
                <img src={plus} className={this.props.isCartOpen ? styles.plusMinus : styles.cartModalPlusMinus} onClick={this.increaseGoods} alt={plus}/>
                <p>{countGoods[0].quantity}</p>
                <img src={minus} className={this.props.isCartOpen ? styles.plusMinus : styles.cartModalPlusMinus} onClick={this.decreaseGoods} alt={minus}/>
              </div>
              {this.props.item.gallery?.slice(this.state.start, this.state.end).map(item => (
              <img src={item} className={styles.cartImg} alt={product}/>
              ))}
              <div className={this.props.isCartOpen ? styles.arrowCont : styles.arrowModalCont}>
                <img src={leftArrow} className={styles.arrow} onClick={this.leftClick} alt={leftArrow}/>
                <img src={rightArrow} className={styles.arrow} onClick={this.rightClick} alt={rightArrow}/>
              </div>
            </div>
          </div>
        </div>
    )
}
}
