import {
  Flex,
  HStack,
  SimpleGrid,
  Link as ChakraLink,
  Image as ChakraImage,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react';

import { speakers } from '../utils/constants';

export const Speakers = () => {
  return (
    <Flex
      w='100%'
      direction='column'
      px={{ base: '2rem', lg: '5rem' }}
      py={{ base: '2rem', lg: '2rem' }}
    >
      <Accordion allowToggle defaultIndex={[0]}>
        <AccordionItem>
          <AccordionButton>
            <Text
              fontFamily='figTree'
              p='1rem'
              fontWeight='bold'
              textAlign='center'
              w='100%'
            >
              Speakers
            </Text>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel>
            <SimpleGrid
              columns={{ lg: 4, md: 3, sm: 1 }}
              placeItems='center'
              gridGap='1rem'
              mt='1rem'
            >
              {speakers.map((speaker, index) => {
                return (
                  <Flex
                    key={index}
                    direction='column'
                    alignItems='center'
                    justifyContent='center'
                    border='2px solid #251D3A'
                    minH='300px'
                    w='100%'
                    p='1rem'
                    borderRadius='5px'
                  >
                    <ChakraImage
                      w='auto'
                      h='100px'
                      src={speaker.image}
                      alt={speaker.name}
                      borderRadius='50%'
                      style={{ filter: 'grayscale(1)' }}
                      mb='15px'
                    />
                    <Text
                      color='#251D3A'
                      fontSize='1.2rem'
                      fontFamily='openSans'
                      fontWeight='bold'
                    >
                      {speaker.name}
                    </Text>
                    <Text
                      color='#251D3A'
                      textAlign='center'
                      fontFamily='openSans'
                      fontSize='0.8rem'
                      mt='5px'
                      minH='50px'
                    >
                      {speaker.role}
                    </Text>
                    <HStack mt='15px' color='#251D3A'>
                      <ChakraLink
                        href={speaker.link}
                        isExternal
                        fontSize='15px'
                        w='15px'
                        h='15px'
                      >
                        {speaker.linkType === 'twitter' && (
                          <span>
                            <i className='fab fa-twitter'></i>
                          </span>
                        )}
                        {speaker.linkType === 'linkedin' && (
                          <span>
                            <i className='fa-brands fa-linkedin'></i>
                          </span>
                        )}
                      </ChakraLink>
                    </HStack>
                  </Flex>
                );
              })}
            </SimpleGrid>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};
