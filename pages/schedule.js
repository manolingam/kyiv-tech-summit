import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react';

const schedule = [
  {
    time: '9:00',
    brief: 'Venue Opens',
    details: 'Venue opens for registration, networking & morning snacks'
  },
  {
    time: '10:30',
    brief: 'Opening remarks & secret keynote speaker',
    details:
      'Join CJ Hetherington & Rev Miller from the Kyiv Tech Summit org team with a special guest!'
  },
  {
    time: '11:00',
    brief: 'How Ukrainians Build Web3 Unicorns 🦄',
    details:
      'Join Illia Polosukhin (Co-Founder, NEAR) & Bogdan Gusiev (Co-Founder, Unstoppable Domains) to hear about what it takes to build a Web3 unicorn and the future of the Ukrainian startup ecosystem, moderated by Rev Miller.'
  },
  {
    time: '12:00 - 13:30',
    brief: 'Lunch, networking & ideation',
    details: ''
  },
  {
    time: '13:30 - 14:15',
    brief: 'Crypto Cards Helping Ukraine',
    details:
      'Join Unchain Fund co-founder Alexey Bobok chatting with Kiril Khomyakov, general manager of Binance Ukraine, discussing the revolutionary technology and direct aid model that have provided support to hundreds of thousands of Ukrainians affected by war.'
  },
  {
    time: '14:15',
    brief: 'What it takes to #Hack4Ukraine',
    details:
      'Serial hacker, social impact driver, Web3 startup operator and Kyiv Tech Summit co-founder CJ outlines the mode of operation for Kyiv Tech Summit; including an overview of the prizes on offer and special tracks to help Ukraine, best practices, guidelines, advice, learnings & schedule!'
  },
  {
    time: '16:00 - 16:45',
    brief: 'Idea validation / feedback session with mentors & judges',
    details:
      'Brainstorm and ideate with Kyiv Tech Summit mentors & judges to refine your #Hack4Ukraine direction! There will be an optional virtual and IRL feedback session taking place in parallel.'
  },
  {
    time: '17:00 - 19:00',
    brief: 'ETH Kyiv: Solidity 0 to 1, development environment workshop',
    details: ''
  }
];

const Schedule = () => {
  return (
    <Flex
      w='100%'
      direction='column'
      px={{ base: '2rem', lg: '5rem' }}
      pb={{ base: '2rem', lg: '2rem' }}
      py='2rem'
    >
      <Text
        fontFamily='figTree'
        bg='#0057b7'
        color='white'
        mb='1rem'
        p='1rem'
        fontWeight='bold'
        textAlign='center'
      >
        6th September 2022
      </Text>
      {schedule.map((item, index) => {
        return (
          <Flex
            key={index}
            direction={{ lg: 'row', sm: 'column' }}
            justifyContent='flex-start'
            my='.5rem'
          >
            <Box
              w={{ lg: '30%', sm: '100%' }}
              display='flex'
              alignItems={{ lg: 'flex-start', sm: 'center' }}
              justifyContent={{ lg: 'flex-end', sm: 'flex-start' }}
              borderRadius='10px'
              color='#251D3A'
              mr='1rem'
              px={{ lg: '1rem', sm: '0' }}
              py='.5rem'
            >
              <Text fontFamily='figTree' fontSize='1.2rem'>
                {item.time}
              </Text>
            </Box>
            <Box
              w='100%'
              display='flex'
              flexDirection='column'
              alignItems='flex-start'
              justifyContent='flex-start'
              border='2px solid #251D3A'
              borderRadius='10px'
              bg='#251D3A'
              color='white'
              p='1rem'
            >
              <Text
                fontFamily='openSans'
                fontWeight='bold'
                fontSize='1.2rem'
                mb='10px'
              >
                {item.brief}
              </Text>
              <Text fontFamily='openSans' fontSize='.8rem'>
                {item.details}
              </Text>
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Schedule;
