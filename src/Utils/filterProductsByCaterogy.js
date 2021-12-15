export const filterProductsByCategory = (products, categoria) => {
  const filteredProcuts = products.filter(
    product => product.category === categoria
  );
  return filteredProcuts;
};
