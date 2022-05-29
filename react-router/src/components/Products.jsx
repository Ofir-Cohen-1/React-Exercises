import React, { Component }  from "react";
import ProductsData from "../store";
import { Link } from "react-router-dom";

class Products extends Component {
  state = { products: [] };
  
  componentDidMount = () => {
    this.setState({ products: ProductsData });
    console.log(this);
  };
  productTitles = () => {
    return this.state.products.map((item) => {
      return (
        <div key={item.id}>
          <Link
            to={{
              pathname: `${this.props.location.pathname}/${item.id}`,
              product: item,
            }}
            >
            {item.title}
          </Link>
        </div>
      );
    });
  };
  
  render() {
    // console.log(this.state.products);
    return <div className="productsMenu">{this.productTitles()}</div>;
  }
}

export default Products;
