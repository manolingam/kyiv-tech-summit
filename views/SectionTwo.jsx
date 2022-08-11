import {
  Flex,
  VStack,
  SimpleGrid,
  Grid,
  GridItem,
  Text,
  Button
} from '@chakra-ui/react';

export const SectionTwo = () => {
  return (
    <Flex direction='column' py={{ base: '2rem', lg: '1rem' }}>
      <VStack
        justifyContent='center'
        alignItems='center'
        bg='#251D3A'
        py='1.5rem'
        px={{ base: '2rem', lg: '5rem' }}
      >
        <Text
          fontFamily='figTree'
          fontSize='1.5rem'
          color='white'
          fontWeight='bold'
        >
          Our Goal
        </Text>
        <Text fontFamily='openSans' textAlign='center' color='white' w='70%'>
          Build technology that makes war-time life easier and safer for
          Ukrainians and the world. Onboard Web2 talent into the Web3 digital
          working economy through existing Web3 communities.
        </Text>
      </VStack>
      <SimpleGrid
        columns={{ lg: 2, sm: 1 }}
        p='2rem'
        bg='#F1F1F1'
        placeItems='center'
        px={{ base: '2rem', lg: '5rem' }}
      >
        <Text fontFamily='openSans'>
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
            bg='white'
            p='10px'
            borderRadius='15px'
            fontFamily='openSans'
          >
            Broken communications and infrastructure
          </Text>
          <Text
            w='100%'
            textAlign='center'
            bg='white'
            p='10px'
            borderRadius='15px'
            fontFamily='openSans'
          >
            Massive disinformation campaign waged by russia
          </Text>
          <Text
            w='100%'
            textAlign='center'
            bg='white'
            p='10px'
            borderRadius='15px'
            fontFamily='openSans'
          >
            Refugee crisis
          </Text>
          <Text
            w='100%'
            textAlign='center'
            bg='white'
            p='10px'
            borderRadius='15px'
            fontFamily='openSans'
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
        <GridItem colSpan={4} mt={{ sm: '1rem' }}>
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
      <Text
        fontFamily='figTree'
        bg='#5800FF'
        color='white'
        mt='1rem'
        p='1rem'
        fontWeight='bold'
        textAlign='center'
      >
        Event Details
      </Text>
    </Flex>
  );
};
