import { Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

import { Meta } from './Meta';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState('');

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.removeEventListener('resize', () => {});
    window.addEventListener('resize', (e) => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <>
      <Meta />
      <Flex
        direction='column'
        minH='100vh'
        maxW='80rem'
        alignItems='center'
        mx='auto'
      >
        <Header windowWidth={windowWidth} />
        {children}
        <Footer />
      </Flex>
    </>
  );
};
