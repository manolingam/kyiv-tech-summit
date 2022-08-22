import {
  Flex,
  SimpleGrid,
  Box,
  Image as ChakraImage,
  Text
} from '@chakra-ui/react';

const partners = [
  {
    image: '/assets/partners/cryptoDiffer.png',
    link: 'https://cryptodiffer.com/',
    type: 'Media'
  },
  {
    image: '/assets/partners/devPost.png',
    link: 'https://devpost.com/',
    type: 'Tech'
  },
  {
    image: '/assets/partners/nym.png',
    link: 'https://nymtech.net/',
    type: 'General'
  },
  {
    image: '/assets/partners/forkLog.png',
    link: 'https://forklog.com/',
    type: 'Media'
  },
  {
    image: '/assets/partners/sigmaSoftware.jpeg',
    link: 'https://university.sigma.software/en/',
    type: 'Community'
  },
  {
    image: '/assets/partners/incrypted.png',
    link: 'https://incrypted.com/',
    type: 'Media'
  }
];

export const SectionSeven = () => {
  return (
    <Flex
      w='100%'
      direction='column'
      px={{ base: '2rem', lg: '5rem' }}
      py={{ base: '2rem', lg: '2rem' }}
      id='partners'
    >
      <SimpleGrid
        columns={{ lg: 4, md: 3, sm: 2 }}
        placeItems='center'
        gridGap='1rem'
        mt='1rem'
        p='2rem'
        bg='#251D3A'
        borderRadius='5px'
      >
        <Box
          h='100px'
          w='100%'
          display='flex'
          alignItems='center'
          justifyContent='center'
          bg='#251D3A'
          borderRadius='10px'
          color='white'
          p='1rem'
        >
          <Text fontFamily='openSans' fontSize='1.2rem'>
            Our Partners
          </Text>
        </Box>
        {partners.map((partner, index) => {
          return (
            <Box
              key={index}
              w='100%'
              h='125px'
              display='flex'
              alignItems='center'
              borderRadius='10px'
              bg='white'
              p='1rem'
              onClick={() => window.open(partner.link, '_blank')}
              cursor='pointer'
              position='relative'
            >
              <ChakraImage
                style={{ filter: 'grayscale(1)' }}
                src={partner.image}
                alt='partner'
                w={{ lg: '100px', sm: '70px' }}
                m='auto'
              />
              <Text
                position='absolute'
                color='white'
                fontFamily='figTree'
                fontSize={{ lg: '.7rem', sm: '.5rem' }}
                textTransform='uppercase'
                bg='#251D3A'
                bottom='0'
                left='0'
                p='5px'
              >
                {partner.type}
              </Text>
            </Box>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};
