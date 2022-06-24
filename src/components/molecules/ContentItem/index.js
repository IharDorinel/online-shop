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

  handleClick = () => {
    if(this.props.item.inStock) {
      this.props.setId(this.state.id)
    }
  }

  addToCart = () => {
    store.dispatch(setItemInCart(this.props.item))
  }



  render() {


    return (
          <div className={this.props.item.inStock ? styles.contentGalleryItem : styles.contentGalleryOutItem} onMouseEnter={this.handleHover}
               onMouseLeave={this.handleHover}
               onClick={this.handleClick}
          >
        <figure className={styles.contentItem} onClick={this.handleClick}>
          <img src={this.props.item.gallery[0]} className={styles.contentImg} alt={this.props.item.name}/>
          <div className={styles.figContainer} >
            <figcaption>{this.props.item.name}</figcaption>
            <figcaption>{this.props.item.prices[0].currency.symbol}{this.props.item.prices[0].amount}</figcaption>
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
