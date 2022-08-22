import {
  Flex,
  SimpleGrid,
  Box,
  Image as ChakraImage,
  Text
} from '@chakra-ui/react';

const mediaPartners = [
  {
    image: '/assets/partners/cryptoDiffer.png',
    link: 'https://cryptodiffer.com/',
    type: 'Media'
  },
  {
    image: '/assets/partners/forkLog.png',
    link: 'https://forklog.com/',
    type: 'Media'
  },
  {
    image: '/assets/partners/incrypted.png',
    link: 'https://incrypted.com/',
    type: 'Media'
  }
];

const techPartners = [
  {
    image: '/assets/partners/devPost.png',
    link: 'https://devpost.com/',
    type: 'Tech'
  }
];

const generalPartners = [
  {
    image: '/assets/partners/nym.png',
    link: 'https://nymtech.net/',
    type: 'General'
  }
];

const brandingPartner = [
  {
    image: '/assets/partners/aragon.png',
    link: 'https://aragon.org/',
    type: 'General'
  }
];

const communityPartners = [
  {
    image: '/assets/partners/sigmaSoftware.jpeg',
    link: 'https://university.sigma.software/en/',
    type: 'Community'
  }
];

export const SectionSeven = () => {
  return (
    <Flex
      w='100%'
      direction='column'
      px={{ base: '2rem', lg: '5rem' }}
      py={{ base: '2rem', lg: '2rem' }}
      bg='#F1F1F1'
    >
      <SimpleGrid
        columns={{ lg: 4, md: 3, sm: 2 }}
        placeItems='center'
        gridGap='1rem'
        mt='1rem'
        p='2rem'
        borderRadius='5px'
      >
        <Box
          h='100px'
          w='100%'
          display='flex'
          alignItems='center'
          justifyContent='center'
          color='#251D3A'
          borderRadius='10px'
          p='1rem'
        >
          <Text fontFamily='openSans' fontSize='1.2rem'>
            Branding Partners
          </Text>
        </Box>
        {brandingPartner.map((partner, index) => {
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
            >
              <ChakraImage
                style={{ filter: 'grayscale(1)' }}
                src={partner.image}
                alt='partner'
                w={{ lg: '100px', sm: '70px' }}
                m='auto'
              />
            </Box>
          );
        })}
      </SimpleGrid>

      <SimpleGrid
        columns={{ lg: 4, md: 3, sm: 2 }}
        placeItems='center'
        gridGap='1rem'
        mt='1rem'
        p='2rem'
        borderRadius='5px'
      >
        <Box
          h='100px'
          w='100%'
          display='flex'
          alignItems='center'
          justifyContent='center'
          color='#251D3A'
          borderRadius='10px'
          p='1rem'
        >
          <Text fontFamily='openSans' fontSize='1.2rem'>
            General Partners
          </Text>
        </Box>
        {generalPartners.map((partner, index) => {
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
            >
              <ChakraImage
                style={{ filter: 'grayscale(1)' }}
                src={partner.image}
                alt='partner'
                w={{ lg: '100px', sm: '70px' }}
                m='auto'
              />
            </Box>
          );
        })}
      </SimpleGrid>

      <SimpleGrid
        columns={{ lg: 4, md: 3, sm: 2 }}
        placeItems='center'
        gridGap='1rem'
        mt='1rem'
        p='2rem'
        borderRadius='5px'
      >
        <Box
          h='100px'
          w='100%'
          display='flex'
          alignItems='center'
          justifyContent='center'
          color='#251D3A'
          p='1rem'
        >
          <Text fontFamily='openSans' fontSize='1.2rem'>
            Media Partners
          </Text>
        </Box>

        {mediaPartners.map((partner, index) => {
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
            >
              <ChakraImage
                style={{ filter: 'grayscale(1)' }}
                src={partner.image}
                alt='partner'
                w={{ lg: '100px', sm: '70px' }}
                m='auto'
              />
            </Box>
          );
        })}
      </SimpleGrid>

      <SimpleGrid
        columns={{ lg: 4, md: 3, sm: 2 }}
        placeItems='center'
        gridGap='1rem'
        mt='1rem'
        p='2rem'
        borderRadius='5px'
      >
        <Box
          h='100px'
          w='100%'
          display='flex'
          alignItems='center'
          justifyContent='center'
          color='#251D3A'
          p='1rem'
        >
          <Text fontFamily='openSans' fontSize='1.2rem'>
            Tech Partners
          </Text>
        </Box>

        {techPartners.map((partner, index) => {
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
            >
              <ChakraImage
                style={{ filter: 'grayscale(1)' }}
                src={partner.image}
                alt='partner'
                w={{ lg: '100px', sm: '70px' }}
                m='auto'
              />
            </Box>
          );
        })}
      </SimpleGrid>

      <SimpleGrid
        columns={{ lg: 4, md: 3, sm: 2 }}
        placeItems='center'
        gridGap='1rem'
        mt='1rem'
        p='2rem'
        borderRadius='5px'
      >
        <Box
          h='100px'
          w='100%'
          display='flex'
          alignItems='center'
          justifyContent='center'
          color='#251D3A'
          p='1rem'
        >
          <Text fontFamily='openSans' fontSize='1.2rem'>
            Community Partners
          </Text>
        </Box>

        {communityPartners.map((partner, index) => {
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
            >
              <ChakraImage
                style={{ filter: 'grayscale(1)' }}
                src={partner.image}
                alt='partner'
                w={{ lg: '100px', sm: '70px' }}
                m='auto'
              />
            </Box>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};
