import Image from 'next/image';
import LintersSection from '@/src/docs/common-sections/linters';
import FeaturesSection from '@/src/docs/common-sections/features';
import V7VueThirdSection from '@/src/docs/v7/vue/sections/third';
import V7VueFourthSection from '@/src/docs/v7/vue/sections/fourth';
import VueNuxtFifthSection from '@/src/docs/common-sections/section/vue-nuxt/fifthSection';
import { VueCommonFirstSectionV1AndV7 } from '@/src/docs/common-sections/section/vue/firstSection';
import { VueCommonSecondSectionV1AndV7 } from '@/src/docs/common-sections/section/vue/secondSection';

export default function DocV7Vue() {
  return (
    <div className="mt-12 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/vue.svg" height={30} width={30} alt="Vue icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <VueCommonFirstSectionV1AndV7 />
      <VueCommonSecondSectionV1AndV7 />
      <V7VueThirdSection />
      <LintersSection />
      <V7VueFourthSection />
      <VueNuxtFifthSection />
    </div>
  );
}
