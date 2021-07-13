import Image from 'next/image';
import { Fragment } from 'react';
import dynamic from 'next/dynamic';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import dashboardsData from '@/src/data/dashboards';
import Container from '@/src/components/container';
import { getDashboard, getDoc } from '@/src/data/parseData';

const AccordionDoc = dynamic(() => import('@/src/components/accordion-doc'), {
  ssr: true,
});

const AccordionDocMobile = dynamic(
  () => import('@/src/components/accordion-doc-mobile'),
  {
    ssr: false,
  },
);

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export default function DashboardPage({
  data,
  slug,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { techno } = getDoc(data?.slug);

  return (
    <Fragment>
      {data && (
        <Fragment>
          <title>{data?.name}</title>
          <Container>
            <div className="mt-32 lg:w-8/12">
              <h1 className="mb-6 text-center text-3xl font-bold md:text-left md:text-4xl">
                {data?.name}
              </h1>
              <Image src={data.image} alt={data?.name} />
              <p className="mt-6">
                Material Dashboard PRO React is a Premium Material-UI@4.1.0
                Admin with a fresh, new design inspired by Google's Material
                Design. We are very excited to introduce our take on the
                material concepts through an easy to use and beautiful set of
                components. Material Dashboard PRO React was built over the
                popular Material-UI framework.
              </p>
            </div>
            <AccordionDoc techno={techno} />
            <AccordionDocMobile techno={techno} />
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = dashboardsData.map((dash) => ({
    params: { slug: dash.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;
  const data = await getDashboard(slug);

  return {
    props: {
      data,
    },
  };
};