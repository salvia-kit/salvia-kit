import Image from 'next/image';
import V3NuxtThirdSection from '@/src/docs/v3/nuxt/sections/third';
import V3NuxtFourthSection from '@/src/docs/v3/nuxt/sections/fourth';

import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';
import VueNuxtFifthSection from '@/src/docs/common/section/vue-nuxt/fifthSection';
import { NuxtCommonFirstSectionV3AndV4AndV6 } from '@/src/docs/common/section/nuxt/firstSection';
import { NuxtCommonSecondSectionV3AndV4AndV6 } from '@/src/docs/common/section/nuxt/secondSection';

export default function DocV3Nuxt() {
  return (
    <div className="mt-12 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/nuxt.svg" height={30} width={30} alt="Nuxt icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <NuxtCommonFirstSectionV3AndV4AndV6 />
      <NuxtCommonSecondSectionV3AndV4AndV6 />
      <V3NuxtThirdSection />
      <V3NuxtFourthSection />
      <LintersSection />
      <VueNuxtFifthSection />
    </div>
  );
}
