import { Fragment } from 'react';
import { useShop, useShopQuery } from '@shopify/hydrogen';
// import query from '../queries/products.js';
import query from '../queries/collections.js';

export default function Products() {
  const res = useShopQuery({
    query,
    variables: {
      handle: 'freestyle-collection',
      country: 'US',
      language: 'EN',
      numProducts: 100,
    },
    preload: true,
  });

  return (
    <Fragment>
      <h1>Products</h1>
    </Fragment>
  );
}
