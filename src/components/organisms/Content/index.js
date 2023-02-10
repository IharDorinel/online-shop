import {Component} from "react";
import ContentItem from "../../molecules/ContentItem";
import styles from './style.module.scss';


export default class Content extends Component {


  render() {
      const { content, category, currency, setId, activeSize, setActiveSize, activeColor, setActiveColor, activeCapacity, setActiveCapacity, activeUSB, setActiveUSB, activeID, setActiveID } = this.props

    return (
        <section className={styles.content}>
          <p className={styles.contentTitle}>{category}</p>
          <div className={styles.contentGallery}>

            {content.filter(el => el.name === category).map(item => (
                item.products.map(item => (
                      <ContentItem item={item}
                                   currency={currency}
                                   setId={setId}
                                   key={item.id}
                                   activeSize={activeSize} setActiveSize={setActiveSize} activeColor={activeColor} setActiveColor={setActiveColor} activeCapacity={activeCapacity}
                                   setActiveCapacity={setActiveCapacity} activeUSB={activeUSB} setActiveUSB={setActiveUSB} activeID={activeID} setActiveID={setActiveID}
                      />
                  ))
            ))}

          </div>
        </section>
    )
  }
}
