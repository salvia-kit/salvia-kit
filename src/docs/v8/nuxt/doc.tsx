import Image from 'next/image';
import V8NuxtFirstSection from '@/src/docs/v8/nuxt/sections/first';
import V8NuxtSecondSection from '@/src/docs/v8/nuxt/sections/second';
import V8NuxtThirdSection from '@/src/docs/v8/nuxt/sections/third';
import V8NuxtFourthSection from '@/src/docs/v8/nuxt/sections/fourth';

import LintersSection from '@/src/docs/common-sections/linters';
import FeaturesSection from '@/src/docs/common-sections/features';
import VueNuxtFifthSection from '@/src/docs/common-sections/section/vue-nuxt/fifthSection';

export default function DocV8Nuxt() {
  return (
    <div className="mt-16 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/nuxt.svg" height={30} width={30} alt="Nuxt icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <V8NuxtFirstSection />
      <V8NuxtSecondSection />
      <V8NuxtThirdSection />
      <V8NuxtFourthSection />
      <LintersSection />
      <VueNuxtFifthSection />
    </div>
  );
}
