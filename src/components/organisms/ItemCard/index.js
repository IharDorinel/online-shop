import {Component} from "react";
import arrow from '../../../images/arrow.png';
import ItemCardDescription from "../../molecules/ItemCardDescription";
import styles from './style.module.scss';


export default class ItemCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgActive: this.props.item[0]?.gallery[0],
    }
  }

  handleClick = (value) => {
    this.setState({imgActive: value})
  }


  render() {
    const { item, currency, setActiveSize, activeSize, setActiveColor, activeColor, activeCapacity, setActiveCapacity, activeUSB, setActiveUSB, activeID, setActiveID, setStartPage } = this.props

      const itemCard = {
        ...item[0],
          activeSize: activeSize,
          activeColor: activeColor,
          activeCapacity: activeCapacity,
          activeUSB: activeUSB,
          activeID: activeID
      }

    return (
        <div className={styles.itemCardContent}>
          <a href="/">
              <img src={arrow} className={styles.itemCardBack} onClick={setStartPage} alt={arrow}/>
          </a>
          <div className={styles.miniImgCont}>
            {item[0]?.gallery?.map(item => (
            <img src={item} key={item} className={styles.miniImg} onClick={() => this.handleClick(item)} alt={item} />
                ))}
          </div>
          {item[0]?.gallery?.filter(el => el === this.state.imgActive).map(item => (
              <img src={item} key={item} className={styles.itemCardImg} alt={item} />
          ))}
          <ItemCardDescription content={itemCard} currency={currency} setActiveSize={setActiveSize} activeSize={activeSize} setActiveColor={setActiveColor} activeColor={activeColor}
                               activeCapacity={activeCapacity} setActiveCapacity={setActiveCapacity} activeUSB={activeUSB} setActiveUSB={setActiveUSB} activeID={activeID} setActiveID={setActiveID}/></div>
    )
  }
}
