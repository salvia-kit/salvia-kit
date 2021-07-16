import Image from 'next/image';
import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';
import V4AndV5VueThirdSection from '@/src/docs/v4-5/vue/sections/third';
import V4AndV5VueFourthSection from '@/src/docs/v4-5/vue/sections/fourth';
import VueNuxtFifthSection from '@/src/docs/common/section/vue-nuxt/fifthSection';
import { VueCommonFirstSectionV3AndV4AndV6 } from '@/src/docs/common/section/vue/firstSection';
import { VueCommonSecondSectionV3AndV4AndV6 } from '@/src/docs/common/section/vue/secondSection';

// this doc is for the version 4 and 5 of dashboard
export default function DocV4AndV5Vue() {
  return (
    <div className="mt-12 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/vue.svg" height={30} width={30} alt="Vue icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <VueCommonFirstSectionV3AndV4AndV6 />
      <VueCommonSecondSectionV3AndV4AndV6 />
      <V4AndV5VueThirdSection />
      <LintersSection />
      <V4AndV5VueFourthSection />
      <VueNuxtFifthSection />
    </div>
  );
}
