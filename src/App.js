import styles from './App.module.scss';
import Header from "./components/organisms/Header";
import Content from "./components/organisms/Content";
import ItemCard from "./components/organisms/ItemCard";
import Cart from "./components/organisms/Cart";


function App() {
  return (
    <div className={styles.main}>
      <Header/>
      <Content/>
      <ItemCard/>
      <Cart/>
    </div>
  );
}

export default App;
