import React from 'react';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import Container from '@/src/components/container';
import DashboardCard from '@/src/components/dashboardCard';
import {
  getDashboardsByTechnologie,
  isTechno,
  parseData,
} from '@/src/data/parseData';

interface IParams extends ParsedUrlQuery {
  name: string | any;
}

export default function TechnologiePage({
  dashboards,
  name,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      {dashboards && (
        <>
          <Head>
            <title>Salvia-kit - {isTechno(name)} Dashboards</title>
            <link
              rel="canonical"
              href={`https://www.salvia-kit.com/techno/${name}`}
            />
            <meta
              name="description"
              content={`Here you will find all ${isTechno(
                name,
              )} beautiful dashboards.`}
            />
          </Head>
          <Container>
            <h1 className="mt-32 text-center text-3xl font-bold">
              Salvia-kit{' '}
              <span className="pl-1">{isTechno(name)} - Dashboards</span>
            </h1>
            <div className="flex flex-wrap mt-12">
              {name === 'vue' || name === 'nuxt'
                ? dashboards
                    .filter((dash: any) => dash.slug !== 'dashboard-v9')
                    .map((dashboard: any) => (
                      <DashboardCard
                        key={dashboard.id}
                        data={dashboard}
                        className="pb-12 w-full md:mb-8 md:p-4 md:w-4/12"
                      />
                    ))
                : dashboards.map((dat: any) => (
                    <DashboardCard
                      key={dat.id}
                      data={dat}
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
const technos = [
  {
    name: 'react',
  },
  { name: 'next' },
  { name: 'vue' },
  { name: 'nuxt' },
];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = technos.map((techno) => ({
    params: { name: techno.name },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as IParams;
  const dashboards = await getDashboardsByTechnologie(name);

  return {
    props: {
      dashboards: parseData(dashboards),
      name,
    },
  };
};
