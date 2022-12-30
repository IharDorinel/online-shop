import {Component} from "react";
import {removeItemFromCart, setItemInCart} from "../../../store/reducers/cartReducer";
import {connect} from 'react-redux';
import {store} from "../../../store";
import styles from './style.module.scss';


export class CardButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      handleClick: this.handleClick.bind(this)
    }
  }


  handleClick = () => {
    const { content, activeSize, activeColor, activeCapacity, activeUSB, activeID } = this.props

    const isItemInCart = store.getState().cart.itemsInCart.some(el => el.id === content.id)

    if(isItemInCart) {
      store.dispatch(removeItemFromCart(content))
    } else {
      store.dispatch(setItemInCart({...content, activeSize: activeSize, activeColor: activeColor, activeCapacity: activeCapacity,
        activeUSB: activeUSB, activeID: activeID}))
    }
  }


  render() {
    const { content } = this.props
    const isItemInCart = store.getState().cart.itemsInCart.some(el => el.id === content.id)

    return (
        <button className={styles.cardButton} onClick={this.handleClick}>
          {
            isItemInCart ?
                'REMOVE FROM CART'
                : 'ADD TO CART'
          }
          </button>
    )
  }

}



export default connect()(CardButton)

