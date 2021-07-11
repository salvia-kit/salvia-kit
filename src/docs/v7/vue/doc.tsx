import Image from 'next/image';
import V7VueFirstSection from '@/src/docs/v7/vue/sections/first';
import V7VueSecondSection from '@/src/docs/v7/vue/sections/second';
import V7VueThirdSection from '@/src/docs/v7/vue/sections/third';
import V7VueFourthSection from '@/src/docs/v7/vue/sections/fourth';
import V7VueFifthSection from '@/src/docs/v7/vue/sections/fifth';
import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';

export default function DocV7Vue() {
  return (
    <div className="py-8 max-w-full text-gray-700">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/vue.svg" height={30} width={30} alt="Vue icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <V7VueFirstSection />
      <V7VueSecondSection />
      <V7VueThirdSection />
      <LintersSection />
      <V7VueFourthSection />
      <V7VueFifthSection />
    </div>
  );
}
