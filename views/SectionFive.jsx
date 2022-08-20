import {
  Flex,
  SimpleGrid,
  Box,
  Image as ChakraImage,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react';

const partners = [
  {
    image: '/assets/logos/near.png',
    link: 'https://near.org/'
  },
  {
    image: '/assets/logos/ethereum.png',
    link: 'https://ethereum.org/'
  },
  {
    image: '/assets/logos/celo.png',
    link: 'https://celo.org/'
  },
  {
    image: '/assets/logos/zksync.png',
    link: 'https://zksync.io/'
  },
  {
    image: '/assets/logos/gnosis.png',
    link: 'https://gnosis.io/'
  },
  {
    image: '/assets/logos/polygon.png',
    link: 'https://polygon.technology/'
  },
  {
    image: '/assets/logos/gitcoin.png',
    link: 'https://gitcoin.co/'
  },
  {
    image: '/assets/logos/brave.png',
    link: 'https://brave.com/'
  },
  {
    image: '/assets/logos/developerDao.png',
    link: 'https://www.developerdao.com/'
  },
  {
    image: '/assets/logos/sandbox.png',
    link: 'https://www.sandbox.game/'
  },
  {
    image: '/assets/logos/givingBlock.png',
    link: 'https://thegivingblock.com/'
  },
  {
    image: '/assets/logos/snapshot.png',
    link: 'https://snapshot.org/'
  },
  {
    image: '/assets/logos/aragon.png',
    link: 'https://aragon.org/'
  },
  {
    link: 'https://www.optimism.io/',
    image: '/assets/logos/optimism.png'
  }
];

export const SectionFive = () => {
  return (
    <Flex
      w='100%'
      direction='column'
      px={{ base: '2rem', lg: '5rem' }}
      py={{ base: '2rem', lg: '2rem' }}
    >
      <Accordion allowToggle bg='#F1F1F1'>
        <AccordionItem>
          <AccordionButton>
            <Text
              fontFamily='figTree'
              p='1rem'
              fontWeight='bold'
              textAlign='center'
              w='100%'
            >
              Friends & Partners of Unchain / UkraineDAO / Atlantis World
            </Text>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel>
            <SimpleGrid
              columns={{ lg: 5, md: 3, sm: 2 }}
              placeItems='center'
              gridGap='1rem'
              mt='1rem'
            >
              {partners.map((partner, index) => {
                return (
                  <Box
                    key={index}
                    bg='white'
                    p='1rem'
                    borderRadius='10px'
                    h='150px'
                    display='flex'
                    alignItems='center'
                    onClick={() => window.open(partner.link, '_blank')}
                    cursor='pointer'
                  >
                    <ChakraImage
                      style={{ filter: 'grayscale(1)' }}
                      src={partner.image}
                      alt='partner'
                      maxH='150px'
                      m='auto'
                    />
                  </Box>
                );
              })}
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
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};
