import {
  SimpleGrid,
  VStack,
  Flex,
  Text,
  Link as ChakraLink
} from '@chakra-ui/react';

export const SectionThree = () => {
  return (
    <Flex direction='column' py={{ base: '1rem', lg: '2rem' }}>
      <Text
        fontFamily='figTree'
        bg='#0057b7'
        color='white'
        mb='1rem'
        p='1rem'
        fontWeight='bold'
        textAlign='center'
      >
        Event Details
      </Text>
      <SimpleGrid
        columns={{ lg: 2, sm: 1 }}
        placeItems='center'
        gridGap='3rem'
        px={{ base: '2rem', lg: '5rem' }}
      >
        <VStack alignItems='flex-start'>
          <Text fontFamily='openSans' fontSize='.8rem' fontWeight='bold'>
            Location
          </Text>
          <Text
            fontFamily='figTree'
            fontWeight='bold'
            fontSize='1.5rem'
            color='#0057b7'
          >
            Secret Location*
          </Text>
          <Text fontFamily='openSans' fontSize='1.2rem'>
            For safety and inclusion purposes, only participants local to Kyiv
            (and nearby proximity) are invited to join in-person. Everyone else:
            you can participate online - it’s a global hybrid event!{' '}
          </Text>
        </VStack>

        <VStack alignItems='flex-start'>
          <Text fontFamily='openSans' fontSize='.8rem' fontWeight='bold'>
            Hackathon
          </Text>
          <Text fontFamily='openSans' fontSize='1.2rem'>
            Prizes will be awarded, bounties available. Pre-existing projects
            AND new projects are allowed to be submitted. What’s most important
            is that the project is providing an impactful solution!
          </Text>
        </VStack>

        <VStack alignItems='flex-start' w='100%'>
          <Text fontFamily='openSans' fontSize='.8rem' fontWeight='bold'>
            Duration & Dates
          </Text>
          <Text
            fontFamily='figTree'
            fontWeight='bold'
            fontSize='1.5rem'
            color='#0057b7'
          >
            September 6-9 2022
          </Text>
        </VStack>

        <VStack alignItems='flex-start'>
          <Text fontFamily='openSans' fontSize='.8rem' fontWeight='bold'>
            Events
          </Text>
          <Text fontFamily='openSans' fontSize='1.2rem'>
            All offline events will be live-streamed and accessible to online
            participants.
          </Text>
        </VStack>
      </SimpleGrid>
      <Flex
        direction='column'
        alignItems='flex-start'
        mr='auto'
        mt='1rem'
        px={{ base: '2rem', lg: '5rem' }}
      >
        <Text fontFamily='openSans' fontSize='.8rem' fontWeight='bold'>
          Find more details on our events page:{' '}
        </Text>
        <ChakraLink
          href='https://kyiv-tech-summit.devpost.com'
          isExternal
          textDecoration='underline'
          color='#ffd700'
          fontWeight='bold'
          fontSize='.8rem'
        >
          kyiv-tech-summit.devpost.com
        </ChakraLink>
      </Flex>
    </Flex>
  );
};
