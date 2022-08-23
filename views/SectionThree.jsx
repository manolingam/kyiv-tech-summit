import {
  SimpleGrid,
  VStack,
  Flex,
  Text,
  Link as ChakraLink
} from '@chakra-ui/react';

import { sectionThreeTranslation } from '../utils/language';

export const SectionThree = ({ language }) => {
  return (
    <Flex direction='column' pb={{ base: '1rem', lg: '2rem' }}>
      <Text
        fontFamily='figTree'
        bg='#0057b7'
        color='white'
        mb='1rem'
        p='1rem'
        fontWeight='bold'
        textAlign='center'
      >
        {language === 'english'
          ? Object.keys(sectionThreeTranslation)[0]
          : sectionThreeTranslation[Object.keys(sectionThreeTranslation)[0]]}
      </Text>
      <SimpleGrid
        columns={{ lg: 2, sm: 1 }}
        placeItems='center'
        gridGap='3rem'
        px={{ base: '2rem', lg: '5rem' }}
      >
        <VStack alignItems='flex-start'>
          <Text fontFamily='openSans' fontSize='.8rem' fontWeight='bold'>
            {language === 'english'
              ? Object.keys(sectionThreeTranslation)[1]
              : sectionThreeTranslation[
                  Object.keys(sectionThreeTranslation)[1]
                ]}
          </Text>
          <Text
            fontFamily='figTree'
            fontWeight='bold'
            fontSize='1.5rem'
            color='#0057b7'
          >
            {language === 'english'
              ? Object.keys(sectionThreeTranslation)[2]
              : sectionThreeTranslation[
                  Object.keys(sectionThreeTranslation)[2]
                ]}
            *
          </Text>
          <Text fontFamily='openSans' fontSize='1.2rem'>
            {language === 'english'
              ? Object.keys(sectionThreeTranslation)[3]
              : sectionThreeTranslation[
                  Object.keys(sectionThreeTranslation)[3]
                ]}
          </Text>
        </VStack>

        <VStack alignItems='flex-start'>
          <Text fontFamily='openSans' fontSize='.8rem' fontWeight='bold'>
            {language === 'english'
              ? Object.keys(sectionThreeTranslation)[4]
              : sectionThreeTranslation[
                  Object.keys(sectionThreeTranslation)[4]
                ]}
          </Text>
          <Text fontFamily='openSans' fontSize='1.2rem'>
            {language === 'english'
              ? Object.keys(sectionThreeTranslation)[5]
              : sectionThreeTranslation[
                  Object.keys(sectionThreeTranslation)[5]
                ]}
          </Text>
        </VStack>

        <VStack alignItems='flex-start' w='100%'>
          <Text fontFamily='openSans' fontSize='.8rem' fontWeight='bold'>
            {language === 'english'
              ? Object.keys(sectionThreeTranslation)[6]
              : sectionThreeTranslation[
                  Object.keys(sectionThreeTranslation)[6]
                ]}
          </Text>
          <Text
            fontFamily='figTree'
            fontWeight='bold'
            fontSize='1.5rem'
            color='#0057b7'
          >
            {language === 'english'
              ? Object.keys(sectionThreeTranslation)[7]
              : sectionThreeTranslation[
                  Object.keys(sectionThreeTranslation)[7]
                ]}
          </Text>
        </VStack>

        <VStack alignItems='flex-start' w='100%'>
          <Text fontFamily='openSans' fontSize='.8rem' fontWeight='bold'>
            {language === 'english'
              ? Object.keys(sectionThreeTranslation)[8]
              : sectionThreeTranslation[
                  Object.keys(sectionThreeTranslation)[8]
                ]}
          </Text>
          <Text fontFamily='openSans' fontSize='1.2rem'>
            {language === 'english'
              ? Object.keys(sectionThreeTranslation)[9]
              : sectionThreeTranslation[
                  Object.keys(sectionThreeTranslation)[9]
                ]}
          </Text>
        </VStack>
      </SimpleGrid>
      <Flex
        direction='column'
        alignItems='flex-start'
        mr='auto'
        mt='1rem'
        px={{ base: '2rem', lg: '5rem' }}
      >
        <Text fontFamily='openSans' fontSize='.8rem' fontWeight='bold'>
          Find more details on our events page:{' '}
        </Text>
        <ChakraLink
          href='https://kyiv-tech-summit.devpost.com'
          isExternal
          textDecoration='underline'
          color='#ffd700'
          fontWeight='bold'
          fontSize='.8rem'
        >
          kyiv-tech-summit.devpost.com
        </ChakraLink>
      </Flex>
    </Flex>
  );
};
