import NextIcon from '@/src/components/icons/next';
import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';
import ComponentsSection from '@/src/docs/common/components';
import V4AndV5NextThirdSection from '@/src/docs/v4-5/next/sections/third';
import V4AndV5NextFourthSection from '@/src/docs/v4-5/next/sections/fourth';
import NextCommonFirstSection from '@/src/docs/common/section/next/firstSection';
import NextCommonSecondSection from '@/src/docs/common/section/next/secondSection';
import ReactNextFifthSection from '@/src/docs/common/section/react-next/fifthSection';

// this doc is for the version 4 and 5 of dashboard
export default function DocV4AndV5Next() {
  return (
    <div className="mt-12 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <NextIcon className="mt-2 w-20 h-12" />
        <span className="pl-2 pt-4">Documentation</span>
      </h2>
      <FeaturesSection />
      <NextCommonFirstSection />
      <NextCommonSecondSection />
      <V4AndV5NextThirdSection />
      <LintersSection />
      <V4AndV5NextFourthSection />
      <ReactNextFifthSection />
      <ComponentsSection />
    </div>
  );
}
