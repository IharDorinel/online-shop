import {Component} from "react";
import cart from '../../../images/Circle Icon.svg';
import {store} from "../../../store";
import {
  increaseCount,
  setItemInCart
} from "../../../store/reducers/cartReducer";
import OutOfStock from "../../atoms/OutOfStock";
import styles from "../../molecules/ContentItem/style.module.scss";


export default class ContentItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartImgVisible: false,
      handleHover: this.handleHover.bind(this),
    }
  }

  handleHover = () => {
    this.setState({cartImgVisible: !this.state.cartImgVisible})
  }

  handleClick = (e) => {
    const { item, setId} = this.props
    if(e.nativeEvent.target.className.includes('style_cartImg')) return;
      setId(item.id)
  }



  addToCart = () => {
    const { item, activeSize, activeColor, activeCapacity, activeUSB, activeID} = this.props


    const contentItem = {...item,
      activeSize: activeSize,
      activeColor: activeColor,
      activeCapacity: activeCapacity,
      activeUSB: activeUSB,
      activeID: activeID
    }


    const isItemInCart = store.getState().cart.itemsInCart.find(el => el.id === contentItem.id)

    if (isItemInCart) {
      store.dispatch(increaseCount(contentItem))
    }
    else {
      store.dispatch(setItemInCart({...contentItem}))
    }
  }


  render() {
    const { item, currency } = this.props
const currentCurrency = item.prices.filter(el => el.currency.label === currency)

    return (
          <div className={item.inStock ? styles.contentGalleryItem : styles.contentGalleryOutItem} onMouseEnter={this.handleHover}
               onMouseLeave={this.handleHover}
               onClick={this.handleClick}
          >
        <figure className={styles.contentItem} onClick={this.handleClick}>
          <img src={item.gallery[0]} className={styles.contentImg} alt={item.name}/>
          <div className={styles.figContainer} >
            <figcaption>{item.name}</figcaption>
            <figcaption>{currentCurrency[0].currency.symbol}{currentCurrency[0].amount}</figcaption>
          </div>
        </figure>
            {this.state.cartImgVisible && item.inStock && !item.attributes.length &&
                <img src={cart} className={styles.cartImg} onClick={this.addToCart} alt={cart} />
            }
            {!item.inStock &&
                <OutOfStock/>
            }
          </div>
    )
  }
}
