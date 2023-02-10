import {Component} from "react";
import {
  increaseCount,
  setItemInCart
} from "../../../store/reducers/cartReducer";
import {connect} from 'react-redux';
import {store} from "../../../store";
import styles from './style.module.scss';


export class CardButton extends Component {



  handleClick = () => {
    const { content, activeSize, activeColor, activeCapacity, activeUSB, activeID } = this.props

    const stateCart = store.getState().cart.itemsInCart

    const isSizeItemInCart = stateCart.filter(el => el.id === content.id).find(el => el.activeSize === content.activeSize)
    const isColorCapItemInCart = stateCart.filter(el => el.id === content.id).find(el => (el.activeColor === content.activeColor && el.activeCapacity === content.activeCapacity))
    const isCapUSBIDItemInCart = stateCart.filter(el => el.id === content.id).find(el =>
        (el.activeCapacity === content.activeCapacity && el.activeUSB === content.activeUSB && el.activeID === content.activeID))
    const isItemInCart = stateCart.find(el => el.id === content.id)

   if(content.inStock) {
     if (content.activeSize && isSizeItemInCart || content.activeColor && content.activeCapacity && isColorCapItemInCart
         || content.activeCapacity && content.activeUSB && content.activeID && isCapUSBIDItemInCart
     || !content.activeSize && !content.activeColor && !content.activeCapacity && !content.activeUSB && !content.activeID && isItemInCart) {
       store.dispatch(increaseCount(content))
     } else {
       store.dispatch(setItemInCart({
         ...content, activeSize: activeSize, activeColor: activeColor, activeCapacity: activeCapacity,
         activeUSB: activeUSB, activeID: activeID
       }))
     }

   }
  }


  render() {
    const { content } = this.props

    return (
        <button className={content.inStock ? `${styles.cardButton} ${styles.cursorPointer}` : `${styles.cardButton} ${styles.disabledBtn}`} onClick={this.handleClick}>
          ADD TO CART
          </button>
    )
  }

}

export default connect()(CardButton)

