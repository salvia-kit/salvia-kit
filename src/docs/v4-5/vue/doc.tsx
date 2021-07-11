import Image from 'next/image';
import V4VueFirstSection from '@/src/docs/v4-5/vue/sections/first';
import V4VueSecondSection from '@/src/docs/v4-5/vue/sections/second';
import V4VueThirdSection from '@/src/docs/v4-5/vue/sections/third';
import V4VueFourthSection from '@/src/docs/v4-5/vue/sections/fourth';
import V4VueFifthSection from '@/src/docs/v4-5/vue/sections/fifth';
import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';

// this doc is for the version 4 and 5 of dashboard
export default function DocV4Vue() {
  return (
    <div className="py-8 max-w-full text-gray-700">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/vue.svg" height={30} width={30} alt="Vue icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <V4VueFirstSection />
      <V4VueSecondSection />
      <V4VueThirdSection />
      <LintersSection />
      <V4VueFourthSection />
      <V4VueFifthSection />
    </div>
  );
}
