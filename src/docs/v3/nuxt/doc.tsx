import Image from 'next/image';
import V3NuxtFirstSection from '@/src/docs/v3/nuxt/sections/first';
import V3NuxtSecondSection from '@/src/docs/v3/nuxt/sections/second';
import V3NuxtThirdSection from '@/src/docs/v3/nuxt/sections/third';
import V3NuxtFourthSection from '@/src/docs/v3/nuxt/sections/fourth';
import V3NuxtFifthSection from '@/src/docs/v3/nuxt/sections/fifth';
import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';

export default function DocV3Nuxt() {
  return (
    <div className="py-8 max-w-full text-gray-700">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/nuxt.svg" height={30} width={30} alt="Nuxt icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <V3NuxtFirstSection />
      <V3NuxtSecondSection />
      <V3NuxtThirdSection />
      <V3NuxtFourthSection />
      <LintersSection />
      <V3NuxtFifthSection />
    </div>
  );
}
