import React from "react";
import ProductsData from "../store";
import { Link } from "react-router-dom";

class Products extends React.Component {
  state = { products: [] };

  componentDidMount = () => {
    this.setState({ products: ProductsData });
  };

  productTitles = () => {
    return this.state.products.map((product) => {
      return (
        <div key={product.id}>
          <Link
            to={{
              pathname: `${this.props.location.pathname}/${product.id}`,
              product: product,
            }}
          >
            {product.title}
          </Link>
        </div>
      );
    });
  };

  render() {
    return <div className="productsMenu">{this.productTitles()}</div>;
  }
}

export default Products;
