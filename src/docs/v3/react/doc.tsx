import Image from 'next/image';
import V3ReactFirstSection from '@/src/docs/v3/react/sections/first';
import V3ReactSecondSection from '@/src/docs/v3/react/sections/second';
import V3ReactThirdSection from '@/src/docs/v3/react/sections/third';
import V3ReactFourthSection from '@/src/docs/v3/react/sections/fourth';

import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';
import ComponentsSection from '@/src/docs/common/components';
import ReactNextFifthSection from '@/src/docs/common/section/react-next/fifthSection';

export default function DocV3React() {
  return (
    <div className="mt-12 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/react.svg" height={30} width={30} alt="React icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <V3ReactFirstSection />
      <V3ReactSecondSection />
      <V3ReactThirdSection />
      <LintersSection />
      <V3ReactFourthSection />
      <ReactNextFifthSection />
      <ComponentsSection />
    </div>
  );
}
