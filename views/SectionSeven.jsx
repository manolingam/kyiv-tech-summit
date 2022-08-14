import {
  Flex,
  SimpleGrid,
  Link as ChakraLink,
  Text,
  HStack
} from '@chakra-ui/react';

const contributionOptions = [
  {
    name: 'Sponsorship',
    class: 'fa-solid fa-hand-holding-dollar'
  },
  {
    name: 'Partnership',
    class: 'fa-solid fa-handshake'
  },
  {
    name: 'Volunteer',
    class: 'fa-solid fa-hand-holding-hand'
  },
  {
    name: 'Mentorship',
    class: 'fa-solid fa-book-open-reader'
  },
  {
    name: 'Hacker Participation',
    class: 'fa-solid fa-code'
  }
];

export const SectionSeven = () => {
  return (
    <Flex
      w='100%'
      direction='column'
      alignItems='center'
      justifyContent='center'
      py={{ base: '2rem', lg: '1rem' }}
      px={{ base: '2rem', lg: '5rem' }}
      bg='#F1F1F1'
    >
      <Text fontFamily='openSans' fontWeight='bold'>
        Opportunities to Contribute
      </Text>

      <SimpleGrid
        w={{ lg: '60%', sm: '80%' }}
        columns={{ lg: 3, sm: 1 }}
        gap='1rem'
        mt='2rem'
      >
        {contributionOptions.slice(0, 3).map((contribution, index) => {
          return (
            <ChakraLink
              key={index}
              w='100%'
              p='.5rem'
              borderRadius='25px'
              href='https://forms.gle/SDGLyBSuSXQL8PHB7'
              bg='#0057b7'
              color='white'
              _hover={{ textDecoration: 'none', opacity: '0.8' }}
              isExternal
            >
              <HStack h='100%' justifyContent='center'>
                <span>
                  <i className={contribution.class}></i>
                </span>
                <Text fontFamily='figTree'>{contribution.name}</Text>
              </HStack>
            </ChakraLink>
          );
        })}
      </SimpleGrid>

      <SimpleGrid
        w={{ lg: '40%', sm: '80%' }}
        columns={{ lg: 2, sm: 1 }}
        gap='1rem'
        mt='1rem'
      >
        {contributionOptions.slice(3, 5).map((contribution, index) => {
          return (
            <ChakraLink
              key={index}
              w='100%'
              p='.5rem'
              bg='#0057b7'
              color='white'
              borderRadius='25px'
              href={
                index === 1
                  ? 'https://kyiv-tech-summit.devpost.com'
                  : 'https://forms.gle/SDGLyBSuSXQL8PHB7'
              }
              isExternal
              _hover={{ textDecoration: 'none', opacity: '0.8' }}
            >
              <HStack h='100%' justifyContent='center'>
                <span>
                  <i className={contribution.class}></i>
                </span>
                <Text fontFamily='figTree'>{contribution.name}</Text>
              </HStack>
            </ChakraLink>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};
