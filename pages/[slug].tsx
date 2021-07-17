import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import data from '@/src/data/data';
import Button from '@/src/components/ui/button';
import Container from '@/src/components/container';
import { getDashboard, getTechno } from '@/src/data/parseData';

const AccordionDoc = dynamic(() => import('@/src/components/accordionDoc'), {
  ssr: true,
});

const AccordionDocMobile = dynamic(
  () => import('@/src/components/accordionDocMobile'),
  {
    ssr: false,
  },
);

interface IParams extends ParsedUrlQuery {
  slug: string;
}

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
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/${dashboard.slug}`}
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
              <Image src={dashboard.image} alt={dashboard.name} />
              <p className="mt-6">
                Salvia-kit dashboard is a professional dashboard built with{' '}
                <strong>Tailwind CSS</strong>. We took advantage of Tailwind's
                flexibility to create a fully customizable premium dashboard,
                with documentation designed by a developer for developers. Feel
                free to customize everything to suit your needs.
              </p>
              <a className="block mt-8">
                <Button color="custom">Demo</Button>
              </a>
            </div>
            <AccordionDoc techno={techno} />
            <AccordionDocMobile techno={techno} />
          </Container>
        </>
      )}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.map((dash) => ({
    params: { slug: dash.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;
  const dashboard = await getDashboard(slug);

  return {
    props: {
      dashboard,
    },
  };
};
