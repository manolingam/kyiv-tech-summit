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
      py={{ base: '2rem', lg: '3rem' }}
    >
      <GridItem colSpan={3}>
        <Text fontFamily='openSans' fontSize='1.5rem'>
          Kyiv Tech Summit is a first-of-its-kind unique event. Our aim is to
          bring together some of the best developers, technology providers,
          designers, innovators, and product evangelists who are looking to
          solve tangible, on-the-ground issues to aid the Ukrainian people in
          their fight for freedom.
        </Text>
        <Text fontFamily='openSans' fontWeight='bold' color='#0057b7' mt='1rem'>
          This project and its outcomes will literally save lives!
        </Text>
        <Button
          fontSize='1.2rem'
          fontFamily='figTree'
          bg='#0057b7'
          color='white'
          p='2rem'
          mt='1rem'
          textTransform='uppercase'
          onClick={() =>
            window.open('https://kyiv-tech-summit.devpost.com', '_blank')
          }
          _hover={{ opacity: '0.8' }}
        >
          Join Hackathon
        </Button>
      </GridItem>
      <GridItem colSpan={2}>
        <ChakraImage
          src='/assets/logos/kyiv_tech_summit_mono.png'
          alt='logo'
          w='250px'
          m='auto'
          mt={{ sm: '2rem', lg: 'auto' }}
        />
      </GridItem>
    </Grid>
  );
};
