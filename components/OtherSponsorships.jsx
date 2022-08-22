import {
  Flex,
  VStack,
  SimpleGrid,
  Text,
  List,
  ListItem,
  ListIcon,
  Image as ChakraImage
} from '@chakra-ui/react';

import { CheckCircleIcon } from '@chakra-ui/icons';

export const OtherSponsorships = () => {
  return (
    <Flex
      direction='column'
      py={{ base: '2rem', lg: '1rem' }}
      px={{ base: '2rem', lg: '5rem' }}
    >
      <SimpleGrid columns={{ lg: 3, sm: 1 }} gap='2rem'>
        <Flex direction='column' justifyContent='space-between'>
          <Flex
            direction='column'
            alignItems='flex-start'
            bg='white'
            p='1rem'
            borderRadius='20px'
            minH='200px'
          >
            <Text fontFamily='openSans' fontWeight='bold'>
              Event Branding
            </Text>
            <Text fontFamily='figTree' fontWeight='bold' color='#E64848'>
              $10,000
            </Text>

            <List spacing={3} fontFamily='openSans' fontSize='.8rem' mt='1rem'>
              <ListItem>
                <ListIcon as={CheckCircleIcon} />
                Lanyards
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} />
                Badges
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} />
                Merch
              </ListItem>
            </List>
          </Flex>

          <VStack alignItems='flex-start' mt='2rem'>
            <Text fontFamily='figTree'>Logo on website</Text>
            <Text fontFamily='figTree'>Logo on event / stage banners</Text>
            <Text fontFamily='figTree'>
              Logo & mentions on videos/interviews
            </Text>
            <Text fontFamily='figTree'>Speaker meeting invite</Text>
            <Text fontFamily='figTree'>2 Conference pass</Text>
          </VStack>
          <Text
            fontFamily='figTree'
            mt='2rem'
            bg='#E64848'
            color='white'
            p='5px'
            borderRadius='10px'
            textAlign='center'
          >
            1/1 Sponsorship remaining
          </Text>
        </Flex>

        <Flex direction='column'>
          <Flex
            direction='column'
            alignItems='flex-start'
            bg='white'
            p='1rem'
            borderRadius='20px'
            minH='200px'
          >
            <Text fontFamily='openSans' fontWeight='bold'>
              Food Court & Bar
            </Text>
            <Text fontFamily='figTree' fontWeight='bold' color='#5800FF'>
              $10,000
            </Text>

            <List spacing={3} fontFamily='openSans' fontSize='.8rem' mt='1rem'>
              <ListItem>
                <ListIcon as={CheckCircleIcon} />
                24/7 Meals and snacks
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} />2 Barista
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} />2 Servers
              </ListItem>
            </List>
          </Flex>

          <VStack alignItems='flex-start' mt='2rem'>
            <Text fontFamily='figTree'>Logo on website</Text>
            <Text fontFamily='figTree'>Logo on food court & bar</Text>
            <Text fontFamily='figTree'>
              Logo & mentions on videos/interviews
            </Text>
            <Text fontFamily='figTree'>Speaker meeting invite</Text>
            <Text fontFamily='figTree'>2 Conference pass</Text>
          </VStack>
          <Text
            fontFamily='figTree'
            mt={{ sm: '2rem', lg: 'auto' }}
            bg='#5800FF'
            color='white'
            p='5px'
            borderRadius='10px'
            textAlign='center'
          >
            1/2 Sponsorship remaining
          </Text>
        </Flex>

        <Flex direction='column' position='relative' opacity='.5'>
          <ChakraImage
            position='absolute'
            top='0'
            bottom='0'
            left='0'
            right='0'
            m='auto'
            src='/assets/sold_out.png'
            w='250px'
          />
          <Flex
            direction='column'
            alignItems='flex-start'
            bg='white'
            p='1rem'
            borderRadius='20px'
            minH='200px'
          >
            <Text fontFamily='openSans' fontWeight='bold'>
              Livestream & Video Production
            </Text>
            <Text fontFamily='figTree' fontWeight='bold' color='#5BB318'>
              $10,000
            </Text>

            <List spacing={3} fontFamily='openSans' fontSize='.8rem' mt='1rem'>
              <ListItem>
                <ListIcon as={CheckCircleIcon} />
                Dedicated team
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} />
                Live Streaming event
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} />
                Video shooting & post editing // including hackathon &
                interviews
              </ListItem>
            </List>
          </Flex>

          <VStack alignItems='flex-start' mt='2rem'>
            <Text fontFamily='figTree'>Logo on website</Text>
            <Text fontFamily='figTree'>Logo on the livestream</Text>
            <Text fontFamily='figTree'>
              Logo & mentions on videos/interviews
            </Text>
            <Text fontFamily='figTree'>Speaker meeting invite</Text>
            <Text fontFamily='figTree'>2 Conference pass</Text>
          </VStack>
          <Text
            fontFamily='figTree'
            mt={{ sm: '2rem', lg: 'auto' }}
            bg='#5BB318'
            color='white'
            p='5px'
            borderRadius='10px'
            textAlign='center'
          >
            0/1 Sponsorship remaining
          </Text>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};
