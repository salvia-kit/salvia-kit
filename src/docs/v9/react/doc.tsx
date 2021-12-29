import Image from 'next/image';
import LintersSection from '@/docs/common/linters';
import FeaturesSection from '@/docs/common/features';
import ComponentsSection from '@/docs/common/components';
import V9ReactFirstSection from '@/docs/v9/react/sections/first';
import V9ReactThirdSection from '@/docs/v9/react/sections/third';
import V9NextReactSecondSection from '@/docs/v9/shared/secondSection';
import { V9ReactNextFifthSection } from '@/docs/v9/shared/fifthSection';

export default function DocV9React() {
  return (
    <div className="mt-12 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/react.svg" height={30} width={30} alt="React icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <V9ReactFirstSection />
      <V9NextReactSecondSection />
      <V9ReactThirdSection />
      <LintersSection />
      <V9ReactNextFifthSection />
      <ComponentsSection />
    </div>
  );
}
