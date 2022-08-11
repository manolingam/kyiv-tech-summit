import Head from 'next/head';

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
        <meta property='og:type' content='website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  );
};
