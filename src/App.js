import Header from "./components/organisms/Header";
import Content from "./components/organisms/Content";
import ItemCard from "./components/organisms/ItemCard";
import Cart from "./components/organisms/Cart";
import {Component} from "react";
import {Query} from "@apollo/client/react/components";
import {graphql} from "@apollo/client/react/hoc";
import {GET_PRODUCTS} from "./services/gql";
import styles from './App.module.scss';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      id: '',
      currSymbol: '$',
      currency: 'USD',
      category: 'all',
      activeSize: '',
      activeColor: '',
      activeCapacity: '',
      activeUSB: '',
      activeID: '',
      contentVisible: true,
      itemCardVisible: false,
      cartVisible: false,
      cartModalVisible: false,
      currModalVisible: false,
      isCartOpen: true,
      setCart: this.setCart.bind(this),
      setActiveColor: this.setActiveColor.bind(this),
      setActiveSize: this.setActiveSize.bind(this),
      setActiveCapacity: this.setActiveCapacity.bind(this),
      setActiveUSB: this.setActiveUSB.bind(this),
      setActiveID: this.setActiveID.bind(this),
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
      this.setState({currSymbol: localStorage.getItem('currSymbol')})
    }
  }

  setCurrency = (symbol, currency) => {
    this.setState({currSymbol: symbol})
    this.setState({currency: currency})
  }

  setCategory = (value) => {
    this.setState({category: value})
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

  setActiveSize = (value) => {
    this.setState({activeSize: value})
  }

  setActiveColor = (value) => {
    this.setState({activeColor: value})
  }

  setActiveCapacity = (value) => {
    this.setState({activeCapacity: value})
  }

  setActiveUSB = (value) => {
    this.setState({activeUSB: value})
  }

  setActiveID = (value) => {
    this.setState({activeID: value})
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
        <Query query={GET_PRODUCTS}>
          {({ data, loading, error }) => {
            if (loading) return <p>Loading…</p>;
            if (error) return <p>Something went wrong</p>;

            let foundCard = data.categories.filter(el => el.name === this.state.category).map(item => (
                item.products.find(el => el.id === this.state.id)))

            return (
                <div className={styles.main} onClick={this.handleClick}>
                  <Header currencies={data.currencies} currency={this.state.currency} currSymbol={this.state.currSymbol} currModalVisible={this.state.currModalVisible} setCategory={this.setCategory}
                          setCurrency={this.setCurrency} showCartModal={this.state.showCartModal} showCurrModal={this.state.showCurrModal}
                          cartModalVisible={this.state.cartModalVisible} closeCurrModal={this.state.closeCurrModal}
                          closeCartModal={this.state.closeCartModal} setCart={this.setCart} categories={data.categories}/>
                  {this.state.contentVisible &&
                      <Content
                          content={data.categories}
                          category={this.state.category}
                          currency={this.state.currency}
                          setId={this.setId}
                      />
                  }
                  {this.state.itemCardVisible &&
                      <ItemCard item={foundCard} currency={this.state.currency} setActiveSize={this.state.setActiveSize} activeSize={this.state.activeSize} setActiveColor={this.state.setActiveColor} activeColor={this.state.activeColor}
                                activeCapacity={this.state.activeCapacity} setActiveCapacity={this.state.setActiveCapacity}
                                activeUSB={this.state.activeUSB} setActiveUSB={this.state.setActiveUSB}
                                activeID={this.state.activeID} setActiveID={this.state.setActiveID}/>
                  }
                  {this.state.cartVisible &&
                      <Cart currency={this.state.currency} currSymbol={this.state.currSymbol} isCartOpen={this.state.isCartOpen} closeCart={this.state.closeCart}/>
                  }

                </div>
            )
          }}
        </Query>
    )
}
}

export default graphql(GET_PRODUCTS)(App)

