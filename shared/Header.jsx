import {
  Flex,
  Image as ChakraImage,
  Link as ChakraLink
} from '@chakra-ui/react';

import Link from 'next/link';

export const Header = ({ windowWidth }) => {
  return (
    <Flex
      w='100%'
      justifyContent='space-between'
      alignItems='center'
      px={{ base: '2rem', lg: '5rem' }}
      py={{ base: '1rem', lg: '1rem' }}
      boxShadow='0px 2px 10px rgba(0, 70, 145, 0.2)'
    >
      <Link href='/' passHref>
        <Flex
          direction='row'
          alignItems='center'
          justifyContent='center'
          cursor='pointer'
        >
          <ChakraImage
            src='/assets/logos/kyiv_tech_summit.png'
            alt='logo'
            w={{ lg: '300px', sm: '150px' }}
          />
        </Flex>
      </Link>

      <ChakraLink
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
