import NextIcon from '@/src/components/icons/next';
import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';
import { ReactSnippet } from '@/src/docs/common/snippets';
import ComponentsSection from '@/src/docs/common/components';
import V7NextThirdSection from '@/src/docs/v7/next/sections/third';
import V7NextFourthSection from '@/src/docs/v7/next/sections/fourth';
import NextCommonFirstSection from '@/src/docs/common/section/next/firstSection';
import NextCommonSecondSection from '@/src/docs/common/section/next/secondSection';
import ReactNextFifthSection from '@/src/docs/common/section/react-next/fifthSection';

export default function DocV7Next() {
  return (
    <div className="mt-12 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <NextIcon className="mt-2 w-20 h-12" />
        <span className="pl-2 pt-4">Documentation</span>
      </h2>
      <FeaturesSection />
      <NextCommonFirstSection />
      <NextCommonSecondSection snippet={<ReactSnippet />} />
      <V7NextThirdSection />
      <LintersSection />
      <V7NextFourthSection />
      <ReactNextFifthSection />
      <ComponentsSection />
    </div>
  );
}
