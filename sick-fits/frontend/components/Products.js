import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Product from './Product';

const ALL_PRODUCT_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    products: allProducts {
      id
      name
      price
      description
      status
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductListStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

const Products = () => {
  const { data, error, loading } = useQuery(ALL_PRODUCT_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;
  return (
    <div>
      <ProductListStyled>
        {data.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductListStyled>
    </div>
  );
};

export default Products;
