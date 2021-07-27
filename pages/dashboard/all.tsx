import Head from 'next/head';
import data from '@/src/data/data';
import Container from '@/src/components/container';
import DashboardCard from '@/src/components/dashboardCard';

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
          Each dashboard have four templates. <br />
          one template for React, Next, Vue and Nuxt. it's all free
        </p>
        <div className="flex flex-wrap mt-12">
          {data.map((dashboard) => (
            <DashboardCard
              key={dashboard.id}
              data={dashboard}
              className="pb-12 w-full md:mb-8 md:p-4 md:w-4/12"
            />
          ))}
        </div>
      </Container>
    </>
  );
}
