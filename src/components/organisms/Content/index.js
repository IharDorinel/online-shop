import {Component} from "react";

import styles from './style.module.scss';

import image from './images/Image.jpg';
import image1 from './images/Image1.jpg';
import cart from './images/Circle Icon.svg';

export default class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartImgVisible: false,
      handleHover: this.handleHover.bind(this)
    }
  }

  handleHover = () => {
    this.setState({cartImgVisible: !this.state.cartImgVisible})
  }



  render() {
    return (
        <section className={styles.content}>
          <p className={styles.contentTitle}>Category name</p>
          <div className={styles.contentGallery}>
            <div className={styles.contentGalleryItem} onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}>
            <figure className={styles.contentItem} >
            <img src={image} className={styles.contentImg} alt={image}/>
              <div className={styles.figContainer} >
              <figcaption>Apollo Running Short</figcaption>
              <figcaption>$50.00</figcaption>
              </div>
            </figure>
              {this.state.cartImgVisible &&
                  <img src={cart} className={styles.cartImg} alt={cart} />
              }
            </div>
            <div className={styles.contentGalleryItem} onMouseEnter={this.handleHover}
                 onMouseLeave={this.handleHover}>
            <figure className={styles.contentItem}>
            <img src={image1} className={styles.contentImg} alt={image}/>
              <div className={styles.figContainer}>
                <figcaption>Apollo Running Short</figcaption>
                <figcaption>$50.00</figcaption>
              </div>
            </figure>
              {this.state.cartImgVisible &&
                  <img src={cart} className={styles.cartImg} alt={cart} />
              }
            </div>
              <div className={styles.contentGalleryItem} onMouseEnter={this.handleHover}
                   onMouseLeave={this.handleHover}>
            <figure className={styles.contentItem}>
            <img src={image} className={styles.contentImg} alt={image}/>
              <div className={styles.figContainer}>
                <figcaption>Apollo Running Short</figcaption>
                <figcaption>$50.00</figcaption>
              </div>
            </figure>
                {this.state.cartImgVisible &&
                    <img src={cart} className={styles.cartImg} alt={cart} />
                }
              </div>
                <div className={styles.contentGalleryItem} onMouseEnter={this.handleHover}
                     onMouseLeave={this.handleHover}>
            <figure className={styles.contentItem}>
            <img src={image1} className={styles.contentImg} alt={image}/>
              <div className={styles.figContainer}>
                <figcaption>Apollo Running Short</figcaption>
                <figcaption>$50.00</figcaption>
              </div>
            </figure>
                  {this.state.cartImgVisible &&
                      <img src={cart} className={styles.cartImg} alt={cart} />
                  }
                </div>
                  <div className={styles.contentGalleryItem} onMouseEnter={this.handleHover}
                       onMouseLeave={this.handleHover}>
            <figure className={styles.contentItem}>
            <img src={image} className={styles.contentImg} alt={image}/>
              <div className={styles.figContainer}>
                <figcaption>Apollo Running Short</figcaption>
                <figcaption>$50.00</figcaption>
              </div>
            </figure>
                    {this.state.cartImgVisible &&
                        <img src={cart} className={styles.cartImg} alt={cart} />
                    }
                  </div>
                    <div className={styles.contentGalleryItem} onMouseEnter={this.handleHover}
                         onMouseLeave={this.handleHover}>
            <figure className={styles.contentItem}>
            <img src={image1} className={styles.contentImg} alt={image}/>
              <div className={styles.figContainer}>
                <figcaption>Apollo Running Short</figcaption>
                <figcaption>$50.00</figcaption>
              </div>
            </figure>
                      {this.state.cartImgVisible &&
                          <img src={cart} className={styles.cartImg} alt={cart} />
                      }
                    </div>
            <div className={styles.contentGalleryItem} onMouseEnter={this.handleHover}
                 onMouseLeave={this.handleHover}>
            <figure className={styles.contentItem}>
            <img src={image} className={styles.contentImg} alt={image}/>
              <div className={styles.figContainer}>
                <figcaption>Apollo Running Short</figcaption>
                <figcaption>$50.00</figcaption>
              </div>
            </figure>
              {this.state.cartImgVisible &&
                  <img src={cart} className={styles.cartImg} alt={cart} />
              }
                    </div>
            <div className={styles.contentGalleryItem} onMouseEnter={this.handleHover}
                 onMouseLeave={this.handleHover}>
            <figure className={styles.contentItem}>
            <img src={image1} className={styles.contentImg} alt={image}/>
              <div className={styles.figContainer}>
                <figcaption>Apollo Running Short</figcaption>
                <figcaption>$50.00</figcaption>
              </div>
            </figure>
              {this.state.cartImgVisible &&
                  <img src={cart} className={styles.cartImg} alt={cart} />
              }
                    </div>
          </div>
        </section>
    )
  }
}
