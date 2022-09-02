import {
  Flex,
  HStack,
  VStack,
  SimpleGrid,
  Link as ChakraLink,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react';
import Image from 'next/image';

import { speakers } from '../utils/constants';

export const Speakers = ({ language }) => {
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
              {language === 'english' ? 'Speakers' : 'колонки'}
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
                    justifyContent='space-evenly'
                    border='2px solid #251D3A'
                    minH='350px'
                    w='100%'
                    borderRadius='5px'
                  >
                    <Box
                      w='150px'
                      h='150px'
                      borderRadius='50%'
                      overflow='hidden'
                    >
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        placeholder='blur'
                      />
                    </Box>
                    <Box
                      display='flex'
                      flexDirection='column'
                      alignItems='center'
                      justifyContent='center'
                    >
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
                        minH='20px'
                        px='1rem'
                      >
                        {speaker.role}
                      </Text>
                      <HStack mt='15px' color='#251D3A'>
                        <ChakraLink
                          href={speaker.link}
                          isExternal
                          fontSize='25px'
                          w='25px'
                          h='25px'
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
                    </Box>
                  </Flex>
                );
              })}
              <VStack
                minH='350px'
                w='100%'
                alignItems='center'
                justifyContent='center'
                bg='#ffd700'
                color='#0057b7'
              >
                <Box fontSize='45px'>
                  <i className='fa-solid fa-key'></i>
                </Box>
                <Text
                  fontSize='1.2rem'
                  textAlign='center'
                  fontFamily='openSans'
                  fontWeight='bold'
                  color='#0057b7'
                  px='1rem'
                >
                  {language === 'english'
                    ? 'And 4 more top secret keynote speakers'
                    : 'І ще 4 секретних доповідача'}
                </Text>
              </VStack>
            </SimpleGrid>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};
