import logo from './logo.svg';
import './App.css';
import SimpleCalculator from './Samples/SimpleCalculator';
import { ProductContainer } from './views/admin/warehouse/product/ProductContainer';

function App() {
  return (
    <div className="App">
      <h1>Mellat Bank 2023</h1>

      <ProductContainer  />
      <SimpleCalculator defaultValue={20} bgColor="Red" code={101}/>
      <SimpleCalculator defaultValue={30} bgColor="#CCC" code={102}/>
      <SimpleCalculator defaultValue={40} bgColor={"Green"} code={103}/>
      <SimpleCalculator defaultValue={60} code={104}/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
