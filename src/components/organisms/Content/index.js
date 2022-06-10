import {Component} from "react";

import styles from './style.module.scss';

import ContentItem from "../../molecules/ContentItem";



export default class Content extends Component {
  constructor(props) {
    super(props)
  }


  render() {

    return (
        <section className={styles.content}>
          <p className={styles.contentTitle}>Category name</p>
          <div className={styles.contentGallery}>

            {this.props.content.filter(el => el.name === 'all').map(item => (
                item.products.map(item => (
                      <ContentItem item={item}
                                   setId={this.props.setId}
                                   key={item.id}
                      />
                  ))

            ))}

          </div>
        </section>
    )
  }
}
