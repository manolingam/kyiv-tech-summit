import { Flex, SimpleGrid, Link as ChakraLink, Text } from '@chakra-ui/react';

export const SectionSeven = () => {
  return (
    <Flex
      w='100%'
      direction='column'
      alignItems='center'
      justifyContent='center'
      px={{ base: '2rem', lg: '5rem' }}
      py={{ base: '2rem', lg: '2rem' }}
    >
      <Text fontFamily='figTree' fontSize='1.5rem' fontWeight='bold'>
        Opportunities to Contribute
      </Text>

      <SimpleGrid
        columns={{ lg: 3, sm: 1 }}
        placeItems='center'
        w='60%'
        gap='1rem'
        mt='2rem'
      >
        <Text
          w='100%'
          textAlign='center'
          bg='#F1F1F1'
          p='10px'
          borderRadius='15px'
          fontFamily='openSans'
        >
          Sponsorship
        </Text>
        <Text
          w='100%'
          textAlign='center'
          bg='#F1F1F1'
          p='10px'
          borderRadius='15px'
          fontFamily='openSans'
        >
          Partnership
        </Text>
        <Text
          w='100%'
          textAlign='center'
          bg='#F1F1F1'
          p='10px'
          borderRadius='15px'
          fontFamily='openSans'
        >
          Volunteer
        </Text>
      </SimpleGrid>

      <SimpleGrid
        columns={{ lg: 2, sm: 1 }}
        placeItems='center'
        w={{ lg: '40%', sm: '60%' }}
        gap='1rem'
        mt='1rem'
      >
        <Text
          w='100%'
          textAlign='center'
          bg='#F1F1F1'
          p='10px'
          borderRadius='15px'
          fontFamily='openSans'
        >
          Mentorship
        </Text>
        <Text
          w='100%'
          textAlign='center'
          bg='#F1F1F1'
          p='10px'
          borderRadius='15px'
          fontFamily='openSans'
        >
          Hacker Participation
        </Text>
      </SimpleGrid>

      <Text fontFamily='figTree' mt='2rem' fontSize='.8rem'>
        Submit your information using this{' '}
        <ChakraLink
          color='#5800FF'
          textDecoration='underline'
          href='https://forms.gle/SDGLyBSuSXQL8PHB7'
          isExternal
        >
          form
        </ChakraLink>{' '}
        and our team will be in touch!
      </Text>
    </Flex>
  );
};
