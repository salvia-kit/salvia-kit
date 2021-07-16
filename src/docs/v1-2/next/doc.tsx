import V1AndV2NextFirstSection from '@/src/docs/v1-2/next/sections/first';
import V1AndV2NextSecondSection from '@/src/docs/v1-2/next/sections/second';
import V1AndV2NextThirdSection from '@/src/docs/v1-2/next/sections/third';
import V1AndV2NextFourthSection from '@/src/docs/v1-2/next/sections/fourth';

import NextIcon from '@/src/components/icons/next';
import FeaturesSection from '@/src/docs/common/features';
import LintersSection from '@/src/docs/common/linters';
import ComponentsSection from '@/src/docs/common/components';
import ReactNextFifthSection from '@/src/docs/common/section/react-next/fifthSection';

// this doc is for the version 1 and 2 of dashboard
export default function DocV1AndV2Next() {
  return (
    <div className="mt-12 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <NextIcon className="mt-2 w-20 h-12" />
        <span className="pl-2 pt-4">Documentation</span>
      </h2>
      <FeaturesSection />
      <V1AndV2NextFirstSection />
      <V1AndV2NextSecondSection />
      <V1AndV2NextThirdSection />
      <LintersSection />
      <V1AndV2NextFourthSection />
      <ReactNextFifthSection />
      <ComponentsSection />
    </div>
  );
}
