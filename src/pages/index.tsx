import Head from 'next/head';
import Container from '@/components/Container';
import HomeFirstSection from '@/components/home/sections/first';
import HomeSecondSection from '@/components/home/sections/second';
import HomeThirdSection from '@/components/home/sections/third';
import HomeFourthSection from '@/components/home/sections/fourth';
import HomeFifthSection from '@/components/home/sections/fifth';
import HomeArrivalSection from '@/components/home/sections/arrival';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Salvia-kit - Beautiful Dashboards built with Tailwind CSS</title>
        <meta
          name="title"
          content="Salvia-kit - Beautiful Dashboards built with Tailwind CSS"
        />
        <meta
          name="description"
          content="Salvia-kit provides the most beautiful dashboard templates built with Tailwind CSS for React, Next.js, Vue and Nuxt. It's free. Explore and enjoy the experience."
        />
        <link rel="canonical" href="https://www.salvia-kit.com" />
      </Head>
      <Container>
        <HomeFirstSection />
        <HomeArrivalSection />
        <HomeSecondSection />
        <HomeThirdSection />
        <HomeFourthSection />
        <HomeFifthSection />
      </Container>
    </>
  );
}
