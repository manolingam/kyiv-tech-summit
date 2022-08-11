import {
  Flex,
  SimpleGrid,
  Box,
  Image as ChakraImage,
  Text
} from '@chakra-ui/react';

export const SectionFour = () => {
  return (
    <Flex
      direction='column'
      px={{ base: '2rem', lg: '5rem' }}
      py={{ base: '2rem', lg: '2rem' }}
      bg='#F1F1F1'
    >
      <Text fontFamily='openSans' fontWeight='bold' mb='2rem'>
        Friends & Partners of Unchain / UkraineDAO / Atlantis World
      </Text>
      <SimpleGrid
        columns={{ lg: 5, md: 3, sm: 2 }}
        placeItems='center'
        gridGap='1rem'
      >
        <Box
          bg='white'
          p='1rem'
          borderRadius='10px'
          h='150px'
          display='flex'
          alignItems='center'
        >
          <ChakraImage src='/assets/logos/near.png' alt='' m='auto' />
        </Box>
        <Box
          bg='white'
          p='1rem'
          borderRadius='10px'
          h='150px'
          display='flex'
          alignItems='center'
        >
          <ChakraImage src='/assets/logos/ethereum.png' alt='' />
        </Box>
        <Box
          bg='white'
          p='1rem'
          borderRadius='10px'
          h='150px'
          display='flex'
          alignItems='center'
        >
          <ChakraImage src='/assets/logos/celo.png' alt='' />
        </Box>
        <Box
          bg='white'
          p='1rem'
          borderRadius='10px'
          h='150px'
          display='flex'
          alignItems='center'
        >
          <ChakraImage src='/assets/logos/zksync.png' alt='' />
        </Box>
        <Box
          bg='white'
          p='1rem'
          borderRadius='10px'
          h='150px'
          display='flex'
          alignItems='center'
        >
          <ChakraImage src='/assets/logos/gnosis.png' alt='' />
        </Box>

        <Box
          bg='white'
          p='1rem'
          borderRadius='10px'
          h='150px'
          display='flex'
          alignItems='center'
        >
          <ChakraImage src='/assets/logos/polygon.png' alt='' />
        </Box>
        <Box
          bg='white'
          p='1rem'
          borderRadius='10px'
          h='150px'
          display='flex'
          alignItems='center'
        >
          <ChakraImage src='/assets/logos/gitcoin.png' alt='' />
        </Box>
        <Box
          bg='white'
          p='1rem'
          borderRadius='10px'
          h='150px'
          display='flex'
          alignItems='center'
        >
          <ChakraImage src='/assets/logos/brave.png' alt='' />
        </Box>
        <Box
          bg='white'
          p='1rem'
          borderRadius='10px'
          h='150px'
          display='flex'
          alignItems='center'
        >
          <ChakraImage src='/assets/logos/developerDao.png' alt='' />
        </Box>
        <Box
          bg='white'
          p='1rem'
          borderRadius='10px'
          h='150px'
          display='flex'
          alignItems='center'
        >
          <ChakraImage src='/assets/logos/sandbox.png' alt='' />
        </Box>

        <Box
          bg='white'
          p='1rem'
          borderRadius='10px'
          h='150px'
          display='flex'
          alignItems='center'
        >
          <ChakraImage src='/assets/logos/givingBlock.png' alt='' />
        </Box>
        <Box
          bg='white'
          p='1rem'
          borderRadius='10px'
          h='150px'
          display='flex'
          alignItems='center'
        >
          <ChakraImage src='/assets/logos/snapshot.png' alt='' />
        </Box>
        <Box
          bg='white'
          p='1rem'
          borderRadius='10px'
          h='150px'
          display='flex'
          alignItems='center'
        >
          <ChakraImage src='/assets/logos/aragon.png' alt='' />
        </Box>
        <Box
          bg='white'
          p='1rem'
          borderRadius='10px'
          h='150px'
          display='flex'
          alignItems='center'
        >
          <ChakraImage src='/assets/logos/optimism.png' alt='' />
        </Box>
        <Box
          bg='white'
          p='1rem'
          borderRadius='10px'
          h='150px'
          w='100%'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <Text fontFamily='openSans' fontSize='0.8rem'>
            And many more..
          </Text>
        </Box>
      </SimpleGrid>
    </Flex>
  );
};
