import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { sponsors } from '../utils/constants';

export const Sponsors = () => {
  return (
    <Flex
      w='100%'
      direction='column'
      px={{ base: '2rem', lg: '5rem' }}
      pb={{ base: '2rem', lg: '2rem' }}
      bg='#251D3A'
    >
      <Flex
        direction={{ lg: 'row', sm: 'column' }}
        justifyContent='flex-start'
        my='2rem'
      >
        <Box
          h='100px'
          w='30%'
          display='flex'
          alignItems={{ lg: 'flex-start', sm: 'center' }}
          justifyContent='flex-start'
          bg='#251D3A'
          borderRadius='10px'
          color='white'
          p={{ lg: '1rem', sm: '0' }}
          mr='1rem'
        >
          <Text fontFamily='openSans' fontSize='1.2rem'>
            Our Sponsors
          </Text>
        </Box>
        <SimpleGrid
          w='100%'
          columns={{ lg: 4, md: 3, sm: 2 }}
          placeItems='center'
          gridGap='1rem'
          borderRadius='5px'
        >
          {sponsors.map((sponsor, index) => {
            return (
              <Box
                key={index}
                w='100%'
                h='125px'
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                border='2px solid #251D3A'
                borderRadius='10px'
                bg='white'
                p='1rem'
                onClick={() => window.open(sponsor.link, '_blank')}
                cursor='pointer'
              >
                <Box
                  style={{ filter: 'grayscale(1)' }}
                  src={sponsor.image}
                  alt='partner'
                  w={{
                    lg: [3, 6].includes(index) ? '100px' : '150px',
                    md: '100px',
                    sm: '70px'
                  }}
                  m='auto'
                >
                  <Image src={sponsor.image} alt='sponsor' placeholder='blur' />
                </Box>
                {index === 6 && (
                  <Text
                    fontFamily='figTree'
                    fontSize='.8rem'
                    textAlign='center'
                    pb='10px'
                  >
                    Ethereum Foundation
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
