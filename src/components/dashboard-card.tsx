import Link from 'next/link';
import CustomImage from '@/src/components/image';
import NextIcon from '@/src/components/icons/next';
import NuxtIcon from '@/src/components/icons/nuxt';
import ReactIcon from '@/src/components/icons/react';
import { VueIcon } from '@/src/components/icons/icons';
import { Card, CardBody, CardTitle } from '@/src/components/ui/card';

interface IDashboardCardProps {
  data: any;
  className?: string;
}

const getLink = (data: any) => {
  if (data && data.techno?.name) {
    return `/dashboard/technologie/doc?name=${data.techno.name}&slug=${data.slug}`;
  }
  return `/${data.slug}`;
};

export default function DashboardCard({
  data,
  className,
}: IDashboardCardProps) {
  return (
    <>
      <div className={className}>
        <Card>
          <Link href={getLink(data)}>
            <a>
              <CustomImage
                src={data.image}
                alt={data.name}
                width={1024}
                height={600}
              />
            </a>
          </Link>
          <CardBody>
            <div className="text-center">
              <CardTitle>{data.name}</CardTitle>
            </div>
            <div className="flex justify-center">
              {(data?.techno?.next || data?.techno?.name === 'next') && (
                <NextIcon className="-mt-1 w-11 h-7" />
              )}
              {(data?.techno?.react || data?.techno?.name === 'react') && (
                <ReactIcon className="ml-3 w-5 h-5" />
              )}
              {(data?.techno?.vue || data?.techno?.name === 'vue') && (
                <VueIcon className="ml-3 mt-0.5 w-4 h-4" />
              )}
              {(data?.techno?.nuxt || data?.techno?.name === 'nuxt') && (
                <NuxtIcon className="ml-3 w-5 h-5" />
              )}
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
