import V1NextFirstSection from '@/src/docs/v1-2/next/sections/first';
import V1NextSecondSection from '@/src/docs/v1-2/next/sections/second';
import V1NextThirdSection from '@/src/docs/v1-2/next/sections/third';
import V1NextFourthSection from '@/src/docs/v1-2/next/sections/fourth';
import V1NextFifthSection from '@/src/docs/v1-2/next/sections/fifth';
import LintersSection from '@/src/docs/common/linters';
import ComponentsSection from '@/src/docs/common/components';
import FeaturesSection from '@/src/docs/common/features';
import NextIcon from '@/src/components/icons/next';

// this doc is for the version 1 and 2 of dashboard
export default function DocV1Next() {
  return (
    <div className="mt-12 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <NextIcon className="mt-2 w-20 h-12" />
        <span className="pl-2 pt-4">Documentation</span>
      </h2>
      <FeaturesSection />
      <V1NextFirstSection />
      <V1NextSecondSection />
      <V1NextThirdSection />
      <LintersSection />
      <V1NextFourthSection />
      <V1NextFifthSection />
      <ComponentsSection />
    </div>
  );
}
