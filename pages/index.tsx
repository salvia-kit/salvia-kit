import Head from 'next/head';
import Container from '@/src/components/container';
import HomeFirstSection from '@/src/components/home/sections/first';
import HomeSecondSection from '@/src/components/home/sections/second';
import HomeThirdSection from '@/src/components/home/sections/third';
import HomeFourthSection from '@/src/components/home/sections/fourth';
import HomeFifthSection from '@/src/components/home/sections/fifth';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Salvia-kit</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Container>
        <HomeFirstSection />
        <HomeSecondSection />
        <HomeThirdSection />
        <HomeFourthSection />
        <HomeFifthSection />
      </Container>
    </>
  );
}
