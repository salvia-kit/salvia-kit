import Image from 'next/image';
import V6ReactFirstSection from '@/src/docs/v6/react/sections/first';
import V6ReactSecondSection from '@/src/docs/v6/react/sections/second';
import V6ReactThirdSection from '@/src/docs/v6/react/sections/third';
import V6ReactFourthSection from '@/src/docs/v6/react/sections/fourth';
import V6ReactFifthSection from '@/src/docs/v6/react/sections/fifth';
import ComponentsSection from '@/src/docs/common/components';
import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';

export default function DocV6React() {
  return (
    <div className="py-8 max-w-full text-gray-700">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/react.svg" height={30} width={30} alt="React icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <V6ReactFirstSection />
      <V6ReactSecondSection />
      <V6ReactThirdSection />
      <LintersSection />
      <V6ReactFourthSection />
      <V6ReactFifthSection />
      <ComponentsSection />
    </div>
  );
}
