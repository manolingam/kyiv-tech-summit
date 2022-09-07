import {
  Flex,
  Grid,
  GridItem,
  Text,
  Button,
  Box,
  SimpleGrid,
  Link as ChakraLink
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import { sectionOneTranslation } from '../utils/language';

import kyiv_tech_summit_mono_logo from '../public/assets/logos/kyiv_tech_summit_mono.png';

export const SplashIntro = ({ language }) => {
  return (
    <>
      <SimpleGrid w='100%' columns={{ lg: '2', sm: '1' }} cursor='pointer'>
        <Link href='/schedule' passHref>
          <Text
            fontFamily='figTree'
            color='white'
            p='.5rem'
            fontWeight='bold'
            textAlign='center'
            background='linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9);'
            backgroundSize='200% 200%;'
            animation='gradient 5s ease infinite'
          >
            Latest - View Event Schedule
          </Text>
        </Link>
        <ChakraLink
          isExternal
          href='https://www.youtube.com/watch?v=lQI2pXXxC7A'
          _hover={{
            textDecoration: 'none'
          }}
        >
          <Text
            fontFamily='figTree'
            color='white'
            p='.5rem'
            fontWeight='bold'
            textAlign='center'
            bg='#FF0000'
          >
            <i className='fa-brands fa-youtube'></i> View Day 2 Stream
          </Text>
        </ChakraLink>
      </SimpleGrid>

      <Grid
        templateColumns={{ lg: 'repeat(5, 1fr)', sm: 'repeat(2, 1fr)' }}
        px={{ base: '2rem', lg: '5rem' }}
        py={{ base: '2rem', lg: '3rem' }}
      >
        <GridItem colSpan={3}>
          <Text fontFamily='openSans' fontSize='1.5rem'>
            {language === 'english'
              ? Object.keys(sectionOneTranslation)[0]
              : sectionOneTranslation[Object.keys(sectionOneTranslation)[0]]}
          </Text>
          <Text
            fontFamily='openSans'
            fontWeight='bold'
            color='#0057b7'
            mt='1rem'
          >
            {language === 'english'
              ? Object.keys(sectionOneTranslation)[1]
              : sectionOneTranslation[Object.keys(sectionOneTranslation)[1]]}
          </Text>
          <Flex direction={{ lg: 'row', sm: 'column' }}>
            <Button
              w='100%'
              fontSize='1rem'
              fontFamily='figTree'
              bg='#0057b7'
              color='white'
              p='1.5rem'
              mt='1rem'
              mr='1rem'
              textTransform='uppercase'
              onClick={() =>
                window.open('https://kyiv-tech-summit.devpost.com', '_blank')
              }
              _hover={{ opacity: '0.8' }}
            >
              {language === 'english'
                ? Object.keys(sectionOneTranslation)[2]
                : sectionOneTranslation[Object.keys(sectionOneTranslation)[2]]}
            </Button>
            <Button
              w='100%'
              fontSize='1rem'
              fontFamily='figTree'
              border='2px solid #0057b7'
              color='#0057b7'
              p='1.5rem'
              mt='1rem'
              textTransform='uppercase'
              onClick={() =>
                window.open('https://join.kyivtechsummit.com', '_blank')
              }
              _hover={{ opacity: '0.8' }}
            >
              {language === 'english'
                ? Object.keys(sectionOneTranslation)[3]
                : sectionOneTranslation[Object.keys(sectionOneTranslation)[3]]}
            </Button>
          </Flex>
        </GridItem>
        <GridItem colSpan={2}>
          <Box w='250px' m='auto' mt={{ sm: '2rem', lg: 'auto' }}>
            <Image
              src={kyiv_tech_summit_mono_logo}
              alt='Kyiv Tech Summit'
              placeholder='blur'
              priority
            />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};
