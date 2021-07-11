import Image from 'next/image';
import V4NextFirstSection from '@/src/docs/v4-5/next/sections/first';
import V4NextSecondSection from '@/src/docs/v4-5/next/sections/second';
import V4NextThirdSection from '@/src/docs/v4-5/next/sections/third';
import V4NextFourthSection from '@/src/docs/v4-5/next/sections/fourth';
import V4NextFifthSection from '@/src/docs/v4-5/next/sections/fifth';
import LintersSection from '@/src/docs/common/linters';
import ComponentsSection from '@/src/docs/common/components';
import FeaturesSection from '@/src/docs/common/features';

// this doc is for the version 4 and 5 of dashboard
export default function DocV4Next() {
  return (
    <div className="py-8 max-w-full text-gray-700">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image
          src="/svg/nextjs.svg"
          height={70}
          width={70}
          alt="Next.js icon"
        />
        <span className="pl-2 pt-4">Documentation</span>
      </h2>
      <FeaturesSection />
      <V4NextFirstSection />
      <V4NextSecondSection />
      <V4NextThirdSection />
      <LintersSection />
      <V4NextFourthSection />
      <V4NextFifthSection />
      <ComponentsSection />
    </div>
  );
}
