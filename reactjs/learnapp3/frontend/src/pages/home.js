import React, { useEffect } from "react";
//import axios from "axios";
//import data from "../data.js";
import Product from "../components/Product.js";
import {listProducts} from "../actions/products.js";
import {useDispatch, useSelector} from "react-redux";

function Home(props) {
  //const [products, setProducts] = useState([]);
  const ProductList = useSelector(state => state.productList);
  const {products, loading, error} = ProductList;
  const dispatch = useDispatch();

  useEffect(() => {
    /*const fetchdata = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchdata();*/
    dispatch(listProducts());
    return () => {}; /* eslint-disable-next-line */
  }, []);

  return loading? <div> Loading... </div>:
          error? <div> Error! {error}</div>: (
    <div>
      <h1>First Page</h1>
      <ul className="products">
        {products.map((e) => (
          <li>
            <Product element={e} />
          </li>
        ))}
        ;
      </ul>
    </div>
  );
}

export default Home;
