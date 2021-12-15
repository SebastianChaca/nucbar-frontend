import { useState, useEffect } from 'react';
import { Flex, Grid, Box, Skeleton, Button, Text } from '@chakra-ui/react';
import { Card } from '../Card/Card';
import { Link } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { url } from '../../Utils/apiUrl';
const Section = ({ category }) => {
  const [showBtn, setShowBtn] = useState(false);
  const { loading, fetchData, response } = useFetch();

  const skeletonCards = [1, 2, 3, 4, 5];
  // const lastSarasa = sarasa[sarasa.length - 1] - 1;

  useEffect(() => {
    fetchData('get', `${url}/products?category=${category}`);
  }, []);

  return (
    <Flex alignContent="center" mx="30px" my="30px" flexDir="column">
      <Skeleton
        h="40px"
        w="130px"
        mb="15px"
        startColor="pink.500"
        endColor="orange.500"
        isLoaded={!loading}
      >
        <Text mb="20px" w="350px" textStyle="pagetitle">
          {category.replace('%20', ' ').replace('%20', ' ')}
        </Text>
      </Skeleton>

      <Grid
        templateColumns={{
          base: 'repeat(1, 250px)',
          sm: 'repeat(5, 250px)',
          md: 'repeat(5, 250px)',
          lg: 'repeat(5, 250px)',
          xl: 'repeat(5, 250px)',
        }}
        justifyContent="center"
      >
        {response
          ? response.data.products.slice(0, 5).map((product, index) => {
              return (
                <Card
                  key={product.id}
                  index={index}
                  showBtn={showBtn}
                  setShowBtn={setShowBtn}
                  product={product}
                  // lastElement={lastSarasa}
                />
              );
            })
          : skeletonCards.map((c, index) => {
              return <Card loading={loading} index={index} key={index} />;
            })}
      </Grid>
      {!loading && (
        <Box m="auto">
          <Link
            to={{
              pathname: `products`,
              search: `category=${category}&page=1&limit=4`,
            }}
          >
            <Button
              color="nucba.form"
              bg="nucba.primary"
              _focus={{ outline: 'none' }}
              _hover={{ bg: 'nucba.hover' }}
              mt="20px"
              boxShadow="lg"
            >
              Ver Todos
            </Button>
          </Link>
        </Box>
      )}
    </Flex>
  );
};

export default Section;
