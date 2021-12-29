import Image from 'next/image';

import LintersSection from '@/src/docs/common-sections/linters';
import ComponentsSection from '@/src/docs/common-sections/components';
import V9ReactFirstSection from '@/src/docs/v9/react/sections/first';
import V9ReactThirdSection from '@/src/docs/v9/react/sections/third';
import V9ReactNextFeaturesSection from '@/src/docs/common-sections/section/react-next/features';
import { V9ReactNextFifthSection } from '@/src/docs/common-sections/section/react-next/fifthSection';
import { ReactNextV9SecondSection } from '@/src/docs/common-sections/section/react-next/secondSection';

export default function DocV9React() {
  return (
    <div className="mt-12 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/react.svg" height={30} width={30} alt="React icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <V9ReactNextFeaturesSection />
      <V9ReactFirstSection />
      <ReactNextV9SecondSection />
      <V9ReactThirdSection />
      <LintersSection />
      <V9ReactNextFifthSection />
      <ComponentsSection />
    </div>
  );
}
