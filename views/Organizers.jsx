import {
  Text,
  Flex,
  SimpleGrid,
  HStack,
  Link as ChakraLink,
  Box
} from '@chakra-ui/react';
import Image from 'next/image';

import { sectionSixTranslation } from '../utils/language';

import { organizers } from '../utils/constants';

import unchain_logo from '../public/assets/logos/unchain.png';
import ukraineDao_logo from '../public/assets/logos/ukrainedao.png';
import atlantis_logo from '../public/assets/logos/atlantisWorld.png';

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
          maxW={{ lg: '70%', sm: '100%' }}
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
          <Box
            w='200px'
            h='50px'
            mb={{ sm: '1.5rem' }}
            style={{ filter: 'grayscale(1)' }}
          >
            <Image
              src={atlantis_logo}
              alt='atlantis world'
              placeholder='blur'
            />
          </Box>
          <Box
            w='250px'
            h='130px'
            mb={{ sm: '1.5rem' }}
            style={{ filter: 'grayscale(1)' }}
          >
            <Image src={unchain_logo} alt='unchain' placeholder='blur' />
          </Box>
          <Box
            w='200px'
            h='60px'
            mb={{ sm: '1.5rem' }}
            style={{ filter: 'grayscale(1)' }}
          >
            <Image src={ukraineDao_logo} alt='Ukraine Dao' placeholder='blur' />
          </Box>
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
                <Box
                  w='150px'
                  h='150px'
                  overflow='hidden'
                  borderRadius='50%'
                  style={{ filter: 'grayscale(1)' }}
                  mb='15px'
                >
                  <Image
                    src={organizer.image}
                    alt={organizer.name}
                    placeholder='blur'
                  />
                </Box>
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
