import Image from 'next/image';
import V3VueFirstSection from '@/src/docs/v3/vue/sections/first';
import V3VueSecondSection from '@/src/docs/v3/vue/sections/second';
import V3VueThirdSection from '@/src/docs/v3/vue/sections/third';
import V3VueFourthSection from '@/src/docs/v3/vue/sections/fourth';
import V3VueFifthSection from '@/src/docs/v3/vue/sections/fifth';
import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';

export default function DocV3Vue() {
  return (
    <div className="mt-12 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/vue.svg" height={30} width={30} alt="Vue icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <V3VueFirstSection />
      <V3VueSecondSection />
      <V3VueThirdSection />
      <LintersSection />
      <V3VueFourthSection />
      <V3VueFifthSection />
    </div>
  );
}
