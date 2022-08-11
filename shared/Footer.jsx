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
      bg='#251D3A'
      mt='auto'
    >
      <Text
        fontFamily='figTree'
        fontWeight='bold'
        fontSize='25px'
        color='white'
      >
        #Hack4Ukraine
      </Text>

      <ChakraLink
        color='white'
        href='https://twitter.com/KyivTechSummit'
        isExternal
        w='25px'
        fontSize='25px'
      >
        <span>
          <i className='fab fa-twitter'></i>
        </span>
      </ChakraLink>
    </Flex>
  );
};
