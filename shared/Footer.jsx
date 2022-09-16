import { Flex, Text, Link as ChakraLink, VStack } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Flex
      w='100%'
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      px={{ base: '2rem', lg: '5rem' }}
      py={{ base: '2rem', lg: '1rem' }}
      mt='auto'
      bg='#ffd700'
    >
      <Flex direction='column' alignItems='flex-start'>
        <Text fontFamily='figTree' fontWeight='bold' color='#0057b7'>
          #Hack4Ukraine
        </Text>
        <Text
          fontSize='.6rem'
          fontFamily='figTree'
          fontWeight='bold'
          color='#0057b7'
          mt='2px'
        >
          Kyiv Tech Summit © 2022
        </Text>
      </Flex>

      <ChakraLink
        color='#0057b7'
        href='https://twitter.com/saimano1996'
        isExternal
        fontSize='.6rem'
        fontFamily='figTree'
        fontWeight='bold'
      >
        built with ❤️ by Saimano
      </ChakraLink>
    </Flex>
  );
};
