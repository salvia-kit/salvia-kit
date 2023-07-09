import React from 'react';
import Button from '@/components/ui/Button';
import NuxtIcon from '@/components/icons/NuxtIcon';
import NextIcon from '@/components/icons/NextIcon';
import ReactIcon from '@/components/icons/ReactIcon';
import ExternalLink from '@/components/ExternalLink';
import SvelteIcon from '@/components/icons/SvelteIcon';
import { AngularIcon, VueIcon } from '@/components/icons/others';

interface DocumentationProps {
  techno: any;
}

type Item = 'react' | 'next' | 'vue' | 'nuxt' | 'svelte' | 'solid' | 'angular';

const icons = {
  vue: <VueIcon className="w-4 h-4" />,
  next: <NextIcon className="w-8 h-7" />,
  nuxt: <NuxtIcon className="w-5 h-5" />,
  react: <ReactIcon className="w-5 h-5" />,
  svelte: <SvelteIcon className="w-5 h-5" />,
  angular: <AngularIcon className=" w-5 h-5" />,
  solid: (
    <div className="w-5 h-5">
      <img src="/svg/solid.png" alt="Solid js" />
    </div>
  ),
};

export function Documentation({ techno }: DocumentationProps) {
  const [item, setItem] = React.useState<Item>('react');

  const handleSelectChange = React.useCallback((e: any) => {
    setItem(e.target.value);
  }, []);

  return (
    <>
      <div>
        <label>Documentation</label>
        <div className="w-48">
          <select
            value={item}
            name="techno"
            onChange={handleSelectChange}
            className="text-base relative flex flex-1 w-full mt-1 rounded-md py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-1 focus:border-transparent border"
          >
            {techno?.vue && <option value="vue">Vue</option>}
            <option value="next">Next</option>
            {techno?.nuxt && <option value="nuxt">Nuxt</option>}
            <option value="react">React</option>
            <option value="solid">Solid</option>
            <option value="svelte">Svelte</option>
            {techno?.angular && <option value="angular">Angular</option>}
          </select>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-8">
        <ExternalLink href={techno[item]?.source || techno.next.source}>
          <Button
            size="sm"
            color="custom"
            className="flex gap-x-2 items-center py-2"
          >
            {icons[item] || icons.next} Source code
          </Button>
        </ExternalLink>
      </div>
      {techno[item]?.doc || techno.react.doc}
    </>
  );
}
