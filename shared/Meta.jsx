import Head from 'next/head';

import logo from '../public/assets/logos/kyiv_tech_summit.png';

export const Meta = () => {
  return (
    <>
      <Head>
        <title>Kyiv Tech Summit</title>
        <meta name='description' content='A web3 hackathon for Ukraine.' />
        <meta property='og:title' content='Kyiv Tech Summit' />
        <meta
          property='og:description'
          content='A web3 hackathon for Ukraine.'
        />
        <meta property='og:image' content={logo} />
        <meta property='og:url' content='https://www.kyivtechsummit.com/' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Kyiv Tech Summit' />
        <meta
          name='twitter:description'
          content='A web3 hackathon for Ukraine.'
        />
        <meta name='twitter:image' content={logo} />
        <meta property='og:type' content='website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  );
};
