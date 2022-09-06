import Head from 'next/head';

const logo =
  'https://res.cloudinary.com/saimano/image/upload/v1662473143/Kyiv%20Tech%20Summit/KTS_Logo_hfbyxr.png';

export const Meta = () => {
  return (
    <>
      <Head>
        <title>Kyiv Tech Summit</title>
        <meta
          name='description'
          content='Find here the event schedule for Kyiv Tech Summit - A web3 hackathon for Ukraine.'
        />
        <meta property='og:title' content='Kyiv Tech Summit' />
        <meta
          property='og:description'
          content='Find here the event schedule for Kyiv Tech Summit - A web3 hackathon for Ukraine.'
        />
        <meta property='og:image' content={logo} />
        <meta property='og:url' content='https://www.kyivtechsummit.com/' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Kyiv Tech Summit' />
        <meta
          name='twitter:description'
          content='Find here the event schedule for Kyiv Tech Summit - A web3 hackathon for Ukraine.'
        />
        <meta name='twitter:image' content={logo} />
        <meta property='og:type' content='website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  );
};
