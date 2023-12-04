import logo from './logo.svg';
import './App.css';
import SimpleCalculator from './Samples/SimpleCalculator';
import { ProductContainer } from './views/admin/warehouse/product/ProductContainer';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './views/public/Home';
import { Services } from './views/public/Services';
import { About } from './views/public/About';
import { Contact } from './views/public/Contact';


function App() {
  return (
    <div className="App">
      <h1>Mellat Bank 2023</h1>
      <ul>
        <li><Link to="/home" >Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/my-services">Services</Link> </li>
        <li><Link to="/contact-us">Contacts</Link></li>
        <li><Link to="/session03">Session03</Link></li>

      </ul>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="my-services" element={<Services />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="Session03" element={
          <>
            <ProductContainer />
            <SimpleCalculator defaultValue={20} bgColor="Red" code={101} />
            <SimpleCalculator defaultValue={30} bgColor="#CCC" code={102} />
            <SimpleCalculator defaultValue={40} bgColor={"Green"} code={103} />
            <SimpleCalculator defaultValue={60} code={104} />
          </>
        }>



        </Route>
      </Routes>
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
