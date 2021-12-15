import React from 'react';
import BreadCrumbItem from '../../Components/BreadCrumbItem/BreadCrumbItem';
import { Flex } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { cleanQuery } from '../../Utils/cleanQuery';
const BreadCrumb = () => {
  const { search } = useLocation();
  const clean = cleanQuery(search);

  const getItems = () => {
    switch (clean[0]) {
      case 'whiskys':
        return 'Bebidas alcoholicas';
      case 'pipas':
        return 'Pipas';
      case 'habanos%20y%20puros':
        return 'Tabaco';
      default:
        break;
    }
  };
  const items = [getItems(), clean[0].replace('%20', ' ').replace('%20', ' ')];
  const lastItem = items[items.length - 1];
  return (
    <Flex>
      {items &&
        items.map((item, index) => {
          return <BreadCrumbItem item={item} lastItem={lastItem} key={index} />;
        })}
    </Flex>
  );
};

export default BreadCrumb;
