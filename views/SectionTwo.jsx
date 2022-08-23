import {
  Flex,
  VStack,
  SimpleGrid,
  Grid,
  GridItem,
  Text
} from '@chakra-ui/react';

import { sectionTwoTranslation } from '../utils/language';

export const SectionTwo = ({ language }) => {
  return (
    <Flex direction='column' py={{ base: '2rem', lg: '1rem' }}>
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
            w='100%'
            textAlign='center'
            bg='#251D3A'
            color='white'
            p='15px'
            borderRadius='15px'
            fontFamily='figTree'
          >
            {language === 'english'
              ? Object.keys(sectionTwoTranslation)[3]
              : sectionTwoTranslation[Object.keys(sectionTwoTranslation)[3]]}
          </Text>
          <Text
            w='100%'
            textAlign='center'
            bg='#251D3A'
            color='white'
            p='15px'
            borderRadius='15px'
            fontFamily='figTree'
          >
            {language === 'english'
              ? Object.keys(sectionTwoTranslation)[4]
              : sectionTwoTranslation[Object.keys(sectionTwoTranslation)[4]]}
          </Text>
          <Text
            w='100%'
            textAlign='center'
            bg='#251D3A'
            color='white'
            p='15px'
            borderRadius='15px'
            fontFamily='figTree'
          >
            {language === 'english'
              ? Object.keys(sectionTwoTranslation)[5]
              : sectionTwoTranslation[Object.keys(sectionTwoTranslation)[5]]}
          </Text>
          <Text
            w='100%'
            textAlign='center'
            bg='#251D3A'
            color='white'
            p='15px'
            borderRadius='15px'
            fontFamily='figTree'
          >
            {language === 'english'
              ? Object.keys(sectionTwoTranslation)[6]
              : sectionTwoTranslation[Object.keys(sectionTwoTranslation)[6]]}
          </Text>
        </VStack>
      </SimpleGrid>
      <Grid
        templateColumns={{ lg: 'repeat(5, 1fr)', sm: 'repeat(2, 1fr)' }}
        p='2rem'
        px={{ base: '2rem', lg: '5rem' }}
      >
        <GridItem colSpan={1}>
          <Text fontFamily='figTree' fontSize='1.5rem' fontWeight='bold'>
            {language === 'english'
              ? Object.keys(sectionTwoTranslation)[7]
              : sectionTwoTranslation[Object.keys(sectionTwoTranslation)[7]]}
          </Text>
        </GridItem>
        <GridItem colSpan={4} fontSize='1.2rem' mt={{ sm: '1rem', lg: '0rem' }}>
          <Text fontFamily='openSans'>
            {language === 'english'
              ? Object.keys(sectionTwoTranslation)[8]
              : sectionTwoTranslation[Object.keys(sectionTwoTranslation)[8]]}
          </Text>
        </GridItem>
      </Grid>
    </Flex>
  );
};
