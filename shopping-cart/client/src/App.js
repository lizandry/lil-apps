// import logo from './logo.svg';
import './App.css';
import {products} from './static-data';
import ProductList from './Components/ProductList'

function App() {
  // console.log('items', products)
  return (
    <div className="App">
      hello world
      <ProductList 
        products={products}
      />
    </div>
  );
}

export default App;
