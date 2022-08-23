import {
  Flex,
  SimpleGrid,
  Box,
  Image as ChakraImage,
  Text
} from '@chakra-ui/react';

const sponsors = [
  {
    image: '/assets/sponsors/aragon.png',
    link: 'https://aragon.org/'
  },
  {
    image: '/assets/sponsors/near.png',
    link: 'https://near.org/'
  },
  {
    image: '/assets/sponsors/nym.png',
    link: 'https://nymtech.net/'
  }
];

export const SectionEight = () => {
  return (
    <Flex
      w='100%'
      direction='column'
      px={{ base: '2rem', lg: '5rem' }}
      pb={{ base: '2rem', lg: '2rem' }}
      bg='#251D3A'
    >
      <Flex
        direction={{ lg: 'row', sm: 'column' }}
        justifyContent='flex-start'
        my='2rem'
      >
        <Box
          h='100px'
          w='30%'
          display='flex'
          alignItems={{ lg: 'flex-start', sm: 'center' }}
          justifyContent='flex-start'
          bg='#251D3A'
          borderRadius='10px'
          color='white'
          p={{ lg: '1rem', sm: '0' }}
          mr='1rem'
        >
          <Text fontFamily='openSans' fontSize='1.2rem'>
            Our Sponsors
          </Text>
        </Box>
        <SimpleGrid
          w='100%'
          columns={{ lg: 4, md: 3, sm: 2 }}
          placeItems='center'
          gridGap='1rem'
          borderRadius='5px'
        >
          {sponsors.map((sponsor, index) => {
            return (
              <Box
                key={index}
                w='100%'
                h='125px'
                display='flex'
                alignItems='center'
                border='2px solid #251D3A'
                borderRadius='10px'
                bg='white'
                p='1rem'
                onClick={() => window.open(sponsor.link, '_blank')}
                cursor='pointer'
              >
                <ChakraImage
                  style={{ filter: 'grayscale(1)' }}
                  src={sponsor.image}
                  alt='partner'
                  w={{ lg: '150px', md: '100px', sm: '70px' }}
                  m='auto'
                />
              </Box>
            );
          })}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};
