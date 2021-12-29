import Image from 'next/image';
import LintersSection from '@/src/docs/common-sections/linters';
import FeaturesSection from '@/src/docs/common-sections/features';
import V1AndV2VueThirdSection from '@/src/docs/v1-2/vue/sections/third';
import V1AndV2VueFourthSection from '@/src/docs/v1-2/vue/sections/fourth';
import VueNuxtFifthSection from '@/src/docs/common-sections/section/vue-nuxt/fifthSection';
import { VueCommonFirstSectionV1AndV7 } from '@/src/docs/common-sections/section/vue/firstSection';
import { VueCommonSecondSectionV1AndV7 } from '@/src/docs/common-sections/section/vue/secondSection';

// this doc is for the version 1 and 2 of dashboard
export default function DocV1AndV2Vue() {
  return (
    <div className="mt-16 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/vue.svg" height={30} width={30} alt="Vue icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <VueCommonFirstSectionV1AndV7 />
      <VueCommonSecondSectionV1AndV7 />
      <V1AndV2VueThirdSection />
      <LintersSection />
      <V1AndV2VueFourthSection />
      <VueNuxtFifthSection />
    </div>
  );
}
