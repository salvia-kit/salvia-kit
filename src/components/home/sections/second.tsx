import Link from 'next/link';
import Image from 'next/image';
import dashboardsData from '@/src/data/data';
import CustomImage from '@/src/components/image';
import { Card, CardBody, CardTitle } from '@/src/components/ui/card';
import { NuxtIcon, ReactIcon, VueIcon } from '@/src/components/icons';

const HomeSecondSection = () => (
  <section className="mb-16 mt-44 text-custom text-gray-700 md:mb-32">
    <h2 className="text-center text-3xl font-bold">
      Discover Our Latest
      <br />
      Dashboards
    </h2>
    <div className="flex flex-wrap mt-12">
      {dashboardsData.slice(0, 3).map((dash) => (
        <div key={dash.id} className="pb-12 w-full md:p-3 md:pb-0 md:w-4/12">
          <Card>
            <Link href="/">
              <a>
                <CustomImage
                  src={dash.image}
                  alt={dash.name}
                  width={1024}
                  height={600}
                />
              </a>
            </Link>
            <CardBody>
              <CardTitle>{dash.name}</CardTitle>
              <div className="flex">
                <Image
                  src="/images/next.png"
                  width={26}
                  height={19}
                  alt="Next.js"
                />
                <ReactIcon className="ml-3 w-7 h-7" />
                <VueIcon className="ml-3 pt-1 w-6 h-6" />
                <NuxtIcon className="ml-3 w-7 h-7" />
              </div>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  </section>
);

export default HomeSecondSection;
