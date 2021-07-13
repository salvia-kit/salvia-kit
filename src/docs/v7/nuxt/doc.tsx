import Image from 'next/image';
import V7NuxtFirstSection from '@/src/docs/v7/nuxt/sections/first';
import V7NuxtSecondSection from '@/src/docs/v7/nuxt/sections/second';
import V7NuxtThirdSection from '@/src/docs/v7/nuxt/sections/third';
import V7NuxtFourthSection from '@/src/docs/v7/nuxt/sections/fourth';
import V7NuxtFifthSection from '@/src/docs/v7/nuxt/sections/fifth';
import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';

export default function DocV7Nuxt() {
  return (
    <div className="mt-12 max-w-full text-gray-700">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/nuxt.svg" height={30} width={30} alt="Nuxt icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <V7NuxtFirstSection />
      <V7NuxtSecondSection />
      <V7NuxtThirdSection />
      <V7NuxtFourthSection />
      <LintersSection />
      <V7NuxtFifthSection />
    </div>
  );
}
