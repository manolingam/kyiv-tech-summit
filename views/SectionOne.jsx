import {
  Grid,
  GridItem,
  Image as ChakraImage,
  Text,
  Button
} from '@chakra-ui/react';

export const SectionOne = () => {
  return (
    <Grid
      templateColumns={{ lg: 'repeat(5, 1fr)', sm: 'repeat(2, 1fr)' }}
      px={{ base: '2rem', lg: '5rem' }}
      py={{ base: '2rem', lg: '2rem' }}
    >
      <GridItem colSpan={3}>
        <Text fontFamily='openSans'>
          Kyiv Tech Summit is a first-of-its-kind unique event. Our aim is to
          bring together some of the best developers, technology providers,
          designers, innovators, and product evangelists who are looking to
          solve tangible, on-the-ground issues to aid the Ukrainian people in
          their fight for freedom.
        </Text>
        <Text fontFamily='openSans' color='#5800FF' mt='1rem'>
          This project and its outcomes will literally save lives!
        </Text>
        <Button
          fontFamily='figTree'
          bg='#5800FF'
          color='white'
          mt='1rem'
          onClick={() =>
            window.open('https://kyiv-tech-summit.devpost.com', '_blank')
          }
          _hover={{ bg: '#251D3A' }}
        >
          Join Hackathon
        </Button>
      </GridItem>
      <GridItem colSpan={2}>
        <ChakraImage
          src='/assets/logos/kyiv_tech_summit_mono.png'
          alt='logo'
          w='200px'
          m='auto'
          mt={{ sm: '2rem' }}
        />
      </GridItem>
    </Grid>
  );
};
