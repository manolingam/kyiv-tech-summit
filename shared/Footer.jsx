import { Flex, Text, Link as ChakraLink } from '@chakra-ui/react';

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
      <Text fontFamily='figTree' fontWeight='bold' color='#0057b7' mr='1rem'>
        #Hack4Ukraine
      </Text>

      <ChakraLink
        color='#0057b7'
        href='https://twitter.com/KyivTechSummit'
        isExternal
        fontSize='15px'
      >
        <span>
          <i className='fab fa-twitter'></i>
        </span>
      </ChakraLink>

      <Text
        fontSize='.6rem'
        fontFamily='figTree'
        fontWeight='bold'
        color='#0057b7'
        mr='1rem'
      >
        Kyiv Tech Summit © 2022
      </Text>
    </Flex>
  );
};
