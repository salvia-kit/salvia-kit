import Image from 'next/image';
import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';
import ComponentsSection from '@/src/docs/common/components';
import V6ReactThirdSection from '@/src/docs/v6/react/sections/third';
import V6ReactFourthSection from '@/src/docs/v6/react/sections/fourth';
import ReactCommonFirstSection from '@/src/docs/common/section/react/firstSection';
import ReactNextFifthSection from '@/src/docs/common/section/react-next/fifthSection';
import ReactCommonSecondSection from '@/src/docs/common/section/react/secondSection';

export default function DocV6React() {
  return (
    <div className="mt-12 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/react.svg" height={30} width={30} alt="React icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <ReactCommonFirstSection />
      <ReactCommonSecondSection />
      <V6ReactThirdSection />
      <LintersSection />
      <V6ReactFourthSection />
      <ReactNextFifthSection />
      <ComponentsSection />
    </div>
  );
}
