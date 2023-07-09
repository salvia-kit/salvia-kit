import React from 'react';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import Container from '@/components/Container';
import DashboardCard from '@/components/DashboardCard';
import { getDashboardsByTechnologie, isTechno, parseData } from '@/data/parse';

interface Params extends ParsedUrlQuery {
  name: string | any;
}

const technos = [
  { name: 'vue' },
  { name: 'next' },
  { name: 'nuxt' },
  { name: 'react' },
  { name: 'solid' },
  { name: 'svelte' },
  { name: 'angular' },
];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = technos.map((techno) => ({
    params: { name: techno.name },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as Params;
  const dashboards = getDashboardsByTechnologie(name);

  return {
    props: {
      dashboards: parseData(dashboards),
      name,
    },
  };
};

export default function TechnologiePage({
  name,
  dashboards,
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
              <span className="pl-1">{isTechno(name)} - Dashboards</span>
            </h1>
            <div className="flex flex-wrap mt-12">
              {name === 'vue' || name === 'nuxt' || name === 'angular'
                ? dashboards
                    .filter((dash: any) => dash.slug !== 'dashboard-v10')
                    .map((dashboard: any) => (
                      <DashboardCard
                        data={dashboard}
                        key={dashboard.id}
                        className="pb-12 w-full md:mb-8 md:p-4 md:w-4/12"
                      />
                    ))
                : dashboards.map((dat: any) => (
                    <DashboardCard
                      data={dat}
                      key={dat.id}
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
