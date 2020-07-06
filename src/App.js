import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <h1> Videoteka 2 </h1> <FilterableProductTable products={PRODUCTS} />
      </main>
    );
  }
}

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2"> {category} </th>
      </tr>
    );
  }
}

class ProductRow extends Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? (
      product.name
    ) : (
      <span
        style={{
          color: "red",
        }}
      >
        {product.name}
      </span>
    );
    return (
      <tr>
        <td> {name} </td> <td> {product.price} </td>
      </tr>
    );
  }
}

class ProductTable extends Component {
  render() {
    const filterText = this.props.filterText;
    const inSTockOnly = this.props.inSTockOnly;

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }

      if (inSTockOnly && !product.stocked) {
        return;
      }

      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th> Name </th> <th> Prices </th>
          </tr>
        </thead>
        <tbody> {rows} </tbody>
      </table>
    );
  }
}

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterRextChange = this.handleFilterRextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterRextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    const filterText = this.props.filterText;
    const inSTockOnly = this.props.inSTockOnly;

    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={this.handleFilterRextChange}
        ></input>
        <p>
          <input
            type="chechkbox"
            checked={inSTockOnly}
            onChange={this.handleInStockChange}
          >
            Only show products in stock{" "}
          </input>
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inSTockOnly: false,
    };

    this.handleFilterRextChange = this.handleFilterRextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  handleFilterRextChange(filterText) {
    this.setState({
      filterText: filterText,
    });
  }

  handleInStockChange(inSTockOnly) {
    this.setState({
      inSTockOnly: inSTockOnly,
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inSTockOnly={this.state.inSTockOnly}
          onFilterTextChange={this.handleFilterRextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inSTockOnly={this.state.inSTockOnly}
        />
      </div>
    );
  }
}

const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  {
    category: "Electronics",
    price: "$199.99",
    stocked: true,
    name: "Nexus 7",
  },
];

export default App;
