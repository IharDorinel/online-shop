import {Component} from "react";
import styles from './style.module.scss';


export default class CategoryItem extends Component {

    handleClick = () => {
        const { item, setCategory } = this.props
        setCategory(item)
    }

    render() {
        const {item} = this.props
        return (
            <p className={styles.categoryItem} onClick={this.handleClick}>{item}</p>
        )
    }
}