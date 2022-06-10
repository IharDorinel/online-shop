import styles from './App.module.scss';
import Header from "./components/organisms/Header";
import Content from "./components/organisms/Content";
import ItemCard from "./components/organisms/ItemCard";
import Cart from "./components/organisms/Cart";
import {gql} from "@apollo/client";
import {Component} from "react";
import {Query} from "@apollo/client/react/components";
import {graphql} from "@apollo/client/react/hoc";


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
    }`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      id: '',
      contentVisible: true,
      itemCardVisible: false,
    }
  }

  setId = (value) => {
    this.setState({id: value})
    this.setState({contentVisible: false})
    this.setState({itemCardVisible: true})
  }




render() {
console.log(this.state.id)
    return (
        <Query query={QUERY}>
          {({ data, loading, error }) => {
            if (loading) return <p>Loading…</p>;
            if (error) return <p>Something went wrong</p>;

            let foundCard = data.categories.filter(el => el.name === 'all').map(item => (
                item.products.find(el => el.id === this.state.id)))

            return (
                <div className={styles.main}>
                  <Header/>
                  {this.state.contentVisible &&
                      <Content
                          content={data.categories}
                          setId={this.setId}
                      />
                  }
                  {this.state.itemCardVisible &&
                      <ItemCard item={foundCard}/>
                  }
                  <Cart/>
                </div>
            )
          }}
        </Query>
    )
}
}

export default graphql(QUERY)(App)

