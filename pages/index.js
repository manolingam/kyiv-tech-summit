import { useContext } from 'react';
import { Divider } from '@chakra-ui/react';
import { AppContext } from '../context/AppContext';

import { SectionOne } from '../views/SectionOne';
import { SectionTwo } from '../views/SectionTwo';
import { SectionThree } from '../views/SectionThree';
import { SectionFour } from '../views/SectionFour';
// import { SectionFive } from '../views/SectionFive';
import { SectionSix } from '../views/SectionSix';
import { SectionSeven } from '../views/SectionSeven';
import { SectionEight } from '../views/SectionEight';
import { SectionNine } from '../views/SectionNine';

export default function Home() {
  const context = useContext(AppContext);
  return (
    <>
      <SectionOne
        language={context.isUkraineVersion ? 'ukrainian' : 'english'}
      />
      <SectionTwo
        language={context.isUkraineVersion ? 'ukrainian' : 'english'}
      />

      <SectionEight />
      <SectionSeven />

      <SectionThree
        language={context.isUkraineVersion ? 'ukrainian' : 'english'}
      />

      <Divider opacity='0.9' borderBottomWidth='2px' maxW='90%' mt='1rem' />
      <SectionFour
        language={context.isUkraineVersion ? 'ukrainian' : 'english'}
      />
      {/* <SectionFive /> */}
      <SectionSix
        language={context.isUkraineVersion ? 'ukrainian' : 'english'}
      />

      <SectionNine
        language={context.isUkraineVersion ? 'ukrainian' : 'english'}
      />
    </>
  );
}
