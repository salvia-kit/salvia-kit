import Head from 'next/head';
import Container from '@/components/Container';
import { dashboards } from '@/data/dashboards';
import DashboardCard from '@/components/DashboardCard';

export default function AllDashboardsPage() {
  return (
    <>
      <Head>
        <title>Salvia-kit - Dashboards Catalog</title>
        <link rel="canonical" href="https://www.salvia-kit.com/dashboard/all" />
        <meta
          name="description"
          content="We have what your are looking for. Our dashboards catalog contains the variants for React, Next.js, Vue and Nuxt."
        />
      </Head>
      <Container>
        <h1 className="mt-32 text-center text-3xl font-bold">
          Our dashboard catalog
        </h1>
        <p className="mt-4 text-center text-sm">
          Each dashboard has 7 templates
          <br />
          One for React, Next, Svelte kit, Vue ,Nuxt, Solid and Angular. it's
          all free
        </p>
        <div className="flex flex-wrap mt-12">
          {dashboards.map((dashboard) => (
            <DashboardCard
              data={dashboard}
              key={dashboard.id}
              className="pb-12 w-full md:mb-8 md:p-4 md:w-4/12"
            />
          ))}
        </div>
      </Container>
    </>
  );
}
