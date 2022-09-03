import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

import {
  communityPartners,
  mediaPartners,
  techPartners,
  brandingPartner
} from '../utils/constants';

export const Partners = () => {
  return (
    <Flex
      w='100%'
      direction='column'
      px={{ base: '2rem', lg: '5rem' }}
      py={{ base: '2rem', lg: '2rem' }}
      bg='#F1F1F1'
    >
      <Flex
        direction={{ lg: 'row', sm: 'column' }}
        justifyContent='flex-start'
        mb='2rem'
      >
        <Box
          h='100px'
          w='30%'
          display='flex'
          alignItems={{ lg: 'flex-start', sm: 'center' }}
          justifyContent='flex-start'
          color='#251D3A'
          borderRadius='10px'
          p={{ lg: '1rem', sm: '0' }}
          mr='1rem'
        >
          <Text fontFamily='openSans' fontSize='1.2rem'>
            Branding Partner
          </Text>
        </Box>
        <SimpleGrid
          w='100%'
          columns={{ lg: 4, md: 3, sm: 2 }}
          placeItems='center'
          gridGap='1rem'
          borderRadius='5px'
        >
          {brandingPartner.map((partner, index) => {
            return (
              <Box
                key={index}
                w='100%'
                h='125px'
                display='flex'
                alignItems='center'
                borderRadius='10px'
                bg='white'
                p='1rem'
                onClick={() => window.open(partner.link, '_blank')}
                cursor='pointer'
              >
                <Box
                  // style={{ filter: 'grayscale(1)' }}
                  w={{ lg: '150px', md: '100px', sm: '100px' }}
                  m='auto'
                >
                  <Image src={partner.image} alt='partner' placeholder='blur' />
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
      </Flex>

      <Flex
        direction={{ lg: 'row', sm: 'column' }}
        justifyContent='flex-start'
        mb='2rem'
      >
        <Box
          h='100px'
          w='30%'
          display='flex'
          alignItems={{ lg: 'flex-start', sm: 'center' }}
          justifyContent='flex-start'
          color='#251D3A'
          p={{ lg: '1rem', sm: '0' }}
          mr='1rem'
        >
          <Text fontFamily='openSans' fontSize='1.2rem'>
            Media Partners
          </Text>
        </Box>
        <SimpleGrid
          w='100%'
          columns={{ lg: 4, md: 3, sm: 2 }}
          placeItems='center'
          gridGap='1rem'
          borderRadius='5px'
        >
          {mediaPartners.map((partner, index) => {
            return (
              <Box
                key={index}
                w='100%'
                h='125px'
                display='flex'
                alignItems='center'
                borderRadius='10px'
                bg='white'
                p='1rem'
                onClick={() => window.open(partner.link, '_blank')}
                cursor='pointer'
              >
                <Box
                  // style={{ filter: 'grayscale(1)' }}
                  w={{
                    lg: index === 0 ? '100px' : '150px',
                    md: '100px',
                    sm: '100px'
                  }}
                  m='auto'
                >
                  <Image src={partner.image} alt='partner' placeholder='blur' />
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
      </Flex>

      <Flex
        direction={{ lg: 'row', sm: 'column' }}
        justifyContent='flex-start'
        mb='2rem'
      >
        <Box
          h='100px'
          w='30%'
          display='flex'
          alignItems={{ lg: 'flex-start', sm: 'center' }}
          justifyContent='flex-start'
          color='#251D3A'
          p={{ lg: '1rem', sm: '0' }}
          mr='1rem'
        >
          <Text fontFamily='openSans' fontSize='1.2rem'>
            Tech Partner
          </Text>
        </Box>
        <SimpleGrid
          w='100%'
          columns={{ lg: 4, md: 3, sm: 2 }}
          placeItems='center'
          gridGap='1rem'
          borderRadius='5px'
        >
          {techPartners.map((partner, index) => {
            return (
              <Box
                key={index}
                w='100%'
                h='125px'
                display='flex'
                alignItems='center'
                borderRadius='10px'
                bg='white'
                p='1rem'
                onClick={() => window.open(partner.link, '_blank')}
                cursor='pointer'
              >
                <Box
                  // style={{ filter: 'grayscale(1)' }}
                  w={{ lg: '150px', md: '100px', sm: '100px' }}
                  m='auto'
                >
                  <Image src={partner.image} alt='partner' placeholder='blur' />
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
      </Flex>

      <Flex
        direction={{ lg: 'row', sm: 'column' }}
        justifyContent='flex-start'
        mb='2rem'
      >
        <Box
          h='100px'
          w='30%'
          display='flex'
          alignItems={{ lg: 'flex-start', sm: 'center' }}
          justifyContent='flex-start'
          color='#251D3A'
          p={{ lg: '1rem', sm: '0' }}
          mr='1rem'
        >
          <Text fontFamily='openSans' fontSize='1.2rem'>
            Community Partners
          </Text>
        </Box>
        <SimpleGrid
          w='100%'
          columns={{ lg: 4, md: 3, sm: 2 }}
          placeItems='center'
          gridGap='1rem'
          borderRadius='5px'
        >
          {communityPartners.map((partner, index) => {
            return (
              <Box
                key={index}
                w='100%'
                h='125px'
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                borderRadius='10px'
                bg='white'
                p='1rem'
                onClick={() => window.open(partner.link, '_blank')}
                cursor='pointer'
              >
                <Box
                  // style={{ filter: 'grayscale(1)' }}
                  w={{
                    lg: [0, 4, 5, 7, 11, 13, 15].includes(index)
                      ? '100px'
                      : index === 8
                      ? '80px'
                      : '150px',
                    md: '100px',
                    sm: '100px'
                  }}
                  m='auto'
                >
                  <Image src={partner.image} alt='partner' placeholder='blur' />
                </Box>
                {/* {index === 8 && (
                  <Text
                    fontFamily='figTree'
                    fontSize='.8rem'
                    textAlign='center'
                    pb='10px'
                  >
                    Kyiv ETH Community
                  </Text>
                )} */}
              </Box>
            );
          })}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};
