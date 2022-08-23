import {
  Image as ChakraImage,
  Text,
  Flex,
  SimpleGrid,
  HStack,
  Link as ChakraLink
} from '@chakra-ui/react';

const organizers = [
  {
    name: 'Inna Kosianets',
    role: 'Operations / Contributors - Web3 Activist',
    image: '/assets/profiles/Inna.png',
    twitter: 'https://twitter.com/CyberF0x_',
    linkedin: 'https://www.linkedin.com/in/inna-kosianets-70512a58/',
    telegram: 'https://t.me/Cyber_F0x'
  },
  {
    name: 'Rev Miller',
    role: 'Operations / Partnerships - Co-founder @ Unchain & Atlantis World',
    image: '/assets/profiles/r3v.png',
    twitter: 'https://twitter.com/revrfg',
    linkedin: 'https://www.linkedin.com/in/revmiller/',
    telegram: 'https://t.me/revmiller'
  },
  {
    name: 'CJ Hetherington',
    role: 'Operations / Partnerships - Co-founder @ Atlantis World',
    image: '/assets/profiles/CJ.png',
    twitter: 'https://twitter.com/cjhtech',
    linkedin: 'https://www.linkedin.com/in/cjhweb3/',
    telegram: 'https://t.me/cjhtech'
  },
  {
    name: 'Tyler Morrey',
    role: 'Operations / Community - Co-founder @ pieFi ',
    image: '/assets/profiles/Tyler.png',
    twitter: 'https://twitter.com/TylerMorrey',
    linkedin: 'https://www.linkedin.com/in/tylermorrey/',
    telegram: 'https://t.me/upsidetyler'
  },
  {
    name: 'Nadiia Yakubets',
    role: 'PR / Communications - PR & Comms @ Unchain ',
    image: '/assets/profiles/Nadiia.png',
    twitter: 'https://twitter.com/nadiayakubets',
    linkedin: 'https://www.linkedin.com/in/nadiia-yakubets-561654114/',
    telegram: 'https://t.me/NadiiaYakubets'
  },
  {
    name: 'Alona Shevchenko',
    role: 'PR / Communications - Co-founder @ UkraineDAO',
    image: '/assets/profiles/Alona.png',
    twitter: 'https://twitter.com/cryptodrftng',
    linkedin: 'https://www.linkedin.com/in/alona-s-4a25b5b6/',
    telegram: 'https://t.me/drftng7'
  }
];

export const SectionSix = () => {
  return (
    <Flex direction='column'>
      <Text
        fontFamily='figTree'
        bg='#251D3A'
        color='white'
        fontWeight='bold'
        textAlign='center'
        mt='1rem'
        p='1rem'
      >
        Organizers
      </Text>
      <Flex
        direction='column'
        alignItems='center'
        px={{ base: '2rem', lg: '5rem' }}
        py={{ base: '2rem', lg: '2rem' }}
      >
        <Text
          fontFamily='figTree'
          fontSize='1.2rem'
          textAlign='center'
          maxW='70%'
          mb='2rem'
        >
          Kyiv Tech Summit is organized by Atlantis World, Unchain and
          UkraineDAO core contributors in collaboration with a dozen of
          community and partner supporters.
        </Text>

        <Flex
          direction={{ lg: 'row', sm: 'column' }}
          w='100%'
          justifyContent='space-evenly'
          alignItems='center'
          mb='2rem'
        >
          <ChakraImage
            src='/assets/logos/atlantisWorld.png'
            alt=''
            w='200px'
            h='50px'
            mb={{ sm: '1.5rem' }}
          />
          <ChakraImage
            src='/assets/logos/unchain.png'
            alt=''
            w='200px'
            h='100px'
            mb={{ sm: '1.5rem' }}
          />
          <ChakraImage
            src='/assets/logos/ukrainedao.png'
            alt=''
            w='200px'
            h='60px'
            mb={{ sm: '1.5rem' }}
          />
        </Flex>

        <SimpleGrid columns={{ lg: 3, sm: 1 }} gap='2rem'>
          {organizers.map((organizer, index) => {
            return (
              <Flex
                key={index}
                direction='column'
                alignItems='center'
                justifyContent='center'
                bg='#251D3A'
                minH='150px'
                p='1rem'
                borderRadius='5px'
              >
                <ChakraImage
                  w='auto'
                  h='150px'
                  src={organizer.image}
                  alt={organizer.name}
                  borderRadius='50%'
                  style={{ filter: 'grayscale(1)' }}
                  mb='15px'
                />
                <Text
                  color='white'
                  fontSize='1.2rem'
                  fontFamily='openSans'
                  fontWeight='bold'
                >
                  {organizer.name}
                </Text>
                <Text
                  color='white'
                  textAlign='center'
                  fontFamily='openSans'
                  fontSize='0.8rem'
                  mt='5px'
                >
                  {organizer.role}
                </Text>
                <HStack mt='15px' color='white'>
                  <ChakraLink
                    href={organizer.twitter}
                    isExternal
                    fontSize='15px'
                    w='15px'
                    h='15px'
                  >
                    <span>
                      <i className='fab fa-twitter'></i>
                    </span>
                  </ChakraLink>
                  <ChakraLink
                    href={organizer.linkedin}
                    isExternal
                    fontSize='15px'
                    w='15px'
                    h='15px'
                  >
                    <span>
                      <i className='fa-brands fa-linkedin'></i>
                    </span>
                  </ChakraLink>
                  <ChakraLink
                    href={organizer.telegram}
                    isExternal
                    fontSize='15px'
                    w='15px'
                    h='15px'
                  >
                    <span>
                      <i className='fa-brands fa-telegram'></i>
                    </span>
                  </ChakraLink>
                </HStack>
              </Flex>
            );
          })}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};
