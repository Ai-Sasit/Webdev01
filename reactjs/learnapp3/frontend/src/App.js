import "./App.css";
import Product from "./components/Product.js";
import Header from "./components/Header.js";
import Aside from "./components/aside.js";
import data from "./data.js";

function App() {

  return (
    <div className="grid-container">
      <Header />
      <Aside />
      <main className="main">
        <div className="content">
          <ul className="products">
            {data.Product.map((e) => (<li><Product element={e} /></li>))};
          </ul>
        </div>
      </main>
      <footer className="footer">All right reserved.</footer>
    </div>
  );
}

export default App;
