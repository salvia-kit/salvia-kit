import Link from 'next/link';
import CustomImage from '@/components/image';
import NextIcon from '@/components/icons/next';
import NuxtIcon from '@/components/icons/nuxt';
import ReactIcon from '@/components/icons/react';
import { VueIcon } from '@/components/icons/icons';
import SvelteIcon from '@/components/icons/svelte';
import { Card, CardBody, CardTitle } from '@/components/ui/card';

interface IDashboardCardProps {
  data: any;
  className?: string;
}

const getLink = (data: any) => {
  if (data && data.techno?.name) {
    return `/dashboard?techno=${data.techno.name}&name=${data.slug}`;
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
                width={1080}
                height={600}
              />
            </a>
          </Link>
          <CardBody>
            <div className="text-center">
              <CardTitle>{data.name}</CardTitle>
            </div>
            <div className="flex justify-center">
              {(data?.techno?.react || data?.techno?.name === 'react') && (
                <ReactIcon className="w-5 h-5" />
              )}
              {(data?.techno?.svelte || data?.techno?.name === 'svelte') && (
                <SvelteIcon className="ml-3 w-5 h-5" />
              )}
              {(data?.techno?.next || data?.techno?.name === 'next') && (
                <NextIcon className="-mt-1 w-11 h-7 ml-3" />
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
