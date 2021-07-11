import Image from 'next/image';
import V6NextFirstSection from '@/src/docs/v6/next/sections/first';
import V6NextSecondSection from '@/src/docs/v6/next/sections/second';
import V6NextThirdSection from '@/src/docs/v6/next/sections/third';
import V6NextFourthSection from '@/src/docs/v6/next/sections/fourth';
import V6NextFifthSection from '@/src/docs/v6/next/sections/fifth';
import LintersSection from '@/src/docs/common/linters';
import ComponentsSection from '@/src/docs/common/components';
import FeaturesSection from '@/src/docs/common/features';

export default function DocV6Next() {
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
      <V6NextFirstSection />
      <V6NextSecondSection />
      <V6NextThirdSection />
      <LintersSection />
      <V6NextFourthSection />
      <V6NextFifthSection />
      <ComponentsSection />
    </div>
  );
}
