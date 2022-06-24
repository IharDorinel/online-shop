import {Component} from "react";

import styles from './style.module.scss';

import image from './images/Image.jpg';
import ItemCardDescription from "../../molecules/ItemCardDescription";


export default class ItemCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgActive: this.props.item[0]?.gallery[0]
    }
  }

  handleClick = (value) => {
    this.setState({imgActive: value})
  }

  render() {
    console.log(this.props.item)
    return (
        <div className={styles.itemCardContent}>
          <div className={styles.miniImgCont}>
            {this.props.item[0]?.gallery?.map(item => (
            <img src={item} key={item} className={styles.miniImg} onClick={() => this.handleClick(item)} alt={image} />
                ))}
          </div>
          {this.props.item[0]?.gallery?.
            filter(el => el === this.state.imgActive)
              .map(item => (
              <img src={item} key={item} className={styles.itemCardImg} alt={image} />
          ))}
          <ItemCardDescription content={this.props.item}/></div>
    )
  }
}
