import Head from 'next/head';
import Container from '@/src/components/container';
import HomeFirstSection from '@/src/components/home/sections/first';
import HomeSecondSection from '@/src/components/home/sections/second';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Salvia-kit</title>
      </Head>
      <Container>
        <HomeFirstSection />
        <HomeSecondSection />
      </Container>
    </>
  );
}
