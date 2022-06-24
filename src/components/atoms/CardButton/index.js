import {Component} from "react";

import styles from './style.module.scss';
import {setItemInCart} from "../../../store/reducers/cartReducer";
import {connect} from 'react-redux';
import {store} from "../../../store";



export class CardButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      handleClick: this.handleClick.bind(this)
    }
  }


  handleClick = () => {
    console.log(this.props.content)
    store.dispatch(setItemInCart(this.props.content))
  }



  render() {

    return (
        <button className={styles.cardButton} onClick={this.handleClick}>ADD TO CART</button>
    )
  }

}



export default connect()(CardButton)

