import Image from 'next/image';
import V6VueFirstSection from '@/src/docs/v6/vue/sections/first';
import V6VueSecondSection from '@/src/docs/v6/vue/sections/second';
import V6VueThirdSection from '@/src/docs/v6/vue/sections/third';
import V6VueFourthSection from '@/src/docs/v6/vue/sections/fourth';
import V6VueFifthSection from '@/src/docs/v6/vue/sections/fifth';
import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';

export default function DocV6Vue() {
  return (
    <div className="mt-12 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/vue.svg" height={30} width={30} alt="Vue icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <V6VueFirstSection />
      <V6VueSecondSection />
      <V6VueThirdSection />
      <LintersSection />
      <V6VueFourthSection />
      <V6VueFifthSection />
    </div>
  );
}
