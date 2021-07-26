import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Container from '@/src/components/container';
import { getDashboardByTechnologie, isTechno } from '@/src/data/parseData';
import Button from '@/src/components/ui/button';

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
                <a
                  href={data?.demo}
                  className="block mt-8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button color="custom">Demo</Button>
                </a>
                <a
                  href={data?.techno.source}
                  className="block mt-8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button color="custom">Source</Button>
                </a>
              </div>
            </div>
            {data.techno.doc}
          </Container>
        </>
      )}
    </>
  );
}
