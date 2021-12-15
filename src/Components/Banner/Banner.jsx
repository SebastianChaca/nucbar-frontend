import { Image } from '@chakra-ui/image';
import BannerImg from '../../Assets/bar.JPG';
const Banner = ({ category }) => {
  // const mocksImages = [
  //   {
  //     id: 1,
  //     src: 'https://images.unsplash.com/photo-1600907055786-96ab26a3c803?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
  //     cat: 'Pipa',
  //   },
  // ];
  // const src = mocksImages.find(mock => mock.cat === category);
  // const defaultImage =
  //   'https://images.unsplash.com/photo-1567400358510-f027b3196d5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80';
  return (
    <div>
      <Image
        src={BannerImg}
        boxSize="100px"
        w="100%"
        h="150px"
        objectFit="cover"
      />
    </div>
  );
};

export default Banner;
