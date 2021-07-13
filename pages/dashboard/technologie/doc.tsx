import Head from 'next/head';
import Image from 'next/image';
import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Container from '@/src/components/container';
import { getDashboardByTechnologie, isTechno } from '@/src/data/parseData';

export default function TechnoDocPage() {
  const router = useRouter();
  const name: any = router.query.name;
  const { slug } = router.query;
  const data = getDashboardByTechnologie(name, slug);

  React.useEffect(() => {
    if (router.isReady) {
      if (!router.query?.name || !router.query.slug) {
        router.push('/dashboard/all');
      }
    }
  }, [router]);

  return (
    <Fragment>
      {name && (
        <Fragment>
          <Head>
            <title>
              {data?.name} - {isTechno(name)}
            </title>
          </Head>
          <Container>
            <div className="mt-32 lg:w-8/12">
              <h1 className="mb-6 text-center text-3xl font-bold md:text-left md:text-4xl">
                {data?.name} - {isTechno(name)}
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
            {data.techno.doc}
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
}
