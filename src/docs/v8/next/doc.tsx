import Image from 'next/image';
import V8NextFirstSection from '@/src/docs/v8/next/sections/first';
import V8NextSecondSection from '@/src/docs/v8/next/sections/second';
import V8NextThirdSection from '@/src/docs/v8/next/sections/third';
import V8NextFourthSection from '@/src/docs/v8/next/sections/fourth';
import V8NextFifthSection from '@/src/docs/v8/next/sections/fifth';
import LintersSection from '@/src/docs/common/linters';
import ComponentsSection from '@/src/docs/common/components';
import FeaturesSection from '@/src/docs/common/features';

export default function DocV8Next() {
  return (
    <div className="mt-12 max-w-full text-gray-700">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image
          src="/svg/nextjs.svg"
          height={70}
          width={70}
          alt="Next.js icon"
        />
        <span className="pl-2 pt-4">Documentation</span>
      </h2>
      <FeaturesSection />
      <V8NextFirstSection />
      <V8NextSecondSection />
      <V8NextThirdSection />
      <LintersSection />
      <V8NextFourthSection />
      <V8NextFifthSection />
      <ComponentsSection />
    </div>
  );
}
