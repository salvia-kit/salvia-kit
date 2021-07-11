import Image from 'next/image';
import V1NuxtFirstSection from '@/src/docs/v1-2/nuxt/sections/first';
import V1NuxtSecondSection from '@/src/docs/v1-2/nuxt/sections/second';
import V1NuxtThirdSection from '@/src/docs/v1-2/nuxt/sections/third';
import V1NuxtFourthSection from '@/src/docs/v1-2/nuxt/sections/fourth';
import V1NuxtFifthSection from '@/src/docs/v1-2/nuxt/sections/fifth';
import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';

// this doc is for the version 1 and 2 of dashboard
export default function DocV1Nuxt() {
  return (
    <div className="py-8 max-w-full text-gray-700">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/nuxt.svg" height={30} width={30} alt="Nuxt icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <V1NuxtFirstSection />
      <V1NuxtSecondSection />
      <V1NuxtThirdSection />
      <V1NuxtFourthSection />
      <LintersSection />
      <V1NuxtFifthSection />
    </div>
  );
}
