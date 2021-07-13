import Image from 'next/image';
import NuxtIcon from '@/src/components/icons/nuxt';
import ReactIcon from '@/src/components/icons/react';
import { VueIcon } from '@/src/components/icons/icons';
import ThemeSwitcher from '@/src/components/themeSwitcher';
import {
  Sidenav,
  SidenavItem,
  SidenavSection,
} from '@/src/components/ui/sidenav';

export default function Sidenavigation() {
  return (
    <Sidenav>
      <SidenavSection className="mb-10">Technologies</SidenavSection>
      <SidenavItem href="/dashboard/technologie?name=react">
        <ReactIcon />
        <span className="mt-0.5 pl-2">React</span>
      </SidenavItem>
      <SidenavItem href="/dashboard/technologie?name=vue">
        <VueIcon className="w-6 h-6" />
        <span className="mt-0.5 pl-2">Vue</span>
      </SidenavItem>
      <SidenavItem href="/dashboard/technologie?name=next">
        <Image src="/images/next.png" width={20} height={20} alt="Next.js" />
        <span className="pl-2">Next.js</span>
      </SidenavItem>
      <SidenavItem href="/dashboard/technologie?name=nuxt">
        <NuxtIcon className="w-6 h-6" />
        <span className="mt-0.5 pl-2">Nuxt</span>
      </SidenavItem>
      <SidenavSection className="mb-6 mt-12">Theme</SidenavSection>
      <SidenavItem isLink={false}>
        <ThemeSwitcher />
      </SidenavItem>
    </Sidenav>
  );
}
