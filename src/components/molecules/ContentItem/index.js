import {Component} from "react";
import styles from "../../molecules/ContentItem/style.module.scss";

import cart from './images/Circle Icon.svg';
import {store} from "../../../store";
import {setItemInCart} from "../../../store/reducers/cartReducer";
import OutOfStock from "../../atoms/OutOfStock";


export default class ContentItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartImgVisible: false,
      handleHover: this.handleHover.bind(this),
      id: this.props.item.id,
    }
  }

  handleHover = () => {
    this.setState({cartImgVisible: !this.state.cartImgVisible})
  }

  handleClick = (e) => {
    if(e.nativeEvent.target.className.includes('style_cartImg')) return;

    if(this.props.item.inStock) {
      this.props.setId(this.state.id)
    }
  }

  addToCart = (e) => {
    store.dispatch(setItemInCart(this.props.item))
  }


  render() {

const currentCurrency = this.props.item.prices.filter(el => el.currency.label === this.props.currency)

    return (
          <div className={this.props.item.inStock ? styles.contentGalleryItem : styles.contentGalleryOutItem} onMouseEnter={this.handleHover}
               onMouseLeave={this.handleHover}
               onClick={this.handleClick}
          >
        <figure className={styles.contentItem} onClick={this.handleClick}>
          <img src={this.props.item.gallery[0]} className={styles.contentImg} alt={this.props.item.name}/>
          <div className={styles.figContainer} >
            <figcaption>{this.props.item.name}</figcaption>
            <figcaption>{currentCurrency[0].currency.symbol}{currentCurrency[0].amount}</figcaption>
          </div>
        </figure>
            {this.state.cartImgVisible && this.props.item.inStock &&
                <img src={cart} className={styles.cartImg} onClick={this.addToCart} alt={cart} />
            }
            {!this.props.item.inStock &&
                <OutOfStock/>
            }
          </div>
    )
  }
}
