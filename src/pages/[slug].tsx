import Head from 'next/head';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import Button from '@/components/ui/Button';
import { dashboards } from '@/data/dashboards';
import Container from '@/components/Container';
import NextIcon from '@/components/icons/NextIcon';
import NuxtIcon from '@/components/icons/NuxtIcon';
import ExternalLink from '@/components/ExternalLink';
import ReactIcon from '@/components/icons/ReactIcon';
import SvelteIcon from '@/components/icons/SvelteIcon';
import { getDashboard, getTechno } from '@/data/parse';
import { Documentation } from '@/components/Documentation';
import { AngularIcon, VueIcon } from '@/components/icons/others';

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = dashboards.map((dash) => ({
    params: { slug: dash.slug },
  }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params;
  const dashboard = await getDashboard(slug);
  return {
    props: { dashboard },
  };
};

export default function DashboardPage({
  dashboard,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const techno = getTechno(dashboard?.slug);
  return (
    <>
      {dashboard && (
        <>
          <Head>
            <title>{dashboard.name}</title>
            <link
              rel="canonical"
              href={`https://www.salvia-kit.com/${dashboard.slug}`}
            />
            <meta
              name="description"
              content={`${dashboard.name} is a professional dashboard template ready to be integrated in your project.`}
            />
          </Head>
          <Container>
            <div className="mb-16 mt-32 lg:w-8/12">
              <h1 className="mb-6 text-center text-3xl font-bold md:text-left">
                {dashboard.name}
              </h1>
              <div className="flex gap-5 mb-5 items-center justify-center md:justify-start">
                {(techno?.solid || techno?.name === 'sold') && (
                  <div className="w-5 h-5">
                    <img src="/svg/solid.png" alt="Solid js" />
                  </div>
                )}
                {(techno?.react || techno?.name === 'react') && (
                  <ReactIcon className="w-5 h-5" />
                )}
                {(techno?.svelte || techno?.name === 'svelte') && (
                  <SvelteIcon className="w-5 h-5" />
                )}
                {(techno?.next || techno?.name === 'next') && (
                  <NextIcon className="w-11 h-7" />
                )}
                {(techno?.vue || techno?.name === 'vue') && (
                  <VueIcon className="w-4 h-4" />
                )}
                {(techno?.nuxt || techno?.name === 'nuxt') && (
                  <NuxtIcon className="w-5 h-5" />
                )}
                {(techno?.angular || techno?.name === 'angular') && (
                  <AngularIcon className="w-6 h-6" />
                )}
              </div>
              <Image
                src={dashboard.image}
                alt={dashboard.name}
                placeholder="blur"
              />
              <p className="mt-6">
                Salvia-kit dashboard is a professional dashboard built with{' '}
                <strong>Tailwind CSS</strong>. We took advantage of Tailwind's
                flexibility to create a fully customizable premium dashboard,
                with documentation designed by a developer for developers. Feel
                free to customize everything to suit your needs.
              </p>
              <ExternalLink href={dashboard.demo} className="block mt-8">
                <Button color="custom">Demo</Button>
              </ExternalLink>
            </div>
            <Documentation techno={techno} />
          </Container>
        </>
      )}
    </>
  );
}
