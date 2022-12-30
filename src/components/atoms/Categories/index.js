import {Component} from "react";
import CategoryItem from "../CategoryItem";
import styles from "./style.module.scss";


export default class Categories extends Component {


  render() {
      const { categories, setCategory } = this.props

    return (
        <div className={styles.category_container}>
            {categories.map(item => (
                <CategoryItem item={item.name} key={item.name} setCategory={setCategory}/>
            ))}
        </div>
    )
  }

}
