import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '@/src/components/ui/button';
import Container from '@/src/components/container';
import ExternalLink from '@/src/components/externalLink';
import { getDashboardByTechnologie, isTechno } from '@/src/data/parseData';

export default function TechnoDocPage() {
  const router = useRouter();
  const { name } = router.query;
  const techno: any = router.query.techno;
  const data = getDashboardByTechnologie(techno, name);

  React.useEffect(() => {
    if (router.isReady) {
      if (!router.query?.name || !router.query?.techno) {
        router.push('/dashboard/all');
      }
    }
  }, [router]);

  // Because dashboard v9 for Vue and Nuxt are unavailable now
  // we redirect to dashboard catalog
  React.useEffect(() => {
    if (router.isReady) {
      if (
        router.query?.name === 'dashboard-v9' &&
        router.query.techno === 'nuxt'
      ) {
        router.push('/dashboard/all');
      }
      if (
        router.query?.name === 'dashboard-v9' &&
        router.query.techno === 'vue'
      ) {
        router.push('/dashboard/all');
      }
    }
  }, [router]);

  return (
    <>
      {techno && (
        <>
          <Head>
            <title>
              {data?.name} - {isTechno(techno)}
            </title>
            <link
              rel="canonical"
              href={`https://www.salvia-kit.com/dashboard?techno=${techno}&name=${data.slug}`}
            />
          </Head>
          <Container>
            <div className="mt-32 lg:w-8/12">
              <h1 className="mb-6 text-center text-3xl font-bold md:text-left">
                {data?.name} - {isTechno(techno)}
              </h1>
              <Image src={data.image} alt={data?.name} placeholder="blur" />
              <p className="mt-6">
                Salvia-kit dashboard is a professional dashboard built with{' '}
                <strong>Tailwind CSS</strong>. We took advantage of Tailwind's
                flexibility to create a fully customizable premium dashboard,
                with documentation designed by a developer for developers. Feel
                free to customize everything to suit your needs.
              </p>
              <div className="flex space-x-2">
                <ExternalLink href={data?.demo} className="block mt-8">
                  <Button color="custom">Demo</Button>
                </ExternalLink>
                <ExternalLink
                  href={data?.techno?.source}
                  className="block mt-8"
                >
                  <Button color="custom">Source</Button>
                </ExternalLink>
              </div>
            </div>
            {data?.techno?.doc}
          </Container>
        </>
      )}
    </>
  );
}
