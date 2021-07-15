import Image from 'next/image';
import NuxtIcon from '@/src/components/icons/nuxt';
import ReactIcon from '@/src/components/icons/react';
import { VueIcon } from '@/src/components/icons/icons';
import dashboardVersions from '@/src/data/versions.json';
import TailwindIcon from '@/src/components/icons/tailwind';
import ThemeSwitcher from '@/src/components/themeSwitcher';

import {
  Sidenav,
  SidenavItem,
  SidenavSection,
} from '@/src/components/ui/sidenav';

export default function Sidenavigation() {
  return (
    <Sidenav>
      <SidenavSection className="mb-4">Theme</SidenavSection>
      <SidenavItem isLink={false}>
        <ThemeSwitcher />
      </SidenavItem>
      <SidenavSection className="mb-4 mt-16">Techno</SidenavSection>
      <SidenavItem href="/dashboard/technology?name=react">
        <ReactIcon className="mt-1 w-4 h-4" />
        <span className="mt-0.5 pl-2">React</span>
      </SidenavItem>
      <SidenavItem href="/dashboard/technology?name=vue">
        <VueIcon className="mt-0.5 w-4 h-4" />
        <span className="pl-2">Vue</span>
      </SidenavItem>
      <SidenavItem href="/dashboard/technology?name=next">
        <Image src="/images/next.png" width={20} height={20} alt="Next.js" />
        <span className="pl-2">Next.js</span>
      </SidenavItem>
      <SidenavItem href="/dashboard/technology?name=nuxt">
        <NuxtIcon className="mt-0.5 w-4 h-4" />
        <span className="pl-2">Nuxt</span>
      </SidenavItem>
      <SidenavSection className="mb-4 mt-16">Versions</SidenavSection>
      {dashboardVersions.map((item) => (
        <SidenavItem href={item.link} key={item.id}>
          <TailwindIcon className="w-5 h-5" />
          <span className="pl-2">{item.name}</span>
        </SidenavItem>
      ))}
    </Sidenav>
  );
}
