import Image from 'next/image';
import V1ReactFirstSection from '@/src/docs/v1-2/react/sections/first';
import V1ReactSecondSection from '@/src/docs/v1-2/react/sections/second';
import V1ReactThirdSection from '@/src/docs/v1-2/react/sections/third';
import V1ReactFourthSection from '@/src/docs/v1-2/react/sections/fourth';
import V1ReactFifthSection from '@/src/docs/v1-2/react/sections/fifth';
import V1ReactSixthSection from '@/src/docs/v1-2/react/sections/sixth';
import ComponentsSection from '@/src/docs/common/components';
import LintersSection from '@/src/docs/common/linters';

// this doc is for the version 1 and 2 of dashboard
export default function DocV1React() {
  return (
    <div className="py-8 max-w-full text-gray-700">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/react.svg" height={30} width={30} alt="React icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <V1ReactFirstSection />
      <V1ReactSecondSection />
      <V1ReactThirdSection />
      <V1ReactFourthSection />
      <LintersSection />
      <V1ReactFifthSection />
      <V1ReactSixthSection />
      <ComponentsSection />
    </div>
  );
}
