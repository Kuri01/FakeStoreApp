import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import ProductsContainer from '../ProductsContainer/ProductsContainer';
import { Container, Spinner } from 'react-bootstrap';
import styles from './MainContainer.module.scss';
import CarouselContainer from '../Carousel/Carousel';
import { Alert } from 'react-bootstrap';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.handleClearCart = this.handleClearCart.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  state = {
    users: [
      {
        id: 1,
        email: 'user@user.com',
        password: 'user',
        accessLevel: 'user',
      },
      {
        id: 2,
        email: 'admin@admin.com',
        password: 'admin',
        accessLevel: 'admin',
      },
      { email: 'user@user.com' },
      1,
    ],
    accessAs: 'user',
    currentUser: undefined,
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

  handleLogout = () => {
    this.setState({ ...this.state, currentUser: undefined, accessAs: 'user' });
  };

  handleLogin = (user) => {
    let accessAs;

    if (user.accessLevel === 'admin') {
      accessAs = 'admin';
    } else if (user.accessLevel === 'admin') {
      accessAs = 'user';
    } else {
      console.log('Wrong access level');
    }
    this.setState({ ...this.state, currentUser: user, accessAs: accessAs });
    console.log('Logged as: ', this.state);
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
          users={this.state.users}
          currentUser={this.state.currentUser}
          accessAs={this.state.accessAs}
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
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

              {this.state.accessAs !== 'admin' ? (
                <Alert variant='danger'>
                  You don't have access to this page! Log in as admin to see
                  products
                </Alert>
              ) : (
                <ProductsContainer
                  products={this.state.productList}
                  searchText={this.state.searchText}
                  filteredData={this.state.filteredData}
                  addToCart={this.addToCart}
                />
              )}
            </div>
          )}
        </Container>
      </div>
    );
  }
}

export default MainContainer;
