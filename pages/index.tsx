import Container from '../src/components/container';
import HomeFirstSection from '@/src/components/home/sections/first';
import Head from 'next/head';
import HomeSecondSection from '@/src/components/home/sections/second';
import DocV1React from '@/src/docs/v1-2/react/doc';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Salvia-kit</title>
      </Head>
      <Container>
        <HomeFirstSection />
        <HomeSecondSection />
        <DocV1React />
      </Container>
    </>
  );
}
