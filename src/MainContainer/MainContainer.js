import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import ProductsContainer from '../ProductsContainer/ProductsContainer';
import { Container } from 'react-bootstrap';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  state = {
    productList: [],
    fetchError: '',
    inCart: [],
    isLoading: true,
    searchText: '',
    filteredData: [],
  };

  componentDidMount() {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        this.setState({
          ...this.state,
          productList: res.data,
          isLoading: false,
        });
      })
      .catch((err) => {
        this.setState({ ...this.state, fetchError: err });
      });
  }

  handleSearch = (textToSearch) => {
    let filteredArray = [];

    if (this.state.searchText !== '') {
      const newfilter = this.state.productList.filter((item) => {
        return item.title.includes(this.state.searchText);
      });

      filteredArray = newfilter;
    } else {
      filteredArray = [];
    }

    this.setState({
      ...this.state,
      filteredData: filteredArray,
      searchText: textToSearch,
    });
  };

  addToCart = (product) => {
    this.setState({ ...this.state, inCart: [...this.state.inCart, product] });
    console.log('added');
  };

  render() {
    return (
      <div>
        <Header
          handleSearch={this.handleSearch}
          searchText={this.state.searchText}
          inCart={this.state.inCart.length}
        />
        <Container>
          {this.state.isLoading ? null : (
            <ProductsContainer
              products={this.state.productList}
              searchText={this.state.searchText}
              filteredData={this.state.filteredData}
              addToCart={this.addToCart}
            />
          )}
        </Container>
      </div>
    );
  }
}

export default MainContainer;
