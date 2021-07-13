import Image from 'next/image';
import V4ReactFirstSection from '@/src/docs/v4-5/react/sections/first';
import V4ReactSecondSection from '@/src/docs/v4-5/react/sections/second';
import V4ReactThirdSection from '@/src/docs/v4-5/react/sections/third';
import V4ReactFourthSection from '@/src/docs/v4-5/react/sections/fourth';
import V4ReactFifthSection from '@/src/docs/v4-5/react/sections/fifth';
import ComponentsSection from '@/src/docs/common/components';
import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';

// this doc is for the version 4 and 5 of dashboard
export default function DocV4React() {
  return (
    <div className="mt-12 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/react.svg" height={30} width={30} alt="React icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <V4ReactFirstSection />
      <V4ReactSecondSection />
      <V4ReactThirdSection />
      <LintersSection />
      <V4ReactFourthSection />
      <V4ReactFifthSection />
      <ComponentsSection />
    </div>
  );
}
