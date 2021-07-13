import Image from 'next/image';
import V7NextFirstSection from '@/src/docs/v7/next/sections/first';
import V7NextSecondSection from '@/src/docs/v7/next/sections/second';
import V7NextThirdSection from '@/src/docs/v7/next/sections/third';
import V7NextFourthSection from '@/src/docs/v7/next/sections/fourth';
import V7NextFifthSection from '@/src/docs/v7/next/sections/fifth';
import LintersSection from '@/src/docs/common/linters';
import ComponentsSection from '@/src/docs/common/components';
import FeaturesSection from '@/src/docs/common/features';

export default function DocV7Next() {
  return (
    <div className="mt-12 max-w-full text-gray-700">
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
      <V7NextFirstSection />
      <V7NextSecondSection />
      <V7NextThirdSection />
      <LintersSection />
      <V7NextFourthSection />
      <V7NextFifthSection />
      <ComponentsSection />
    </div>
  );
}
