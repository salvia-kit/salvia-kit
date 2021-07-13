import Image from 'next/image';
import V4NuxtFirstSection from '@/src/docs/v4-5/nuxt/sections/first';
import V4NuxtSecondSection from '@/src/docs/v4-5/nuxt/sections/second';
import V4NuxtThirdSection from '@/src/docs/v4-5/nuxt/sections/third';
import V4NuxtFourthSection from '@/src/docs/v4-5/nuxt/sections/fourth';
import V4NuxtFifthSection from '@/src/docs/v4-5/nuxt/sections/fifth';
import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';

// this doc is for the version 4 and 5 of dashboard
export default function DocV4Nuxt() {
  return (
    <div className="mt-12 max-w-full text-gray-700">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/nuxt.svg" height={30} width={30} alt="Nuxt icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <V4NuxtFirstSection />
      <V4NuxtSecondSection />
      <V4NuxtThirdSection />
      <V4NuxtFourthSection />
      <LintersSection />
      <V4NuxtFifthSection />
    </div>
  );
}
