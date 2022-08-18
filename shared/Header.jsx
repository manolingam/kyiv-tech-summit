import {
  Flex,
  Image as ChakraImage,
  Link as ChakraLink,
  Box
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
            w={{ lg: '300px', sm: '170px' }}
          />
        </Flex>
      </Link>

      <Box>
        <ChakraLink
          href='https://t.me/kyivtechsummit'
          isExternal
          fontSize={{ lg: '25px', sm: '20px' }}
          mr={{ lg: '20px', sm: '15px' }}
        >
          <span>
            <i className='fa-brands fa-telegram'></i>
          </span>
        </ChakraLink>
        <ChakraLink
          href='https://discord.gg/nJGCev3Y2c'
          isExternal
          fontSize={{ lg: '25px', sm: '20px' }}
          mr={{ lg: '20px', sm: '15px' }}
        >
          <span>
            <i className='fa-brands fa-discord'></i>
          </span>
        </ChakraLink>
        <ChakraLink
          href='https://twitter.com/KyivTechSummit'
          isExternal
          fontSize={{ lg: '25px', sm: '20px' }}
        >
          <span>
            <i className='fab fa-twitter'></i>
          </span>
        </ChakraLink>
      </Box>
    </Flex>
  );
};
