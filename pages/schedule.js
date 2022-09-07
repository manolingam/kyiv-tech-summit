import { Flex, Box, Text, Link as ChakraLink } from '@chakra-ui/react';

import { ScheduleMeta } from '../shared/ScheduleMeta';
import { schedule_6, schedule_7, schedule_8 } from '../utils/constants';

const Schedule = () => {
  return (
    <>
      <ScheduleMeta />

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
          my='1rem'
          p='1rem'
          fontWeight='bold'
          textAlign='center'
        >
          8th September 2022
        </Text>
        {schedule_8.map((item, index) => {
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

        <Text
          fontFamily='figTree'
          bg='#0057b7'
          color='white'
          my='1rem'
          p='1rem'
          fontWeight='bold'
          textAlign='center'
        >
          7th September 2022
        </Text>
        {schedule_7.map((item, index) => {
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
        <Text
          fontFamily='figTree'
          bg='#0057b7'
          color='white'
          p='1rem'
          fontWeight='bold'
          textAlign='center'
        >
          6th September 2022
        </Text>
        <ChakraLink
          isExternal
          href='https://www.youtube.com/watch?v=6ZErlxKgZoo'
          _hover={{
            textDecoration: 'none'
          }}
          w='200px'
          ml='auto'
        >
          <Text
            fontFamily='figTree'
            color='white'
            p='.5rem'
            fontWeight='bold'
            textAlign='center'
            bg='#FF0000'
          >
            <i className='fa-brands fa-youtube'></i> View Day 1 Stream
          </Text>
        </ChakraLink>
        {schedule_6.map((item, index) => {
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
    </>
  );
};

export default Schedule;
