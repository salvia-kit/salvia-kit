import Image from 'next/image';
import V1AndV2ReactFirstSection from '@/src/docs/v1-2/react/sections/first';
import V1AndV2ReactSecondSection from '@/src/docs/v1-2/react/sections/second';
import V1AndV2ReactThirdSection from '@/src/docs/v1-2/react/sections/third';
import V1AndV2ReactFourthSection from '@/src/docs/v1-2/react/sections/fourth';

import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';
import ComponentsSection from '@/src/docs/common/components';
import ReactNextFifthSection from '@/src/docs/common/section/react-next/fifthSection';

// this doc is for the version 1 and 2 of dashboard
export default function DocV1AndV2React() {
  return (
    <div className="mt-16 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/react.svg" height={30} width={30} alt="React icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <V1AndV2ReactFirstSection />
      <V1AndV2ReactSecondSection />
      <V1AndV2ReactThirdSection />
      <LintersSection />
      <V1AndV2ReactFourthSection />
      <ReactNextFifthSection />
      <ComponentsSection />
    </div>
  );
}
