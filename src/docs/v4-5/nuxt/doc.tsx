import Image from 'next/image';
import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';
import V4AndV5NuxtThirdSection from '@/src/docs/v4-5/nuxt/sections/third';
import V4AndV5NuxtFourthSection from '@/src/docs/v4-5/nuxt/sections/fourth';
import VueNuxtFifthSection from '@/src/docs/common/section/vue-nuxt/fifthSection';
import { NuxtCommonFirstSectionV3AndV4AndV6 } from '@/src/docs/common/section/nuxt/firstSection';
import { NuxtCommonSecondSectionV3AndV4AndV6 } from '@/src/docs/common/section/nuxt/secondSection';

// this doc is for the version 4 and 5 of dashboard
export default function DocV4AndV5Nuxt() {
  return (
    <div className="mt-12 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/nuxt.svg" height={30} width={30} alt="Nuxt icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <NuxtCommonFirstSectionV3AndV4AndV6 />
      <NuxtCommonSecondSectionV3AndV4AndV6 />
      <V4AndV5NuxtThirdSection />
      <V4AndV5NuxtFourthSection />
      <LintersSection />
      <VueNuxtFifthSection />
    </div>
  );
}
