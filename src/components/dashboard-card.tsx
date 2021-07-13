import Link from 'next/link';
import Image from 'next/image';
import CustomImage from '@/src/components/image';
import { Card, CardBody, CardTitle } from '@/src/components/ui/card';
import { NuxtIcon, ReactIcon, VueIcon } from '@/src/components/icons';

interface IDashboardCardProps {
  data: any;
  className?: string;
}

export default function DashboardCard({
  data,
  className,
}: IDashboardCardProps) {
  return (
    <>
      <div key={data.id} className={className}>
        <Card>
          <Link href={`/${data.slug}`}>
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
            <CardTitle>{data.name}</CardTitle>
            <div className="flex">
              <Image
                src="/images/next.png"
                width={20}
                height={15}
                alt="Next.js"
              />
              <ReactIcon className="ml-3 w-5 h-5" />
              {data?.techno?.vue && <VueIcon className="ml-3 mt-0.5 w-4 h-4" />}
              {data?.techno?.nuxt && <NuxtIcon className="ml-3 w-5 h-5" />}
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
