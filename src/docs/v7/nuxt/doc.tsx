import Image from 'next/image';
import V7NuxtThirdSection from '@/src/docs/v7/nuxt/sections/third';
import V7NuxtFourthSection from '@/src/docs/v7/nuxt/sections/fourth';

import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';
import VueNuxtFifthSection from '@/src/docs/common/section/vue-nuxt/fifthSection';
import { NuxtCommonFirstSectionV1AndV7 } from '@/src/docs/common/section/nuxt/firstSection';
import { NuxtCommonSecondSectionV1AndV7 } from '@/src/docs/common/section/nuxt/secondSection';

export default function DocV7Nuxt() {
  return (
    <div className="mt-12 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/nuxt.svg" height={30} width={30} alt="Nuxt icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <NuxtCommonFirstSectionV1AndV7 />
      <NuxtCommonSecondSectionV1AndV7 />
      <V7NuxtThirdSection />
      <V7NuxtFourthSection />
      <LintersSection />
      <VueNuxtFifthSection />
    </div>
  );
}
