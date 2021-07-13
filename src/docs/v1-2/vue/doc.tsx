import Image from 'next/image';
import V1VueFirstSection from '@/src/docs/v1-2/vue/sections/first';
import V1VueSecondSection from '@/src/docs/v1-2/vue/sections/second';
import V1VueThirdSection from '@/src/docs/v1-2/vue/sections/third';
import V1VueFourthSection from '@/src/docs/v1-2/vue/sections/fourth';
import V1VueFifthSection from '@/src/docs/v1-2/vue/sections/fifth';
import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';

// this doc is for the version 1 and 2 of dashboard
export default function DocV1Vue() {
  return (
    <div className="mt-16 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/vue.svg" height={30} width={30} alt="Vue icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <V1VueFirstSection />
      <V1VueSecondSection />
      <V1VueThirdSection />
      <LintersSection />
      <V1VueFourthSection />
      <V1VueFifthSection />
    </div>
  );
}
