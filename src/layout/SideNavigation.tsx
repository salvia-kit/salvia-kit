import Image from 'next/image';
import NuxtIcon from '@/components/icons/NuxtIcon';
import ReactIcon from '@/components/icons/ReactIcon';
import dashboardVersions from '@/data/versions.json';
import SvelteIcon from '@/components/icons/SvelteIcon';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { TailwindIcon } from '@/components/icons/TailwindIcon';
import { AngularIcon, VueIcon } from '@/components/icons/others';
import { Sidebar, SidebarItem, SidebarSection } from '@/components/ui/Sidebar';

export function SideNavigation() {
  return (
    <Sidebar>
      <SidebarSection className="mb-4">Theme</SidebarSection>
      <SidebarItem isLink={false}>
        <ThemeSwitcher />
      </SidebarItem>
      <SidebarSection className="mb-4 mt-16">Techno</SidebarSection>

      <SidebarItem href="/techno/vue">
        <VueIcon className="mt-0.5 w-5 h-5" />
        <span className="pl-2">Vue</span>
      </SidebarItem>

      <SidebarItem href="/techno/nuxt">
        <NuxtIcon className="mt-0.5 w-5 h-5" />
        <span className="pl-2">Nuxt</span>
      </SidebarItem>

      <SidebarItem href="/techno/react">
        <ReactIcon className="mt-1 w-5 h-5" />
        <span className="mt-0.5 pl-2">React</span>
      </SidebarItem>

      <SidebarItem href="/techno/solid">
        <div className="w-5 h-5">
          <img src="/svg/solid.png" alt="Solid js" />
        </div>
        <span className="pl-2">Solid</span>
      </SidebarItem>

      <SidebarItem href="/techno/svelte">
        <SvelteIcon className="mt-0.5 w-5 h-5" />
        <span className="pl-2">Svelte</span>
      </SidebarItem>

      <SidebarItem href="/techno/next">
        <Image
          src="/images/others/next.png"
          width={20}
          height={20}
          alt="Next.js"
        />
        <span className="pl-2">Next.js</span>
      </SidebarItem>

      <SidebarItem href="/techno/angular">
        <AngularIcon className="w-5 h-5" />
        <span className="pl-2">Angular</span>
      </SidebarItem>
      <SidebarSection className="mb-4 mt-16">Versions</SidebarSection>
      {dashboardVersions.map((item) => (
        <SidebarItem href={item.link} key={item.id}>
          <TailwindIcon className="w-5 h-5" />
          <span className="pl-2">{item.name}</span>
        </SidebarItem>
      ))}
    </Sidebar>
  );
}
