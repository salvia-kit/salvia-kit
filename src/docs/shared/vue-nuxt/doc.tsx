import Image from 'next/image';
import {
  SharedNuxtFirstSection,
  SharedVueFirstSection,
} from '@/docs/shared/vue-nuxt/sections/first';
import LintersSection from '@/docs/common/linters';
import { DocVueNuxtType } from '@/utils/globalTypes';
import FeaturesSection from '@/docs/common/features';

import SharedNuxtVueFifthSection from '@/docs/shared/vue-nuxt/sections/fifth';
import SharedNuxtVueThirdSection from '@/docs/shared/vue-nuxt/sections/third';
import SharedNuxtVueSecondSection from '@/docs/shared/vue-nuxt/sections/second';
import SharedNuxtVueFourthSection from '@/docs/shared/vue-nuxt/sections/fourth';

// This doc is for the dashboards version 1 to 8 for Vue & Nuxt
export default function DocNuxtVue({
  techno,
  section,
  version,
}: DocVueNuxtType) {
  return (
    <div className="mt-16 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        {techno === 'vue' ? (
          <Image src="/svg/vue.svg" height={30} width={30} alt="Vue icon" />
        ) : (
          <Image src="/svg/nuxt.svg" height={30} width={30} alt="Nuxt icon" />
        )}
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      {techno === 'vue' && (
        <SharedVueFirstSection section={section} version={version} />
      )}
      {techno === 'nuxt' && (
        <SharedNuxtFirstSection section={section} version={version} />
      )}
      <SharedNuxtVueSecondSection section={section} version={version} />
      <SharedNuxtVueThirdSection techno={techno} />
      <LintersSection />
      <SharedNuxtVueFourthSection />
      <SharedNuxtVueFifthSection />
    </div>
  );
}
