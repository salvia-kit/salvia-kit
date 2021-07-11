import Head from 'next/head';
import Container from '@/src/components/container';
import HomeFirstSection from '@/src/components/home/sections/first';
import HomeSecondSection from '@/src/components/home/sections/second';
import DocV3React from '@/src/docs/v3/react/doc';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Salvia-kit</title>
      </Head>
      <Container>
        <HomeFirstSection />
        <HomeSecondSection />
        <DocV3React />
      </Container>
    </>
  );
}
