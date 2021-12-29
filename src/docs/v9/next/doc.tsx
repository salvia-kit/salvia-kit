import NextIcon from '@/src/components/icons/next';
import LintersSection from '@/src/docs/common-sections/linters';
import ComponentsSection from '@/src/docs/common-sections/components';
import V9NextFirstSection from '@/src/docs/v9/next/sections/first';
import V9NextThirdSection from '@/src/docs/v9/next/sections/third';
import V9ReactNextFeaturesSection from '@/src/docs/common-sections/section/react-next/features';
import { V9ReactNextFifthSection } from '@/src/docs/common-sections/section/react-next/fifthSection';
import { ReactNextV9SecondSection } from '@/src/docs/common-sections/section/react-next/secondSection';

export default function DocV9Next() {
  return (
    <div className="mt-12 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <NextIcon className="mt-2 w-20 h-12" />
        <span className="pl-2 pt-4">Documentation</span>
      </h2>
      <V9ReactNextFeaturesSection />
      <V9NextFirstSection />
      <ReactNextV9SecondSection />
      <V9NextThirdSection />
      <LintersSection />
      <V9ReactNextFifthSection />
      <ComponentsSection />
    </div>
  );
}
