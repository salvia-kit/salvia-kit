import Image from 'next/image';
import V6NuxtFirstSection from '@/src/docs/v6/nuxt/sections/first';
import V6NuxtSecondSection from '@/src/docs/v6/nuxt/sections/second';
import V6NuxtThirdSection from '@/src/docs/v6/nuxt/sections/third';
import V6NuxtFourthSection from '@/src/docs/v6/nuxt/sections/fourth';
import V6NuxtFifthSection from '@/src/docs/v6/nuxt/sections/fifth';
import LintersSection from '@/src/docs/common/linters';
import FeaturesSection from '@/src/docs/common/features';

export default function DocV6Nuxt() {
  return (
    <div className="py-8 max-w-full text-gray-700">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/nuxt.svg" height={30} width={30} alt="Nuxt icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <V6NuxtFirstSection />
      <V6NuxtSecondSection />
      <V6NuxtThirdSection />
      <V6NuxtFourthSection />
      <LintersSection />
      <V6NuxtFifthSection />
    </div>
  );
}
