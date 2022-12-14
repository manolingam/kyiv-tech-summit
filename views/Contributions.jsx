import {
  Flex,
  SimpleGrid,
  Link as ChakraLink,
  Text,
  HStack
} from '@chakra-ui/react';

import { sectionNineTranslation } from '../utils/language';

export const Contributions = ({ language }) => {
  const contributionOptions = [
    {
      name:
        language === 'english'
          ? Object.keys(sectionNineTranslation)[1]
          : sectionNineTranslation[Object.keys(sectionNineTranslation)[1]],
      class: 'fa-solid fa-hand-holding-dollar'
    },
    {
      name:
        language === 'english'
          ? Object.keys(sectionNineTranslation)[2]
          : sectionNineTranslation[Object.keys(sectionNineTranslation)[2]],
      class: 'fa-solid fa-handshake'
    },
    {
      name:
        language === 'english'
          ? Object.keys(sectionNineTranslation)[3]
          : sectionNineTranslation[Object.keys(sectionNineTranslation)[3]],
      class: 'fa-solid fa-hand-holding-hand'
    },
    {
      name:
        language === 'english'
          ? Object.keys(sectionNineTranslation)[4]
          : sectionNineTranslation[Object.keys(sectionNineTranslation)[4]],
      class: 'fa-solid fa-book-open-reader'
    },
    {
      name:
        language === 'english'
          ? Object.keys(sectionNineTranslation)[5]
          : sectionNineTranslation[Object.keys(sectionNineTranslation)[5]],
      class: 'fa-solid fa-code'
    }
  ];
  return (
    <Flex
      w='100%'
      direction='column'
      alignItems='center'
      justifyContent='center'
      py={{ base: '2rem', lg: '1rem' }}
      px={{ base: '2rem', lg: '5rem' }}
      bg='#F1F1F1'
    >
      <Text fontFamily='openSans' fontWeight='bold'>
        {language === 'english'
          ? Object.keys(sectionNineTranslation)[0]
          : sectionNineTranslation[Object.keys(sectionNineTranslation)[0]]}
      </Text>

      <SimpleGrid
        w={{ lg: '70%', sm: '80%' }}
        columns={{ lg: 3, sm: 1 }}
        gap='1rem'
        mt='2rem'
      >
        {contributionOptions.slice(0, 3).map((contribution, index) => {
          return (
            <ChakraLink
              key={index}
              w='100%'
              p='.5rem'
              borderRadius='25px'
              href='https://forms.gle/SDGLyBSuSXQL8PHB7'
              bg='#0057b7'
              color='white'
              _hover={{ textDecoration: 'none', opacity: '0.8' }}
              isExternal
            >
              <HStack h='100%' justifyContent='center'>
                <span>
                  <i className={contribution.class}></i>
                </span>
                <Text fontFamily='figTree'>{contribution.name}</Text>
              </HStack>
            </ChakraLink>
          );
        })}
      </SimpleGrid>

      <SimpleGrid
        w={{ lg: '55%', sm: '80%' }}
        columns={{ lg: 2, sm: 1 }}
        gap='1rem'
        mt='1rem'
      >
        {contributionOptions.slice(3, 5).map((contribution, index) => {
          return (
            <ChakraLink
              key={index}
              w='100%'
              p='.5rem'
              bg='#0057b7'
              color='white'
              borderRadius='25px'
              href={
                index === 1
                  ? 'https://kyiv-tech-summit.devpost.com'
                  : 'https://forms.gle/SDGLyBSuSXQL8PHB7'
              }
              isExternal
              _hover={{ textDecoration: 'none', opacity: '0.8' }}
            >
              <HStack h='100%' justifyContent='center'>
                <span>
                  <i className={contribution.class}></i>
                </span>
                <Text fontFamily='figTree'>{contribution.name}</Text>
              </HStack>
            </ChakraLink>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};
