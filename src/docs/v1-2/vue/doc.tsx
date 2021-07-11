import Image from 'next/image';
import V1VueFirstSection from '@/src/docs/v1-2/vue/sections/first';
import V1VueSecondSection from '@/src/docs/v1-2/vue/sections/second';
import V1VueThirdSection from '@/src/docs/v1-2/vue/sections/third';
import V1VueFourthSection from '@/src/docs/v1-2/vue/sections/fourth';
import V1VueFifthSection from '@/src/docs/v1-2/vue/sections/fifth';
import V1VueSixthSection from '@/src/docs/v1-2/vue/sections/sixth';
import V1VueSeventhSection from '@/src/docs/v1-2/vue/sections/seventh';

// this doc is for the version 1 and 2 of dashboard
export default function DocV1Vue() {
  return (
    <div className="py-8 max-w-full text-gray-700">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/vue.svg" height={30} width={30} alt="Vue icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <V1VueFirstSection />
      <V1VueSecondSection />
      <V1VueThirdSection />
      <V1VueFourthSection />
      <V1VueFifthSection />
      <V1VueSixthSection />
      <V1VueSeventhSection />
    </div>
  );
}
