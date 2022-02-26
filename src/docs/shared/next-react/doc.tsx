import Image from 'next/image';
import { DocType } from '@/utils/globalTypes';
import NextIcon from '@/components/icons/next';
import LintersSection from '@/docs/common/linters';
import FeaturesSection from '@/docs/common/features';
import ComponentsSection from '@/docs/common/components';

import SharedNextReactFirstSection from '@/docs/shared/next-react/sections/first';
import SharedNextReactThirdSection from '@/docs/shared/next-react/sections/third';
import SharedReactNextFifthSection from '@/docs/shared/next-react/sections/fifth';
import SharedNextReactSecondSection from '@/docs/shared/next-react/sections/second';
import SharedNextReactFourthSection from '@/docs/shared/next-react/sections/fourth';

// This doc is for dashboards version 1 to 8 for React and Next.js

const style = {
  main: `mt-12 max-w-full`,
  h2: `flex mb-16 text-3xl font-medium`,
  nextIcon: `mt-2 w-20 h-12`,
  desc: {
    next: `pl-2 pt-4`,
    react: 'pl-2',
  },
};

export default function DocNextReact({
  techno = 'next',
  snippet = 'long',
  styleDir,
  mainComp,
  version,
}: DocType) {
  return (
    <div className={style.main}>
      <h2 className={style.h2}>
        {techno === 'next' && <NextIcon className={style.nextIcon} />}
        {techno === 'react' && (
          <Image src="/svg/react.svg" height={30} width={30} alt="React icon" />
        )}
        <span className={style.desc[techno]}>Documentation</span>
      </h2>
      <FeaturesSection />
      <SharedNextReactFirstSection
        techno={techno}
        mainComp={mainComp}
        styleDir={styleDir}
        version={version}
      />
      <SharedNextReactSecondSection
        snippet={snippet}
        techno={techno}
        mainComp={mainComp}
        styleDir={styleDir}
        version={version}
      />
      <SharedNextReactThirdSection techno={techno} />
      <LintersSection />
      <SharedNextReactFourthSection />
      <SharedReactNextFifthSection />
      <ComponentsSection />
    </div>
  );
}
