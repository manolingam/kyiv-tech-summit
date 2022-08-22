import { Divider } from '@chakra-ui/react';

import { SectionOne } from '../views/SectionOne';
import { SectionTwo } from '../views/SectionTwo';
import { SectionThree } from '../views/SectionThree';
import { SectionFour } from '../views/SectionFour';
import { SectionFive } from '../views/SectionFive';
import { SectionSix } from '../views/SectionSix';
import { SectionSeven } from '../views/SectionSeven';
import { SectionEight } from '../views/SectionEight';
import { SectionNine } from '../views/SectionNine';

export default function Home() {
  return (
    <>
      <SectionOne />
      <SectionTwo />

      <SectionSeven />
      <SectionEight />

      <SectionThree />

      <Divider opacity='0.9' borderBottomWidth='2px' maxW='90%' mt='1rem' />
      <SectionFour />
      <SectionFive />
      <SectionSix />

      <SectionNine />
    </>
  );
}
