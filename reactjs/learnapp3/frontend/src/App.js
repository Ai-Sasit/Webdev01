import "./App.css";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Aside from "./components/aside.js";
import Home from "./pages/home.js";
import ProductInfo from "./pages/product-info.js";

function App() {

  return (
    <BrowserRouter>
    <div className="grid-container">
      <Header />
      <Aside />
      <main className="main">
        <div className="content">
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/Product/:id" component={ProductInfo}/>
        </Switch>
        </div>
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
