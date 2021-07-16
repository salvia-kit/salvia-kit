import Image from 'next/image';
import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';
import { ReactSnippet } from '@/src/docs/common/snippets';
import ComponentsSection from '@/src/docs/common/components';
import V7ReactThirdSection from '@/src/docs/v7/react/sections/third';
import V7ReactFourthSection from '@/src/docs/v7/react/sections/fourth';
import ReactCommonFirstSection from '@/src/docs/common/section/react/firstSection';
import ReactCommonSecondSection from '@/src/docs/common/section/react/secondSection';
import ReactNextFifthSection from '@/src/docs/common/section/react-next/fifthSection';

export default function DocV7React() {
  return (
    <div className="mt-12 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/react.svg" height={30} width={30} alt="React icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <ReactCommonFirstSection />
      <ReactCommonSecondSection snippet={<ReactSnippet />} />
      <V7ReactThirdSection />
      <LintersSection />
      <V7ReactFourthSection />
      <ReactNextFifthSection />
      <ComponentsSection />
    </div>
  );
}
