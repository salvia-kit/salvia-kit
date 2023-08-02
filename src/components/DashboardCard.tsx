import Link from 'next/link';
import CustomImage from '@/components/CustomImage';
import NextIcon from '@/components/icons/NextIcon';
import NuxtIcon from '@/components/icons/NuxtIcon';
import ReactIcon from '@/components/icons/ReactIcon';
import SvelteIcon from '@/components/icons/SvelteIcon';
import { AngularIcon, VueIcon } from '@/components/icons/others';
import { Card, CardBody, CardTitle } from '@/components/ui/Card';

interface DashboardCardProps {
  data: any;
  className?: string;
}

const getLink = (data: any) => {
  if (data && data.techno?.name) {
    return `/dashboard?techno=${data.techno.name}&name=${data.slug}`;
  }
  return `/${data.slug}`;
};

export default function DashboardCard({ data, className }: DashboardCardProps) {
  return (
    <>
      <div className={className}>
        <Card>
          <Link href={getLink(data)}>
            <a>
              <CustomImage
                width={1080}
                height={600}
                src={data.image}
                alt={data.name}
              />
            </a>
          </Link>
          <CardBody>
            <div className="text-center">
              <CardTitle>{data.name}</CardTitle>
            </div>
            <div className="flex justify-center items-center gap-3">
              {(data?.techno?.solid || data?.techno?.name === 'solid') && (
                <div className="w-5 h-5">
                  <img src="/svg/solid.png" alt="Solid js" />
                </div>
              )}
              {(data?.techno?.react || data?.techno?.name === 'react') && (
                <ReactIcon className="w-5 h-5" />
              )}
              {(data?.techno?.svelte || data?.techno?.name === 'svelte') && (
                <SvelteIcon className="w-5 h-5" />
              )}
              {(data?.techno?.next || data?.techno?.name === 'next') && (
                <NextIcon className="w-11 h-7" />
              )}
              {(data?.techno?.vue || data?.techno?.name === 'vue') && (
                <VueIcon className="w-4 h-4" />
              )}
              {(data?.techno?.nuxt || data?.techno?.name === 'nuxt') && (
                <NuxtIcon className="w-5 h-5" />
              )}
              {(data?.techno?.angular || data?.techno?.name === 'angular') && (
                <AngularIcon className="w-6 h-6" />
              )}
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
