import Image from 'next/image';
import V6NuxtThirdSection from '@/src/docs/v6/nuxt/sections/third';
import V6NuxtFourthSection from '@/src/docs/v6/nuxt/sections/fourth';

import LintersSection from '@/src/docs/common-sections/linters';
import FeaturesSection from '@/src/docs/common-sections/features';
import VueNuxtFifthSection from '@/src/docs/common-sections/section/vue-nuxt/fifthSection';
import { NuxtCommonFirstSectionV3AndV4AndV6 } from '@/src/docs/common-sections/section/nuxt/firstSection';
import { NuxtCommonSecondSectionV3AndV4AndV6 } from '@/src/docs/common-sections/section/nuxt/secondSection';

export default function DocV6Nuxt() {
  return (
    <div className="mt-12 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/nuxt.svg" height={30} width={30} alt="Nuxt icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <NuxtCommonFirstSectionV3AndV4AndV6 />
      <NuxtCommonSecondSectionV3AndV4AndV6 />
      <V6NuxtThirdSection />
      <V6NuxtFourthSection />
      <LintersSection />
      <VueNuxtFifthSection />
    </div>
  );
}
