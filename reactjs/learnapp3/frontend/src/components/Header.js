import "./Product.css"
function Header(props) {
    return (
        <header className="header">
        <div className="brand">
          <button onclick="openMenu()">&#9776;</button>
          <a href="index.html">amazona</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
    );
}

export default Header;