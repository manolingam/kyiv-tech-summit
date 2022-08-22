import {
  Flex,
  SimpleGrid,
  Box,
  Image as ChakraImage,
  Text
} from '@chakra-ui/react';

const sponsors = [
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
      id='sponsors'
    >
      <SimpleGrid
        columns={{ lg: 4, md: 3, sm: 2 }}
        placeItems='center'
        gridGap='1rem'
        bg='#251D3A'
        p='2rem'
        mt='1rem'
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
            Our Sponsors
          </Text>
        </Box>
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
                w='100px'
                m='auto'
              />
            </Box>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};
