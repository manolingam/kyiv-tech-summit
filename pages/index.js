import { useContext } from 'react';
// import { Divider } from '@chakra-ui/react';
import { AppContext } from '../context/AppContext';

import { SplashIntro } from '../views/SplashIntro';
import { Goals } from '../views/Goals';
import { Sponsors } from '../views/Sponsors';
import { Partners } from '../views/Partners';
import { EventDetails } from '../views/EventDetails';
// import { Sponsorships } from '../views/Sponsorships';
import { Speakers } from '../views/Speakers';
import { Organizers } from '../views/Organizers';
import { Contributions } from '../views/Contributions';

export default function Home() {
  const context = useContext(AppContext);
  return (
    <>
      <SplashIntro
        language={context.isUkraineVersion ? 'ukrainian' : 'english'}
      />
      <Goals language={context.isUkraineVersion ? 'ukrainian' : 'english'} />
      <Sponsors />
      <Partners />
      <Speakers />
      <EventDetails
        language={context.isUkraineVersion ? 'ukrainian' : 'english'}
      />
      {/* <Divider opacity='0.9' borderBottomWidth='2px' maxW='90%' mt='1rem' /> */}
      {/* <Sponsorships
        language={context.isUkraineVersion ? 'ukrainian' : 'english'}
      /> */}
      <Organizers
        language={context.isUkraineVersion ? 'ukrainian' : 'english'}
      />
      <Contributions
        language={context.isUkraineVersion ? 'ukrainian' : 'english'}
      />
    </>
  );
}
