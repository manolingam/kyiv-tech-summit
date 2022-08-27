import {
  Flex,
  SimpleGrid,
  Box,
  Image as ChakraImage,
  Text
} from '@chakra-ui/react';

const mediaPartners = [
  {
    image: '/assets/partners/incrypted.png',
    link: 'https://incrypted.com/'
  },
  {
    image: '/assets/partners/forkLog.png',
    link: 'https://forklog.com/'
  },
  {
    image: '/assets/partners/coindesk.png',
    link: 'https://www.coindesk.com/'
  },
  {
    image: '/assets/partners/cointelegraph.png',
    link: 'https://cointelegraph.com/'
  },
  {
    image: '/assets/partners/cryptoDiffer.png',
    link: 'https://cryptodiffer.com/'
  }
];

const techPartners = [
  {
    image: '/assets/partners/devPost.png',
    link: 'https://devpost.com/'
  }
];

const brandingPartner = [
  {
    image: '/assets/partners/aragon.png',
    link: 'https://aragon.org/'
  }
];

const communityPartners = [
  {
    image: '/assets/partners/sigmaSoftware.png',
    link: 'https://university.sigma.software/en/'
  },
  {
    image: '/assets/partners/nym.png',
    link: 'https://nymtech.net/'
  },
  {
    image: '/assets/partners/unitCity.png',
    link: 'https://unit.city/'
  },
  {
    image: '/assets/partners/ideaSoft.png',
    link: 'https://ideaSoft.io/'
  },
  {
    image: '/assets/partners/bau.png',
    link: 'https://bau.ai/'
  },
  {
    image: '/assets/partners/hacken.png',
    link: 'https://hacken.io/'
  },
  {
    image: '/assets/partners/kuna.png',
    link: 'https://kuna.io/'
  },
  {
    image: '/assets/partners/metaHistory.png',
    link: 'https://metahistory.gallery/'
  },
  {
    image: '/assets/partners/kyivEth.png',
    link: 'https://facebook.com/kyivethereum'
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
      <Flex
        direction={{ lg: 'row', sm: 'column' }}
        justifyContent='flex-start'
        mb='2rem'
      >
        <Box
          h='100px'
          w='30%'
          display='flex'
          alignItems={{ lg: 'flex-start', sm: 'center' }}
          justifyContent='flex-start'
          color='#251D3A'
          borderRadius='10px'
          p={{ lg: '1rem', sm: '0' }}
          mr='1rem'
        >
          <Text fontFamily='openSans' fontSize='1.2rem'>
            Branding Partner
          </Text>
        </Box>
        <SimpleGrid
          w='100%'
          columns={{ lg: 4, md: 3, sm: 2 }}
          placeItems='center'
          gridGap='1rem'
          borderRadius='5px'
        >
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
                  w={{ lg: '150px', md: '100px', sm: '70px' }}
                  m='auto'
                />
              </Box>
            );
          })}
        </SimpleGrid>
      </Flex>

      <Flex
        direction={{ lg: 'row', sm: 'column' }}
        justifyContent='flex-start'
        mb='2rem'
      >
        <Box
          h='100px'
          w='30%'
          display='flex'
          alignItems={{ lg: 'flex-start', sm: 'center' }}
          justifyContent='flex-start'
          color='#251D3A'
          p={{ lg: '1rem', sm: '0' }}
          mr='1rem'
        >
          <Text fontFamily='openSans' fontSize='1.2rem'>
            Media Partners
          </Text>
        </Box>
        <SimpleGrid
          w='100%'
          columns={{ lg: 4, md: 3, sm: 2 }}
          placeItems='center'
          gridGap='1rem'
          borderRadius='5px'
        >
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
                  w={{
                    lg: index === 0 ? '100px' : '150px',
                    md: '100px',
                    sm: '70px'
                  }}
                  m='auto'
                />
              </Box>
            );
          })}
        </SimpleGrid>
      </Flex>

      <Flex
        direction={{ lg: 'row', sm: 'column' }}
        justifyContent='flex-start'
        mb='2rem'
      >
        <Box
          h='100px'
          w='30%'
          display='flex'
          alignItems={{ lg: 'flex-start', sm: 'center' }}
          justifyContent='flex-start'
          color='#251D3A'
          p={{ lg: '1rem', sm: '0' }}
          mr='1rem'
        >
          <Text fontFamily='openSans' fontSize='1.2rem'>
            Tech Partner
          </Text>
        </Box>
        <SimpleGrid
          w='100%'
          columns={{ lg: 4, md: 3, sm: 2 }}
          placeItems='center'
          gridGap='1rem'
          borderRadius='5px'
        >
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
                  w={{ lg: '150px', md: '100px', sm: '70px' }}
                  m='auto'
                />
              </Box>
            );
          })}
        </SimpleGrid>
      </Flex>

      <Flex
        direction={{ lg: 'row', sm: 'column' }}
        justifyContent='flex-start'
        mb='2rem'
      >
        <Box
          h='100px'
          w='30%'
          display='flex'
          alignItems={{ lg: 'flex-start', sm: 'center' }}
          justifyContent='flex-start'
          color='#251D3A'
          p={{ lg: '1rem', sm: '0' }}
          mr='1rem'
        >
          <Text fontFamily='openSans' fontSize='1.2rem'>
            Community Partners
          </Text>
        </Box>
        <SimpleGrid
          w='100%'
          columns={{ lg: 4, md: 3, sm: 2 }}
          placeItems='center'
          gridGap='1rem'
          borderRadius='5px'
        >
          {communityPartners.map((partner, index) => {
            return (
              <Box
                key={index}
                w='100%'
                h='125px'
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
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
                  w={{
                    lg: [0, 4, 5, 7].includes(index)
                      ? '100px'
                      : index === 8
                      ? '80px'
                      : '150px',
                    md: '100px',
                    sm: '70px'
                  }}
                  m='auto'
                />
                {index === 8 && (
                  <Text
                    fontFamily='figTree'
                    fontSize='.8rem'
                    textAlign='center'
                    pb='10px'
                  >
                    Kyiv ETH Community
                  </Text>
                )}
              </Box>
            );
          })}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};
