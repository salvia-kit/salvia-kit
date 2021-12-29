import Image from 'next/image';
import LintersSection from '@/src/docs/common-sections/linters';
import FeaturesSection from '@/src/docs/common-sections/features';
import V6VueThirdSection from '@/src/docs/v6/vue/sections/third';
import V6VueFourthSection from '@/src/docs/v6/vue/sections/fourth';
import VueNuxtFifthSection from '@/src/docs/common-sections/section/vue-nuxt/fifthSection';
import { VueCommonFirstSectionV3AndV4AndV6 } from '@/src/docs/common-sections/section/vue/firstSection';
import { VueCommonSecondSectionV3AndV4AndV6 } from '@/src/docs/common-sections/section/vue/secondSection';

export default function DocV6Vue() {
  return (
    <div className="mt-12 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/vue.svg" height={30} width={30} alt="Vue icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <VueCommonFirstSectionV3AndV4AndV6 />
      <VueCommonSecondSectionV3AndV4AndV6 />
      <V6VueThirdSection />
      <LintersSection />
      <V6VueFourthSection />
      <VueNuxtFifthSection />
    </div>
  );
}
