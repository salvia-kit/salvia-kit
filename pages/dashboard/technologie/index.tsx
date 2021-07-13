import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Container from '@/src/components/container';
import DashboardCard from '@/src/components/dashboard-card';
import { getDashboardsByTechnologie, isTechno } from '@/src/data/parseData';

export default function TechnologiePage() {
  const router = useRouter();
  const name: any = router?.query?.name;
  const dashboards = getDashboardsByTechnologie(name);

  React.useEffect(() => {
    if (router.isReady) {
      if (!router.query?.name) {
        router.push('/dashboard/all');
      }
    }
  }, [router]);
  return (
    <>
      {name && (
        <>
          <Head>
            <title>Salvia-kit Dashboards with {name}</title>
          </Head>
          <Container>
            <h1 className="mt-32 text-center text-3xl font-bold">
              Dashboards with
              <span className="pl-1">{isTechno(name)}</span>
            </h1>
            <div className="flex flex-wrap mt-12">
              {dashboards.map((data) => (
                <DashboardCard
                  key={data.id}
                  data={data}
                  className="pb-12 w-full md:mb-8 md:p-4 md:w-4/12"
                />
              ))}
            </div>
          </Container>
        </>
      )}
    </>
  );
}
