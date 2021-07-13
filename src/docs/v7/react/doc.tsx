import Image from 'next/image';
import V7ReactFirstSection from '@/src/docs/v7/react/sections/first';
import V7ReactSecondSection from '@/src/docs/v7/react/sections/second';
import V7ReactThirdSection from '@/src/docs/v7/react/sections/third';
import V7ReactFourthSection from '@/src/docs/v7/react/sections/fourth';
import V7ReactFifthSection from '@/src/docs/v7/react/sections/fifth';
import ComponentsSection from '@/src/docs/common/components';
import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';

export default function DocV7React() {
  return (
    <div className="mt-12 max-w-full text-gray-700">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/react.svg" height={30} width={30} alt="React icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <V7ReactFirstSection />
      <V7ReactSecondSection />
      <V7ReactThirdSection />
      <LintersSection />
      <V7ReactFourthSection />
      <V7ReactFifthSection />
      <ComponentsSection />
    </div>
  );
}
