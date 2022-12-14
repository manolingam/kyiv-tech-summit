import {
  Flex,
  VStack,
  SimpleGrid,
  Grid,
  GridItem,
  Text,
  Box
} from '@chakra-ui/react';
import Image from 'next/image';

import { sectionTwoTranslation } from '../utils/language';

import ministry_logo from '../public/assets/logos/ministryOfUkraine.png';

export const Goals = ({ language }) => {
  return (
    <Flex direction='column' pt={{ base: '2rem', lg: '1rem' }}>
      <VStack
        justifyContent='center'
        alignItems='center'
        bg='#ffd700'
        py='2rem'
        px={{ base: '2rem', lg: '5rem' }}
      >
        <Text
          fontFamily='figTree'
          fontSize='1.5rem'
          color='#0057b7'
          fontWeight='bold'
        >
          {language === 'english'
            ? Object.keys(sectionTwoTranslation)[0]
            : sectionTwoTranslation[Object.keys(sectionTwoTranslation)[0]]}
        </Text>
        <Text
          fontFamily='figTree'
          fontSize='1.2rem'
          textAlign='center'
          color='#0057b7'
          w={{ lg: '70%', sm: '100%' }}
        >
          {language === 'english'
            ? Object.keys(sectionTwoTranslation)[1]
            : sectionTwoTranslation[Object.keys(sectionTwoTranslation)[1]]}
        </Text>
      </VStack>
      <SimpleGrid
        columns={{ lg: 2, sm: 1 }}
        p='2rem'
        placeItems='center'
        px={{ base: '2rem', lg: '5rem' }}
      >
        <Text fontFamily='openSans' fontSize='1.2rem'>
          {language === 'english'
            ? Object.keys(sectionTwoTranslation)[2]
            : sectionTwoTranslation[Object.keys(sectionTwoTranslation)[2]]}
        </Text>
        <VStack mt={{ sm: '2rem' }}>
          <Text
            w={{ lg: '80%', sm: '100%' }}
            textAlign='center'
            bg='#251D3A'
            color='white'
            p='15px'
            borderRadius='15px'
            fontFamily='figTree'
            fontSize='.8rem'
          >
            {language === 'english'
              ? Object.keys(sectionTwoTranslation)[3]
              : sectionTwoTranslation[Object.keys(sectionTwoTranslation)[3]]}
          </Text>
          <Text
            w={{ lg: '80%', sm: '100%' }}
            textAlign='center'
            bg='#251D3A'
            color='white'
            p='15px'
            borderRadius='15px'
            fontFamily='figTree'
            fontSize='.8rem'
          >
            {language === 'english'
              ? Object.keys(sectionTwoTranslation)[4]
              : sectionTwoTranslation[Object.keys(sectionTwoTranslation)[4]]}
          </Text>
          <Text
            w={{ lg: '80%', sm: '100%' }}
            textAlign='center'
            bg='#251D3A'
            color='white'
            p='15px'
            borderRadius='15px'
            fontFamily='figTree'
            fontSize='.8rem'
          >
            {language === 'english'
              ? Object.keys(sectionTwoTranslation)[5]
              : sectionTwoTranslation[Object.keys(sectionTwoTranslation)[5]]}
          </Text>
          <Text
            w={{ lg: '80%', sm: '100%' }}
            textAlign='center'
            bg='#251D3A'
            color='white'
            p='15px'
            borderRadius='15px'
            fontFamily='figTree'
            fontSize='.8rem'
          >
            {language === 'english'
              ? Object.keys(sectionTwoTranslation)[6]
              : sectionTwoTranslation[Object.keys(sectionTwoTranslation)[6]]}
          </Text>
          <Text
            w={{ lg: '80%', sm: '100%' }}
            textAlign='center'
            bg='#251D3A'
            color='white'
            p='15px'
            borderRadius='15px'
            fontFamily='figTree'
            fontSize='.8rem'
          >
            {language === 'english'
              ? Object.keys(sectionTwoTranslation)[7]
              : sectionTwoTranslation[Object.keys(sectionTwoTranslation)[7]]}
          </Text>
        </VStack>
      </SimpleGrid>
      <Grid
        templateColumns={{ lg: 'repeat(5, 1fr)', sm: 'repeat(2, 1fr)' }}
        p='2rem'
        px={{ base: '2rem', lg: '5rem' }}
      >
        <GridItem colSpan={1}>
          <Text
            fontFamily='figTree'
            fontSize='1.5rem'
            fontWeight='bold'
            style={{ whiteSpace: 'pre-line' }}
          >
            {language === 'english'
              ? Object.keys(sectionTwoTranslation)[8]
              : sectionTwoTranslation[Object.keys(sectionTwoTranslation)[8]]}
          </Text>
        </GridItem>
        <GridItem colSpan={4} fontSize='1.2rem' mt={{ sm: '1rem', lg: '0rem' }}>
          <Text fontFamily='openSans'>
            {language === 'english'
              ? Object.keys(sectionTwoTranslation)[9]
              : sectionTwoTranslation[Object.keys(sectionTwoTranslation)[9]]}
          </Text>
        </GridItem>
      </Grid>
      <Flex
        w='100%'
        direction='column'
        justifyContent='center'
        alignItems='center'
        py='2rem'
        bg='#0057b7'
      >
        <Box
          display='flex'
          alignItems={{ lg: 'flex-start', sm: 'center' }}
          justifyContent='flex-end'
          mb='2rem'
        >
          <Text fontFamily='openSans' color='white' fontSize='1.2rem'>
            {language === 'english'
              ? Object.keys(sectionTwoTranslation)[10]
              : sectionTwoTranslation[Object.keys(sectionTwoTranslation)[10]]}
          </Text>
        </Box>
        <Box display='flex' alignItems='flex-start' cursor='pointer'>
          <Box
            style={{ filter: 'brightness(0) invert(1)' }}
            onClick={() => window.open('https://thedigital.gov.ua', '_blank')}
            w={{
              lg: '500px',
              sm: '300px'
            }}
          >
            <Image
              src={ministry_logo}
              alt='Ministry of Ukraine'
              placeholder='blur'
              priority
            />
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};
