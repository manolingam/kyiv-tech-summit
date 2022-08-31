import {
  Image as ChakraImage,
  Text,
  Flex,
  SimpleGrid,
  HStack,
  Link as ChakraLink
} from '@chakra-ui/react';

import { sectionSixTranslation } from '../utils/language';

import { organizers } from '../utils/constants';

export const Organizers = ({ language }) => {
  return (
    <Flex direction='column'>
      <Text
        fontFamily='figTree'
        bg='#251D3A'
        color='white'
        fontWeight='bold'
        textAlign='center'
        mt='1rem'
        p='1rem'
      >
        {language === 'english'
          ? Object.keys(sectionSixTranslation)[0]
          : sectionSixTranslation[Object.keys(sectionSixTranslation)[0]]}
      </Text>
      <Flex
        direction='column'
        alignItems='center'
        px={{ base: '2rem', lg: '5rem' }}
        py={{ base: '2rem', lg: '2rem' }}
      >
        <Text
          fontFamily='figTree'
          fontSize='1.2rem'
          textAlign='center'
          maxW='70%'
          mb='2rem'
        >
          {language === 'english'
            ? Object.keys(sectionSixTranslation)[1]
            : sectionSixTranslation[Object.keys(sectionSixTranslation)[1]]}
        </Text>

        <Flex
          direction={{ lg: 'row', sm: 'column' }}
          w='100%'
          justifyContent='space-evenly'
          alignItems='center'
          mb='2rem'
        >
          <ChakraImage
            src='/assets/logos/atlantisWorld.png'
            alt=''
            w='200px'
            h='50px'
            mb={{ sm: '1.5rem' }}
            style={{ filter: 'grayscale(1)' }}
          />
          <ChakraImage
            src='/assets/logos/unchain.png'
            alt=''
            w='250px'
            h='130px'
            mb={{ sm: '1.5rem' }}
            style={{ filter: 'grayscale(1)' }}
          />
          <ChakraImage
            src='/assets/logos/ukrainedao.png'
            alt=''
            w='200px'
            h='60px'
            mb={{ sm: '1.5rem' }}
            style={{ filter: 'grayscale(1)' }}
          />
        </Flex>

        <SimpleGrid columns={{ lg: 3, sm: 1 }} gap='2rem'>
          {organizers.map((organizer, index) => {
            return (
              <Flex
                key={index}
                direction='column'
                alignItems='center'
                justifyContent='center'
                bg='#251D3A'
                minH='150px'
                p='1rem'
                borderRadius='5px'
              >
                <ChakraImage
                  w='auto'
                  h='150px'
                  src={organizer.image}
                  alt={organizer.name}
                  borderRadius='50%'
                  style={{ filter: 'grayscale(1)' }}
                  mb='15px'
                />
                <Text
                  color='white'
                  fontSize='1.2rem'
                  fontFamily='openSans'
                  fontWeight='bold'
                >
                  {organizer.name}
                </Text>
                <Text
                  color='white'
                  textAlign='center'
                  fontFamily='openSans'
                  fontSize='0.8rem'
                  mt='5px'
                >
                  {organizer.role}
                </Text>
                <HStack mt='15px' color='white'>
                  <ChakraLink
                    href={organizer.twitter}
                    isExternal
                    fontSize='15px'
                    w='15px'
                    h='15px'
                  >
                    <span>
                      <i className='fab fa-twitter'></i>
                    </span>
                  </ChakraLink>
                  <ChakraLink
                    href={organizer.linkedin}
                    isExternal
                    fontSize='15px'
                    w='15px'
                    h='15px'
                  >
                    <span>
                      <i className='fa-brands fa-linkedin'></i>
                    </span>
                  </ChakraLink>
                  <ChakraLink
                    href={organizer.telegram}
                    isExternal
                    fontSize='15px'
                    w='15px'
                    h='15px'
                  >
                    <span>
                      <i className='fa-brands fa-telegram'></i>
                    </span>
                  </ChakraLink>
                </HStack>
              </Flex>
            );
          })}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};
