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
        <title>Salvia-kit - Beautiful Dashboards built with Tailwind CSS</title>
        <meta
          name="title"
          content="Salvia-kit - Beautiful Dashboards built with Tailwind CSS"
        />
        <meta
          name="description"
          content="Salvia-kit provides the most beautiful dashboards built with Tailwind CSS for React, Next.js, Vue and Nuxt. Explore and enjoy the experience."
        />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_BASE_URL} />
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
