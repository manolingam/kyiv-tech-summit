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
import { otherSponsorshipsTranslation } from '../utils/language';

export const OtherSponsorships = ({ language }) => {
  return (
    <Flex
      direction='column'
      py={{ base: '2rem', lg: '1rem' }}
      px={{ base: '2rem', lg: '5rem' }}
    >
      <SimpleGrid columns={{ lg: 2, sm: 1 }} gap='2rem'>
        <Flex
          direction='column'
          justifyContent='space-between'
          position='relative'
          opacity='0.5'
        >
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
              {language === 'english'
                ? Object.keys(otherSponsorshipsTranslation)[0]
                : otherSponsorshipsTranslation[
                    Object.keys(otherSponsorshipsTranslation)[0]
                  ]}
            </Text>
            <Text fontFamily='figTree' fontWeight='bold' color='#E64848'>
              $10,000
            </Text>

            <List spacing={3} fontFamily='openSans' fontSize='.8rem' mt='1rem'>
              <ListItem>
                <ListIcon as={CheckCircleIcon} />
                {language === 'english'
                  ? Object.keys(otherSponsorshipsTranslation)[1]
                  : otherSponsorshipsTranslation[
                      Object.keys(otherSponsorshipsTranslation)[1]
                    ]}
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} />
                {language === 'english'
                  ? Object.keys(otherSponsorshipsTranslation)[2]
                  : otherSponsorshipsTranslation[
                      Object.keys(otherSponsorshipsTranslation)[2]
                    ]}
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} />
                {language === 'english'
                  ? Object.keys(otherSponsorshipsTranslation)[3]
                  : otherSponsorshipsTranslation[
                      Object.keys(otherSponsorshipsTranslation)[3]
                    ]}
              </ListItem>
            </List>
          </Flex>

          <VStack alignItems='flex-start' mt='2rem'>
            <Text fontFamily='figTree'>
              {language === 'english'
                ? Object.keys(otherSponsorshipsTranslation)[4]
                : otherSponsorshipsTranslation[
                    Object.keys(otherSponsorshipsTranslation)[4]
                  ]}
            </Text>
            <Text fontFamily='figTree'>
              {language === 'english'
                ? Object.keys(otherSponsorshipsTranslation)[5]
                : otherSponsorshipsTranslation[
                    Object.keys(otherSponsorshipsTranslation)[5]
                  ]}
            </Text>
            <Text fontFamily='figTree'>
              {language === 'english'
                ? Object.keys(otherSponsorshipsTranslation)[6]
                : otherSponsorshipsTranslation[
                    Object.keys(otherSponsorshipsTranslation)[6]
                  ]}
            </Text>
            <Text fontFamily='figTree'>
              {language === 'english'
                ? Object.keys(otherSponsorshipsTranslation)[7]
                : otherSponsorshipsTranslation[
                    Object.keys(otherSponsorshipsTranslation)[7]
                  ]}
            </Text>
            <Text fontFamily='figTree'>
              {language === 'english'
                ? Object.keys(otherSponsorshipsTranslation)[8]
                : otherSponsorshipsTranslation[
                    Object.keys(otherSponsorshipsTranslation)[8]
                  ]}
            </Text>
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
            {language === 'english'
              ? Object.keys(otherSponsorshipsTranslation)[9]
              : otherSponsorshipsTranslation[
                  Object.keys(otherSponsorshipsTranslation)[9]
                ]}
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
              {language === 'english'
                ? Object.keys(otherSponsorshipsTranslation)[10]
                : otherSponsorshipsTranslation[
                    Object.keys(otherSponsorshipsTranslation)[10]
                  ]}
            </Text>
            <Text fontFamily='figTree' fontWeight='bold' color='#5800FF'>
              $10,000
            </Text>

            <List spacing={3} fontFamily='openSans' fontSize='.8rem' mt='1rem'>
              <ListItem>
                <ListIcon as={CheckCircleIcon} />
                {language === 'english'
                  ? Object.keys(otherSponsorshipsTranslation)[11]
                  : otherSponsorshipsTranslation[
                      Object.keys(otherSponsorshipsTranslation)[11]
                    ]}
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} />
                {language === 'english'
                  ? Object.keys(otherSponsorshipsTranslation)[12]
                  : otherSponsorshipsTranslation[
                      Object.keys(otherSponsorshipsTranslation)[12]
                    ]}
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} />
                {language === 'english'
                  ? Object.keys(otherSponsorshipsTranslation)[13]
                  : otherSponsorshipsTranslation[
                      Object.keys(otherSponsorshipsTranslation)[13]
                    ]}
              </ListItem>
            </List>
          </Flex>

          <VStack alignItems='flex-start' mt='2rem'>
            <Text fontFamily='figTree'>
              {language === 'english'
                ? Object.keys(otherSponsorshipsTranslation)[4]
                : otherSponsorshipsTranslation[
                    Object.keys(otherSponsorshipsTranslation)[4]
                  ]}
            </Text>
            <Text fontFamily='figTree'>
              {language === 'english'
                ? Object.keys(otherSponsorshipsTranslation)[5]
                : otherSponsorshipsTranslation[
                    Object.keys(otherSponsorshipsTranslation)[5]
                  ]}
            </Text>
            <Text fontFamily='figTree'>
              {language === 'english'
                ? Object.keys(otherSponsorshipsTranslation)[6]
                : otherSponsorshipsTranslation[
                    Object.keys(otherSponsorshipsTranslation)[6]
                  ]}
            </Text>
            <Text fontFamily='figTree'>
              {language === 'english'
                ? Object.keys(otherSponsorshipsTranslation)[7]
                : otherSponsorshipsTranslation[
                    Object.keys(otherSponsorshipsTranslation)[7]
                  ]}
            </Text>
            <Text fontFamily='figTree'>
              {language === 'english'
                ? Object.keys(otherSponsorshipsTranslation)[8]
                : otherSponsorshipsTranslation[
                    Object.keys(otherSponsorshipsTranslation)[8]
                  ]}
            </Text>
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
            {language === 'english'
              ? Object.keys(otherSponsorshipsTranslation)[14]
              : otherSponsorshipsTranslation[
                  Object.keys(otherSponsorshipsTranslation)[14]
                ]}
          </Text>
        </Flex>

        {/* <Flex direction='column' position='relative' opacity='.5'>
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
        </Flex> */}
      </SimpleGrid>
    </Flex>
  );
};
