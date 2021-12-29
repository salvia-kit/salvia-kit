import Image from 'next/image';
import V8VueFirstSection from '@/src/docs/v8/vue/sections/first';
import V8VueSecondSection from '@/src/docs/v8/vue/sections/second';
import V8VueThirdSection from '@/src/docs/v8/vue/sections/third';
import V8VueFourthSection from '@/src/docs/v8/vue/sections/fourth';

import LintersSection from '@/src/docs/common-sections/linters';
import FeaturesSection from '@/src/docs/common-sections/features';
import VueNuxtFifthSection from '@/src/docs/common-sections/section/vue-nuxt/fifthSection';

export default function DocV8Vue() {
  return (
    <div className="mt-16 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/vue.svg" height={30} width={30} alt="Vue icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <V8VueFirstSection />
      <V8VueSecondSection />
      <V8VueThirdSection />
      <LintersSection />
      <V8VueFourthSection />
      <VueNuxtFifthSection />
    </div>
  );
}
