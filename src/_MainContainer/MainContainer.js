import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import ProductsContainer from '../ProductsContainer/ProductsContainer';
import { Container, Spinner } from 'react-bootstrap';
import styles from './MainContainer.module.scss';
import CarouselContainer from '../Carousel/Carousel';
class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.handleClearCart = this.handleClearCart.bind(this);
  }

  state = {
    isLoading: true,
    productList: [],
    filteredData: [],
    inCart: [],
    cartSumPrice: 0,
    searchText: '',
    fetchError: '',
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
    this.setState({
      ...this.state,
      inCart: [...this.state.inCart, product],
    });

    if (this.state.inCart.includes()) console.log('added');
  };

  handleClearCart = () => {
    this.setState({ ...this.state, inCart: [] });
  };

  render() {
    return (
      <div>
        <Header
          handleSearch={this.handleSearch}
          searchText={this.state.searchText}
          inCart={this.state.inCart}
          handleClearCart={this.handleClearCart}
        />
        <Container>
          {this.state.isLoading ? (
            <Spinner
              animation='border'
              size='xl'
              className={styles.loadingSpinner}
            />
          ) : (
            <div>
              <CarouselContainer />
              <ProductsContainer
                products={this.state.productList}
                searchText={this.state.searchText}
                filteredData={this.state.filteredData}
                addToCart={this.addToCart}
              />
            </div>
          )}
        </Container>
      </div>
    );
  }
}

export default MainContainer;
