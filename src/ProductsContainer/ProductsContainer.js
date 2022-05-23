import { Row } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';

const ProductsContainer = (props) => {
  const { products, searchText, filteredData } = props;
  return (
    <Row md={8}>
      {searchText === ''
        ? products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={props.addToCart}
            />
          ))
        : console.log('want to search')}
      {filteredData.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={props.addToCart}
        />
      ))}
    </Row>
  );
};

export default ProductsContainer;
