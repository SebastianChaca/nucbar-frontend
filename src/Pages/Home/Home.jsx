import React from 'react';
import Section from '../../Components/Section/Section';
import { MemoGallery } from '../../Components/Ui/Gallery/Gallery';

export const Home = () => {
  //Test
  // const queryClean = search
  //   .replace('?', '')
  //   .split('category')
  //   .join('')
  //   .split('=')
  //   .join('')
  //   .split('&');

  // useEffect(() => {
  //   history.push({
  //     search: `?category=${
  //       queryClean[0] ? queryClean[0] : 'Whiskys'
  //     }&category=${
  //       queryClean[1] ? queryClean[1] : 'Habanos%20y%20puros'
  //     }&category=${queryClean[2] ? queryClean[2] : 'Pipas'}`,
  //   });
  // }, [search, history]);

  //esto tiene que venir dle backoffice
  const categorias = ['whiskys', 'habanos%20y%20puros', 'pipas'];
  return (
    <>
      <MemoGallery />
      {categorias &&
        categorias.map(categoria => {
          return <Section category={categoria} key={categoria} />;
        })}
    </>
  );
};
export default Home;
