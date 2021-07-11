import Image from 'next/image';
import V3NextFirstSection from '@/src/docs/v3/next/sections/first';
import V3NextSecondSection from '@/src/docs/v3/next/sections/second';
import V3NextThirdSection from '@/src/docs/v3/next/sections/third';
import V3NextFourthSection from '@/src/docs/v3/next/sections/fourth';
import V3NextFifthSection from '@/src/docs/v3/next/sections/fifth';
import LintersSection from '@/src/docs/common/linters';
import ComponentsSection from '@/src/docs/common/components';
import FeaturesSection from '@/src/docs/common/features';

export default function DocV3Next() {
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
      <V3NextFirstSection />
      <V3NextSecondSection />
      <V3NextThirdSection />
      <LintersSection />
      <V3NextFourthSection />
      <V3NextFifthSection />
      <ComponentsSection />
    </div>
  );
}
