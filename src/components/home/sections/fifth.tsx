import Image from 'next/image';
import Button from '@/src/components/ui/button';
import NuxtIcon from '@/src/components/icons/nuxt';
import ReactIcon from '@/src/components/icons/react';
import { VueIcon } from '@/src/components/icons/icons';

export default function HomeFifthSection() {
  return (
    <section className="mb-16 md:mb-32">
      <div className="py-12 text-white bg-custom dark:bg-dropdown">
        <h2 className="text-center text-3xl font-bold">
          Subscribe to our
          <br />
          newsletter
        </h2>
        <p className="mt-8 text-center">
          Subscribe to our newsletter to be notified when a new dashboard is
          added.
        </p>
        <div className="flex mt-8 px-2 space-x-4 md:justify-center">
          <input
            className="placeholder-gray-600 px-4 w-48 text-custom bg-white sm:w-auto"
            placeholder="Enter email"
          />
          <div className="w-12 md:w-auto">
            <Button color="white">Subscribe</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center pt-32 space-x-4 md:space-x-24 lg:space-x-32">
        <div>
          <Image src="/images/next.png" height={50} width={50} alt="next.js" />
        </div>
        <div className="-mt-1">
          <Image
            src="/svg/tailwindcss.svg"
            height={60}
            width={60}
            alt="Tailwind CSS"
          />
        </div>
        <div>
          <ReactIcon className="w-12 h-12" />
        </div>
        <div>
          <VueIcon className="w-12 h-12" />
        </div>
        <div>
          <NuxtIcon className="w-12 h-12" />
        </div>
      </div>
    </section>
  );
}
