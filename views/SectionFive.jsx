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
  useDisclosure
} from '@chakra-ui/react';

import { useState } from 'react';

import { GeneralSponsorships } from '../components/GeneralSponsorships';
import { OtherSponsorships } from '../components/OtherSponsorships';

export const SectionFive = () => {
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
        // px={{ base: '2rem', lg: '5rem' }}
        gap='2rem'
        pt={{ lg: '1rem' }}
      >
        <GridItem colSpan={{ lg: 1, sm: 2 }}>
          <Text fontFamily='figTree' fontSize='1.5rem' fontWeight='bold'>
            Sponsorships
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
              Important Sponsorship include ½ Hackathon prize money (i.e. $15k
              sponsorship include $7.5k bounties)
            </Highlight>
          </Text>
        </GridItem>
        <GridItem colSpan={{ lg: 4, sm: 2 }}>
          <Text fontFamily='openSans' mb='10px'>
            Kyiv Tech Summit (KTS) is a not-for-profit, community-driven,
            initiative.
          </Text>
          <Text fontFamily='openSans' mb='10px'>
            Many of our partners are providing their services at a substantial
            discount or pro-bono, as the world understands the importance of
            this critical initiative
          </Text>
          <Text fontFamily='openSans' mb='10px'>
            Kyiv Tech Summit will require some operational expenses to ensure
            the quality and safety of the event. Half of the sponsorship
            allocation will be allocated for hackathon bounties. The remaining
            sponsorship funds (after 50% bounties allocation and ops expenses)
            will be donated to help those directly impacted by the war. (A
            detailed financial and transparency report will be published
            shortly).
          </Text>
          <Text fontFamily='openSans' mb='10px'>
            Kyiv Tech Summit will have global media outreach - both via
            Ukrainian and international media platforms, as well as influencers
            and bloggers. Of the networks we have already spoken to, 100% have
            confirmed their attendance.
          </Text>
          <Text fontFamily='openSans'>
            Finally, we are taking all necessary precautions to ensure the
            safety of all attendees, media, and staff throughout the event. (A
            detailed safety report will be published shortly).
          </Text>
        </GridItem>
      </Grid>

      <Flex
        direction={{ lg: 'row', sm: 'column' }}
        w='100%'
        justifyContent='center'
        mt={{ sm: '2rem' }}
      >
        <Button
          onClick={() => setGeneranSponsorshipsOpen(true)}
          fontFamily='figTree'
          bg='#5800FF'
          color='white'
          mr={{ lg: '1rem' }}
          mb={{ sm: '1rem' }}
        >
          View general sponsorships
        </Button>
        <Button
          fontFamily='figTree'
          color='#5800FF'
          onClick={() => setOtherSponsorshipsOpen(true)}
        >
          View other sponsorships
        </Button>
      </Flex>

      <Modal
        size='full'
        isOpen={isGeneralSponsorshipsOpen}
        onClose={() => setGeneranSponsorshipsOpen(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>General Sponsorships</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <GeneralSponsorships />
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setGeneranSponsorshipsOpen(false)}>
              Close
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
          <ModalHeader>Other Sponsorships</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <OtherSponsorships />
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOtherSponsorshipsOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
