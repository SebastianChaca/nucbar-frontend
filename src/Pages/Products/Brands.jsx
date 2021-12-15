import React from 'react';

import { useSelector } from 'react-redux';
import { Spinner } from '@chakra-ui/react';
import BrandStats from '../../Components/BrandStats/BrandStats';
const Brands = ({ loading }) => {
  const { productsStats } = useSelector(state => state.stats);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      {productsStats &&
        productsStats.stats.map((stat, index) => {
          return (
            <BrandStats key={index} name={stat._id} quantity={stat.total} />
          );
        })}
    </div>
  );
};

export default Brands;
