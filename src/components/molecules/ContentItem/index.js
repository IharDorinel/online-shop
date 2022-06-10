import {Component} from "react";
import styles from "../../molecules/ContentItem/style.module.scss";

import cart from './images/Circle Icon.svg';


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
    this.props.setId(this.state.id)
    console.log(this.state.id)
  }


  render() {

    return (
        <>
          <div className={styles.contentGalleryItem} onMouseEnter={this.handleHover}
               onMouseLeave={this.handleHover}
               onClick={this.handleClick}
          >
        <figure className={styles.contentItem} >
          <img src={this.props.item.gallery[0]} className={styles.contentImg} alt={this.props.item.name}/>
          <div className={styles.figContainer} >
            <figcaption>{this.props.item.name}</figcaption>
            <figcaption>{this.props.item.prices[0].currency.symbol}{this.props.item.prices[0].amount}</figcaption>
          </div>
        </figure>
            {this.state.cartImgVisible &&
                <img src={cart} className={styles.cartImg} alt={cart} />
            }
          </div>
        </>
    )
  }
}
