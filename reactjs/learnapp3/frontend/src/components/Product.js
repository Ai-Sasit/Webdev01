import {Link} from 'react-router-dom';
function Product(props) {
  return (
    <div className="product">
      <img
        className="product-image"
        src={props.element.pic}
        alt="product"
      />
      <div className="product-name">
        <Link to={`/product/${props.element._id}`}>{props.element.name}</Link>
      </div>
      <div className="product-brand">{props.element.brand}</div>
      <div className="product-price">${props.element.price}</div>
      <div className="product-rating">{props.element.rate} Stars (10 Reviews)</div>
    </div>
  );
}

export default Product;
