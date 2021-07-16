import Image from 'next/image';
import V8ReactFirstSection from '@/src/docs/v8/react/sections/first';
import V8ReactThirdSection from '@/src/docs/v8/react/sections/third';
import V8ReactFourthSection from '@/src/docs/v8/react/sections/fourth';

import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';
import ComponentsSection from '@/src/docs/common/components';
import ReactNextFifthSection from '@/src/docs/common/section/react-next/fifthSection';
import ReactNextSecondSection from '@/src/docs/common/section/react-next/secondSection';

export default function DocV8React() {
  return (
    <div className="mt-12 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/react.svg" height={30} width={30} alt="React icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <V8ReactFirstSection />
      <ReactNextSecondSection />
      <V8ReactThirdSection />
      <LintersSection />
      <V8ReactFourthSection />
      <ReactNextFifthSection />
      <ComponentsSection />
    </div>
  );
}
