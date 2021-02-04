import React, {useEffect} from 'react';
//import axios from "axios";
//import data from "../data.js";
import "./itemsdetail.css";
import {DetailProduct} from "../actions/products.js";
import {useDispatch, useSelector} from "react-redux";

function ProductInfo(props) {
  //const product = data.Product.find(element => element._id === props.match.params.id);
  //const [product, setProduct] = useState({});
  const productDetail = useSelector(state => state.productDetail);
  const {product, loading, error} = productDetail;
  const dispatch = useDispatch();

  useEffect(() => { 
    /*const fetchdata = async (id) => {
      const {data} = await axios.get(`/api/product/${id}`);
      setProduct(data);
    };
    fetchdata(props.match.params.id); */
    dispatch(DetailProduct(props.match.params.id));
    return () => {}; /* eslint-disable-next-line */
  }, []);
    return loading? <div> Loading... </div>:
            error? <div> Error! {error}</div>: (
      <div className="full">
        <div className="detail">
          {/* eslint-disable-next-line */}
          <div className="detail-image"><img src={product.pic} /></div>
          <div className="detail-info">
            <ul>
              <li><h5>Name: {product.name}</h5></li>
              <li><h5>Brand: {product.brand}</h5></li>
              <li><h5>Price: {product.price}</h5></li>
              <li><h5>Rating: {product.rate}</h5></li>
            </ul>
          </div>
          <div className="detail-action">
            <ul>
              <li>Price: {product.price}</li>
              <li>Status: In Process</li>
              <li>
                Amount: &nbsp;
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </li>
              <li><button className="checkout">Add</button></li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default ProductInfo;