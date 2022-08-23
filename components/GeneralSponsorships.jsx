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

import { generalSponsorshipsTranslation } from '../utils/language';

export const GeneralSponsorships = ({ language }) => {
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
              {language === 'english'
                ? Object.keys(generalSponsorshipsTranslation)[0]
                : generalSponsorshipsTranslation[
                    Object.keys(generalSponsorshipsTranslation)[0]
                  ]}
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
            <Td>
              {' '}
              {language === 'english'
                ? Object.keys(generalSponsorshipsTranslation)[1]
                : generalSponsorshipsTranslation[
                    Object.keys(generalSponsorshipsTranslation)[1]
                  ]}
            </Td>
            <Td textAlign='center'>Medium</Td>
            <Td textAlign='center'>Small</Td>
          </Tr>
          <Tr>
            <Td>
              {' '}
              {language === 'english'
                ? Object.keys(generalSponsorshipsTranslation)[2]
                : generalSponsorshipsTranslation[
                    Object.keys(generalSponsorshipsTranslation)[2]
                  ]}
            </Td>
            <Td textAlign='center'>Medium</Td>
            <Td textAlign='center'>Small</Td>
          </Tr>
          <Tr>
            <Td>
              {' '}
              {language === 'english'
                ? Object.keys(generalSponsorshipsTranslation)[3]
                : generalSponsorshipsTranslation[
                    Object.keys(generalSponsorshipsTranslation)[3]
                  ]}
            </Td>
            <Td textAlign='center'>Medium</Td>
            <Td textAlign='center'>Small</Td>
          </Tr>
          <Tr>
            <Td>
              {' '}
              {language === 'english'
                ? Object.keys(generalSponsorshipsTranslation)[4]
                : generalSponsorshipsTranslation[
                    Object.keys(generalSponsorshipsTranslation)[4]
                  ]}
            </Td>
            <Td textAlign='center'>+</Td>
            <Td textAlign='center'>+</Td>
          </Tr>
          <Tr>
            <Td>
              {' '}
              {language === 'english'
                ? Object.keys(generalSponsorshipsTranslation)[5]
                : generalSponsorshipsTranslation[
                    Object.keys(generalSponsorshipsTranslation)[5]
                  ]}
            </Td>
            <Td textAlign='center'>2</Td>
            <Td textAlign='center'>1</Td>
          </Tr>
          <Tr>
            <Td>
              {' '}
              {language === 'english'
                ? Object.keys(generalSponsorshipsTranslation)[6]
                : generalSponsorshipsTranslation[
                    Object.keys(generalSponsorshipsTranslation)[6]
                  ]}
              5
            </Td>
            <Td textAlign='center'>2</Td>
          </Tr>
          <Tr>
            <Td>
              {' '}
              {language === 'english'
                ? Object.keys(generalSponsorshipsTranslation)[7]
                : generalSponsorshipsTranslation[
                    Object.keys(generalSponsorshipsTranslation)[7]
                  ]}
            </Td>
            <Td textAlign='center'>2</Td>
            <Td textAlign='center'>1</Td>
          </Tr>
          <Tr>
            <Td>
              {' '}
              {language === 'english'
                ? Object.keys(generalSponsorshipsTranslation)[8]
                : generalSponsorshipsTranslation[
                    Object.keys(generalSponsorshipsTranslation)[8]
                  ]}
            </Td>
            <Td textAlign='center'>4</Td>
            <Td textAlign='center'>2</Td>
          </Tr>
          <Tr>
            <Td>
              {' '}
              {language === 'english'
                ? Object.keys(generalSponsorshipsTranslation)[9]
                : generalSponsorshipsTranslation[
                    Object.keys(generalSponsorshipsTranslation)[9]
                  ]}
            </Td>
            <Td textAlign='center'>+</Td>
            <Td textAlign='center'>-</Td>
          </Tr>
          <Tr>
            <Td>
              {' '}
              {language === 'english'
                ? Object.keys(generalSponsorshipsTranslation)[10]
                : generalSponsorshipsTranslation[
                    Object.keys(generalSponsorshipsTranslation)[10]
                  ]}
            </Td>
            <Td textAlign='center'>+</Td>
            <Td textAlign='center'>-</Td>
          </Tr>
          <Tr>
            <Td>
              {' '}
              {language === 'english'
                ? Object.keys(generalSponsorshipsTranslation)[11]
                : generalSponsorshipsTranslation[
                    Object.keys(generalSponsorshipsTranslation)[11]
                  ]}
            </Td>
            <Td textAlign='center'>+</Td>
            <Td textAlign='center'>-</Td>
          </Tr>
          <Tr>
            <Td>
              {' '}
              {language === 'english'
                ? Object.keys(generalSponsorshipsTranslation)[12]
                : generalSponsorshipsTranslation[
                    Object.keys(generalSponsorshipsTranslation)[12]
                  ]}
            </Td>
            <Td textAlign='center'>+</Td>
            <Td textAlign='center'>-</Td>
          </Tr>
          <Tr>
            <Td>
              {' '}
              {language === 'english'
                ? Object.keys(generalSponsorshipsTranslation)[13]
                : generalSponsorshipsTranslation[
                    Object.keys(generalSponsorshipsTranslation)[13]
                  ]}
            </Td>
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
              {language === 'english'
                ? Object.keys(generalSponsorshipsTranslation)[14]
                : generalSponsorshipsTranslation[
                    Object.keys(generalSponsorshipsTranslation)[14]
                  ]}
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
              {language === 'english'
                ? Object.keys(generalSponsorshipsTranslation)[15]
                : generalSponsorshipsTranslation[
                    Object.keys(generalSponsorshipsTranslation)[15]
                  ]}
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
