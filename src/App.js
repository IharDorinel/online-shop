import styles from './App.module.scss';
import Header from "./components/organisms/Header";
import Content from "./components/organisms/Content";
import ItemCard from "./components/organisms/ItemCard";
import Cart from "./components/organisms/Cart";
import {gql} from "@apollo/client";
import {Component} from "react";
import {Query} from "@apollo/client/react/components";
import {graphql} from "@apollo/client/react/hoc";
import {store} from "./store";


const QUERY = gql`
    query {
        categories {
            name,
            products {
                id,
                name,
                gallery,
                description,
                category,
                inStock,
                attributes {
                    id,
                    name,
                    type,
                    items {
                        displayValue,
                        value,
                        id
                    }
                }
                prices {
                    currency {
                        label,
                        symbol
                    },
                    amount
                },
                brand
            }
        }

        currencies {
            label,
            symbol
        }
    }`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      id: '',
      currency: 'USD',
      contentVisible: true,
      itemCardVisible: false,
      cartVisible: false,
      cartModalVisible: false,
      currModalVisible: false,
      isCartOpen: true,
      setCart: this.setCart.bind(this),
      showCartModal: this.showCartModal.bind(this),
      showCurrModal: this.showCurrModal.bind(this),
      closeCurrModal: this.closeCurrModal.bind(this),
      closeCartModal: this.closeCartModal.bind(this),
      closeCart: this.closeCart.bind(this)
    }
  }

  componentDidMount() {
    if(localStorage.getItem('currency')) {
      this.setState({currency: localStorage.getItem('currency')})
    }
  }

  setCurrency = (value) => {
    this.setState({currency: value})
  }


  setId = (value) => {
    this.setState({id: value})
    this.setState({contentVisible: false})
    this.setState({itemCardVisible: true})
  }

  setCart = () => {
   this.setState({contentVisible: false})
   this.setState({cartVisible: true})
   this.setState({cartModalVisible: false})
   this.setState({itemCardVisible: false})
  }

  showCartModal = () => {
    this.setState({cartModalVisible: true})
  }

  showCurrModal = (e) => {
    e.stopPropagation()
    this.setState({currModalVisible: true})
  }

  closeCurrModal = () => {
    this.setState({currModalVisible: false})
  }

  closeCartModal = () => {
    this.setState({cartModalVisible: false})
  }

  closeCart = () => {
    this.setState({cartVisible: false})
    this.setState({contentVisible: true})
  }

  handleClick = () => {
    this.state.closeCurrModal()
  }


render() {

    return (
        <Query query={QUERY}>
          {({ data, loading, error }) => {
            if (loading) return <p>Loading…</p>;
            if (error) return <p>Something went wrong</p>;

            let foundCard = data.categories.filter(el => el.name === 'all').map(item => (
                item.products.find(el => el.id === this.state.id)))

            console.log(this.state.currency)
            console.log(data.categories.filter(el => el.name === 'all')[0].products.map(el => (
                el.prices.filter(el => el.currency.label === this.state.currency).map(el => (
                   el.currency.label
                ))
            )))

            return (
                <div className={styles.main} onClick={this.handleClick}>
                  <Header currencies={data.currencies} currency={this.state.currency} currModalVisible={this.state.currModalVisible}
                          setCurrency={this.setCurrency} showCartModal={this.state.showCartModal} showCurrModal={this.state.showCurrModal}
                          cartModalVisible={this.state.cartModalVisible} closeCurrModal={this.state.closeCurrModal}
                          closeCartModal={this.state.closeCartModal} setCart={this.setCart}/>
                  {this.state.contentVisible &&
                      <Content
                          content={data.categories}
                          currency={this.state.currency}
                          setId={this.setId}
                      />
                  }
                  {this.state.itemCardVisible &&
                      <ItemCard item={foundCard} currency={this.state.currency} />
                  }
                  {this.state.cartVisible &&
                      <Cart currency={this.state.currency} isCartOpen={this.state.isCartOpen} closeCart={this.state.closeCart}/>
                  }

                </div>
            )
          }}
        </Query>
    )
}
}

export default graphql(QUERY)(App)

