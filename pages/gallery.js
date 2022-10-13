/* eslint-disable react-hooks/exhaustive-deps */
import {
  Flex,
  Image as ChakraImage,
  Link as ChakraLink,
  Skeleton,
  SimpleGrid,
  Button,
  Text
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';

import { files } from '../utils/gallery';

const RECORDS_PER_PAGE = 9;

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentRecords, setCurrentRecords] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const paginate = (_records, _pageNumber) => {
    _pageNumber ? setCurrentPage(_pageNumber) : null;
    const indexOfLastRecord = currentPage * RECORDS_PER_PAGE;
    const indexOfFirstRecord = indexOfLastRecord - RECORDS_PER_PAGE;
    const currentRecords = _records.slice(
      indexOfFirstRecord,
      indexOfLastRecord
    );

    setCurrentRecords(currentRecords);
  };

  const cropRecords = (_files, _page) => {
    setTotalPages(Math.ceil(_files.length / RECORDS_PER_PAGE));
    paginate(_files, _page);
  };

  useEffect(() => {
    cropRecords(files);
  }, [currentPage]);

  useEffect(() => {
    cropRecords(files);
  }, []);

  return (
    <Flex
      w='100%'
      direction='column'
      px={{ base: '2rem', lg: '5rem' }}
      pb={{ base: '2rem', lg: '2rem' }}
      py='2rem'
    >
      <Text
        fontFamily='figTree'
        bg='#0057b7'
        color='white'
        p='1rem'
        fontWeight='bold'
        textAlign='center'
      >
        Gallery 2022
      </Text>
      <Text
        fontFamily='openSans'
        color='black'
        textAlign='center'
        my='1rem'
        fontStyle='italic'
        fontSize='.8rem'
      >
        * Images are fetched from IPFS - your patience is appreciated.
      </Text>

      <SimpleGrid columns={{ lg: '3', md: '2', sm: '1' }} gap='4'>
        {currentRecords.map((file, index) => {
          return (
            <ChakraLink
              key={index}
              href={`${process.env.NEXT_PUBLIC_PUBLIC_IPFS_GATEWAY}/ipfs/${file.cid}`}
              isExternal
              _hover={{
                opacity: 0.8
              }}
            >
              <ChakraImage
                src={`${process.env.NEXT_PUBLIC_IPFS_SUBDOMAIN}/ipfs/${file.cid}`}
                crossOrigin='anonymous'
                alt='minted nft'
                maxH='200px'
                w='100%'
                objectFit='cover'
                fallback={<Skeleton h='200px' w='100%' />}
              />
            </ChakraLink>
          );
        })}
      </SimpleGrid>

      <Flex
        w='100%'
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        mt='2rem'
      >
        <Button
          bg='black'
          color='white'
          fontFamily='figTree'
          disabled={currentPage - 1 == 0}
          onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
          _hover={{
            opacity: currentPage - 1 == 0 ? 0.5 : 0.8
          }}
        >
          Prev
        </Button>
        {totalPages > 0 && (
          <Text fontFamily='figTree'>
            Page {currentPage} of {totalPages}
          </Text>
        )}
        <Button
          bg='black'
          color='white'
          fontFamily='figTree'
          disabled={currentPage + 1 > totalPages}
          onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
          _hover={{
            opacity: currentPage + 1 > totalPages ? 0.5 : 0.8
          }}
        >
          Next
        </Button>
      </Flex>
    </Flex>
  );
}
