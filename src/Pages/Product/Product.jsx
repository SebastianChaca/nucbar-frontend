import { useEffect } from 'react';
import ProductDetail from '../../Components/ProductDetail/ProductDetail';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { url } from '../../Utils/apiUrl';
import useFetch from '../../Hooks/useFetch';
import { fetchProducts } from '../../Redux/Actions/prodcutsActions';
import { LoadingSpinner } from '../../Components/Shared/SharedComponents';

const Product = () => {
  const { id } = useParams();
  const { loading, fetchData } = useFetch();
  const { products } = useSelector(state => state.products);
  const selectedProduct = products?.data?.products.find(p => p.id === id);

  useEffect(() => {
    if (!products) {
      fetchData('get', `${url}/products`, fetchProducts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading || !selectedProduct) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <ProductDetail product={selectedProduct} />
    </>
  );
};

export default Product;
