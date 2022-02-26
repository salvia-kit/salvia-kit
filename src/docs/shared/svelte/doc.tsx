import { SvelteDocType } from '@/utils/globalTypes';
import LintersSection from '@/docs/common/linters';
import FeaturesSection from '@/docs/common/features';

import SvelteIcon from '@/components/icons/svelte';
import SvelteDocFirstSection from '@/docs/shared/svelte/sections/first';
import SvelteDocSecondSection from '@/docs/shared/svelte/sections/second';
import SvelteDocThirdSection from '@/docs/shared/svelte/sections/third';
import SvelteDocFourthSection from '@/docs/shared/svelte/sections/fourth';
import SvelteDocFifthSection from '@/docs/shared/svelte/sections/fifth';

// This doc is for dashboards version 1 to 8 for Svelte kit

export default function DocSvelte({
  snippet = 'long',
  version,
}: SvelteDocType) {
  return (
    <div className="mt-12 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <SvelteIcon className="w-12 h-12 -mt-2" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <SvelteDocFirstSection version={version} />
      <SvelteDocSecondSection snippet={snippet} version={version} />
      <SvelteDocThirdSection />
      <LintersSection />
      <SvelteDocFourthSection />
      <SvelteDocFifthSection />
    </div>
  );
}
