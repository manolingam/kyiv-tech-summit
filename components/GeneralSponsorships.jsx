import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tfoot
} from '@chakra-ui/react';

export const GeneralSponsorships = () => {
  return (
    <TableContainer
      py={{ base: '2rem', lg: '1rem' }}
      px={{ base: '2rem', lg: '5rem' }}
    >
      <Table variant='striped'>
        <TableCaption fontFamily='openSans' fontSize='.8rem'>
          Note: ½ of sponsorships will be allocated for bounties/prizes, the
          other ½ will cover the operational costs & fund humanitarian aid for
          Ukrainian kids.
        </TableCaption>
        <Thead>
          <Tr>
            <Th
              fontFamily='figTree'
              fontSize='1.2rem'
              bg='black'
              color='white'
              textTransform='none'
            >
              Feature
            </Th>
            <Th
              fontFamily='figTree'
              fontSize='1.2rem'
              bg='#005bbb'
              color='white'
              textTransform='none'
              textAlign='center'
            >
              Energized Blue
            </Th>
            <Th
              fontFamily='figTree'
              fontSize='1.2rem'
              bg='#ffd500'
              color='black'
              textTransform='none'
              textAlign='center'
            >
              Supportive Yellow
            </Th>
          </Tr>
        </Thead>
        <Tbody fontFamily='openSans'>
          <Tr>
            <Td>Logo across all digital campaigns</Td>
            <Td textAlign='center'>Medium</Td>
            <Td textAlign='center'>Small</Td>
          </Tr>
          <Tr>
            <Td>Logo on event / stage banners</Td>
            <Td textAlign='center'>Medium</Td>
            <Td textAlign='center'>Small</Td>
          </Tr>
          <Tr>
            <Td>Booth in sponsor area</Td>
            <Td textAlign='center'>Medium</Td>
            <Td textAlign='center'>Small</Td>
          </Tr>
          <Tr>
            <Td>Pre & during event/hackathon comms</Td>
            <Td textAlign='center'>+</Td>
            <Td textAlign='center'>+</Td>
          </Tr>
          <Tr>
            <Td>Speaker invitations</Td>
            <Td textAlign='center'>2</Td>
            <Td textAlign='center'>1</Td>
          </Tr>
          <Tr>
            <Td>IRL conference pass</Td>
            <Td textAlign='center'>5</Td>
            <Td textAlign='center'>2</Td>
          </Tr>
          <Tr>
            <Td>Hosted livestreams</Td>
            <Td textAlign='center'>2</Td>
            <Td textAlign='center'>1</Td>
          </Tr>
          <Tr>
            <Td>Maximum # of Bounties in Hackathon</Td>
            <Td textAlign='center'>4</Td>
            <Td textAlign='center'>2</Td>
          </Tr>
          <Tr>
            <Td>Custom Promo Designs/POAPs</Td>
            <Td textAlign='center'>+</Td>
            <Td textAlign='center'>-</Td>
          </Tr>
          <Tr>
            <Td>Dedicated Partner Support</Td>
            <Td textAlign='center'>+</Td>
            <Td textAlign='center'>-</Td>
          </Tr>
          <Tr>
            <Td>Community Growth {'>'} Access to Participants Info</Td>
            <Td textAlign='center'>+</Td>
            <Td textAlign='center'>-</Td>
          </Tr>
          <Tr>
            <Td>Promotion to 50k+ tech talent of Ukraine</Td>
            <Td textAlign='center'>+</Td>
            <Td textAlign='center'>-</Td>
          </Tr>
          <Tr>
            <Td>Promotion to 1.5M+ Ukrainians via Media Partners</Td>
            <Td textAlign='center'>+</Td>
            <Td textAlign='center'>-</Td>
          </Tr>
          <Tr>
            <Th
              fontFamily='figTree'
              textTransform='none'
              fontSize='1.2rem'
              fontWeight='bold'
            >
              Remaining Sponsorships
            </Th>
            <Th
              fontFamily='figTree'
              textTransform='none'
              fontSize='1.2rem'
              fontWeight='bold'
              textAlign='center'
            >
              3/4
            </Th>
            <Th
              fontFamily='figTree'
              textTransform='none'
              fontSize='1.2rem'
              fontWeight='bold'
              textAlign='center'
            >
              1/10
            </Th>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th
              fontFamily='figTree'
              fontSize='1.2rem'
              bg='black'
              color='white'
              textTransform='none'
            >
              Total
            </Th>
            <Th
              fontFamily='figTree'
              fontSize='1.2rem'
              bg='#005bbb'
              color='white'
              textTransform='none'
              textAlign='center'
            >
              $25,000
            </Th>
            <Th
              fontFamily='figTree'
              fontSize='1.2rem'
              bg='#ffd500'
              color='black'
              textTransform='none'
              textAlign='center'
            >
              $10,000
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};
