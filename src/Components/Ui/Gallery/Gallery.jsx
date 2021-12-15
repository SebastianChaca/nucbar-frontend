import React, { useState } from 'react';
import { Image, Box, Flex } from '@chakra-ui/react';

import { ArrowBtn } from './ArrowBtn';
import { motion, AnimatePresence } from 'framer-motion';
const Gallery = () => {
  const [current, setCurrent] = useState(0);

  const array = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1612659429327-8f59b894959b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1603824255842-9230ae07c391?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=888&q=80',
    },
  ];
  const handleRigthArrow = () => {
    if (current === array.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  const handleLeftArrow = () => {
    if (current === 0) {
      setCurrent(array.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  const Slideshow = ({ children }) => (
    <AnimatePresence>
      <motion.div
        initial={{
          x: 1000,
          opacity: 0,
        }}
        animate={{ x: 0, opacity: 1, y: 0 }}
        transition={{
          opacity: { duration: 0.5 },
          x: { type: 'spring', stiffness: 300, damping: 30, duration: 0.2 },
        }}
        exit={{ x: -1000, opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );

  return (
    <Box position="relative" w="100%">
      <Slideshow>
        <Box bg="nucba.primary">
          <Image
            src={array[current].src}
            w="100%"
            h="360px"
            objectFit="cover"
            className="active"
          />
        </Box>
      </Slideshow>
      <Flex position="absolute" left="45%" top="320px">
        {array.map((c, i) => {
          return (
            <Box boxShadow="2xl" key={c.id}>
              <Box
                h="15px"
                w="15px"
                borderRadius="100%"
                bg={i === current ? 'purple.300' : 'purple.600'}
                mx="10px"
                opacity="0.8"
                boxShadow="inner"
              />
            </Box>
          );
        })}
      </Flex>
      <ArrowBtn left handleLeftArrow={handleLeftArrow} />
      <ArrowBtn rigth handleRigthArrow={handleRigthArrow} />
    </Box>
  );
};

export const MemoGallery = React.memo(Gallery);
