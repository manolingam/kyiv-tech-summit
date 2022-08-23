import {
  Flex,
  VStack,
  SimpleGrid,
  Grid,
  GridItem,
  Text
} from '@chakra-ui/react';

export const SectionTwo = () => {
  return (
    <Flex direction='column' py={{ base: '2rem', lg: '1rem' }}>
      <VStack
        justifyContent='center'
        alignItems='center'
        bg='#ffd700'
        py='2rem'
        px={{ base: '2rem', lg: '5rem' }}
      >
        <Text
          fontFamily='figTree'
          fontSize='1.5rem'
          color='#0057b7'
          fontWeight='bold'
        >
          Our Goal
        </Text>
        <Text
          fontFamily='figTree'
          fontSize='1.2rem'
          textAlign='center'
          color='#0057b7'
          w={{ lg: '70%', sm: '100%' }}
        >
          Build technology that makes war-time life easier and safer for
          Ukrainians and the world. Onboard Web2 talent into the Web3 digital
          working economy through existing Web3 communities.
        </Text>
      </VStack>
      <SimpleGrid
        columns={{ lg: 2, sm: 1 }}
        p='2rem'
        placeItems='center'
        px={{ base: '2rem', lg: '5rem' }}
      >
        <Text fontFamily='openSans' fontSize='1.2rem'>
          Since the full-scale Russian invasion of Ukraine on 24th February
          2022, the situation has quickly become dire for millions of
          Ukrainians. Outside of the humanitarian crisis and military needs
          required by Ukraine, there is an unprecedented need for new tools and
          solutions to systemically respond to the new reality of russian war in
          Ukraine.
        </Text>
        <VStack mt={{ sm: '2rem' }}>
          <Text
            w='100%'
            textAlign='center'
            bg='#251D3A'
            color='white'
            p='15px'
            borderRadius='15px'
            fontFamily='figTree'
          >
            Broken communications and infrastructure
          </Text>
          <Text
            w='100%'
            textAlign='center'
            bg='#251D3A'
            color='white'
            p='15px'
            borderRadius='15px'
            fontFamily='figTree'
          >
            Massive disinformation campaign waged by russia
          </Text>
          <Text
            w='100%'
            textAlign='center'
            bg='#251D3A'
            color='white'
            p='15px'
            borderRadius='15px'
            fontFamily='figTree'
          >
            Refugee crisis
          </Text>
          <Text
            w='100%'
            textAlign='center'
            bg='#251D3A'
            color='white'
            p='15px'
            borderRadius='15px'
            fontFamily='figTree'
          >
            Humanitarian situation on the ground
          </Text>
        </VStack>
      </SimpleGrid>
      <Grid
        templateColumns={{ lg: 'repeat(5, 1fr)', sm: 'repeat(2, 1fr)' }}
        p='2rem'
        px={{ base: '2rem', lg: '5rem' }}
      >
        <GridItem colSpan={1}>
          <Text fontFamily='figTree' fontSize='1.5rem' fontWeight='bold'>
            Safety First
          </Text>
        </GridItem>
        <GridItem colSpan={4} fontSize='1.2rem' mt={{ sm: '1rem', lg: '0rem' }}>
          <Text fontFamily='openSans'>
            Kyiv Tech Summit will take place at a yet-to-be-disclosed secure
            location, with a focus on activating only the community already in
            close proximity, as well as to virtually enable the global community
            to collaborate in building technology that will empower the
            humanitarian aid efforts of tomorrow. We will include and onboard
            both technical and non-technical community members into Web3 and
            curate the hackathon bounties around making life within a warzone
            safer and more efficient for Ukrainians.
          </Text>
        </GridItem>
      </Grid>
    </Flex>
  );
};
