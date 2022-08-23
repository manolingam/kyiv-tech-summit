import {
  Flex,
  Grid,
  GridItem,
  Text,
  Highlight,
  Button,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Link as ChakraLink
} from '@chakra-ui/react';

import { useState } from 'react';

import { GeneralSponsorships } from '../components/GeneralSponsorships';
import { OtherSponsorships } from '../components/OtherSponsorships';
import { sectionFourTranslation } from '../utils/language';

export const SectionFour = ({ language }) => {
  const [isGeneralSponsorshipsOpen, setGeneranSponsorshipsOpen] =
    useState(false);

  const [isOtherSponsorshipsOpen, setOtherSponsorshipsOpen] = useState(false);

  return (
    <Flex
      direction='column'
      py={{ base: '2rem', lg: '1rem' }}
      px={{ base: '2rem', lg: '5rem' }}
    >
      <Grid
        templateColumns={{ lg: 'repeat(5, 1fr)', sm: 'repeat(2, 1fr)' }}
        gap='2rem'
        pt={{ lg: '1rem' }}
      >
        <GridItem colSpan={{ lg: 1, sm: 2 }}>
          <Text fontFamily='figTree' fontSize='1.5rem' fontWeight='bold'>
            {language === 'english'
              ? Object.keys(sectionFourTranslation)[0]
              : sectionFourTranslation[Object.keys(sectionFourTranslation)[0]]}
          </Text>

          <Text
            fontFamily='openSans'
            mt='2rem'
            bg='#F1F1F1'
            p='10px'
            borderRadius='10px'
            fontSize='.8rem'
          >
            <Highlight query='Important' styles={{ fontWeight: 'bold' }}>
              {language === 'english'
                ? Object.keys(sectionFourTranslation)[1]
                : sectionFourTranslation[
                    Object.keys(sectionFourTranslation)[1]
                  ]}
            </Highlight>
          </Text>
        </GridItem>
        <GridItem colSpan={{ lg: 4, sm: 2 }}>
          <Text fontFamily='openSans' fontSize='1.2rem' mb='10px'>
            {language === 'english'
              ? Object.keys(sectionFourTranslation)[2]
              : sectionFourTranslation[Object.keys(sectionFourTranslation)[2]]}
          </Text>
          <Text fontFamily='openSans' fontSize='1.2rem' mb='10px'>
            {language === 'english'
              ? Object.keys(sectionFourTranslation)[3]
              : sectionFourTranslation[Object.keys(sectionFourTranslation)[3]]}
          </Text>
          <Text fontFamily='openSans' fontSize='1.2rem' mb='10px'>
            {language === 'english'
              ? Object.keys(sectionFourTranslation)[4]
              : sectionFourTranslation[Object.keys(sectionFourTranslation)[4]]}
          </Text>
          <Text fontFamily='openSans' fontSize='1.2rem' mb='10px'>
            {language === 'english'
              ? Object.keys(sectionFourTranslation)[5]
              : sectionFourTranslation[Object.keys(sectionFourTranslation)[5]]}
          </Text>
          <Text fontFamily='openSans' fontSize='1.2rem'>
            {language === 'english'
              ? Object.keys(sectionFourTranslation)[6]
              : sectionFourTranslation[Object.keys(sectionFourTranslation)[6]]}
          </Text>

          <Flex
            direction={{ lg: 'row', sm: 'column' }}
            w='100%'
            justifyContent='center'
            mt={{ sm: '2rem' }}
          >
            <Button
              w='100%'
              onClick={() => setGeneranSponsorshipsOpen(true)}
              fontFamily='figTree'
              fontSize={{ lg: '1.2rem', sm: '.8rem' }}
              bg='#0057b7'
              color='white'
              mr={{ lg: '1rem' }}
              mb={{ sm: '1rem' }}
              _hover={{ opacity: '0.8' }}
            >
              {language === 'english'
                ? Object.keys(sectionFourTranslation)[7]
                : sectionFourTranslation[
                    Object.keys(sectionFourTranslation)[7]
                  ]}
            </Button>
            <Button
              w='100%'
              fontFamily='figTree'
              fontSize={{ lg: '1.2rem', sm: '.8rem' }}
              color='#0057b7'
              onClick={() => setOtherSponsorshipsOpen(true)}
            >
              {language === 'english'
                ? Object.keys(sectionFourTranslation)[8]
                : sectionFourTranslation[
                    Object.keys(sectionFourTranslation)[8]
                  ]}
            </Button>
          </Flex>
        </GridItem>
      </Grid>

      <Text
        fontFamily='figTree'
        mt='2rem'
        textAlign='center'
        fontStyle='italic'
      >
        {language === 'english'
          ? Object.keys(sectionFourTranslation)[9]
          : sectionFourTranslation[Object.keys(sectionFourTranslation)[9]]}
        <ChakraLink
          color='#0057b7'
          href='mailto:info@kyivtechsummit.com'
          isExternal
          fontWeight='bold'
        >
          info@kyivtechsummit.com
        </ChakraLink>{' '}
      </Text>

      <Modal
        size='full'
        isOpen={isGeneralSponsorshipsOpen}
        onClose={() => setGeneranSponsorshipsOpen(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {language === 'ukrainian'
              ? 'Детальніше про генеральне спонсорство'
              : 'General Sponsorships'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <GeneralSponsorships language={language} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setGeneranSponsorshipsOpen(false)}>
              {language === 'ukrainian' ? 'Закрити' : 'Close'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        size='full'
        isOpen={isOtherSponsorshipsOpen}
        onClose={() => setOtherSponsorshipsOpen(false)}
      >
        <ModalOverlay />
        <ModalContent bg='#F1F1F1'>
          <ModalHeader>
            {language === 'ukrainian'
              ? 'Детальніше про інші спонсорські пакети'
              : 'Other Sponsorships'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <OtherSponsorships language={language} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOtherSponsorshipsOpen(false)}>
              {language === 'ukrainian' ? 'Закрити' : 'Close'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
