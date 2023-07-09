import { useRouter } from 'next/router';
import useMounted from '@/hooks/useMounted';
import { useToggle } from '@/layout/Provider';
import NuxtIcon from '@/components/icons/NuxtIcon';
import NextIcon from '@/components/icons/NextIcon';
import ReactIcon from '@/components/icons/ReactIcon';
import dashboardVersions from '@/data/versions.json';
import useScrollHeader from '@/hooks/useScrollHeader';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import SvelteIcon from '@/components/icons/SvelteIcon';
import { TailwindIcon } from '@/components/icons/TailwindIcon';
import { AngularIcon, VueIcon } from '@/components/icons/others';

import {
  Navbar,
  NavbarNav,
  NavbarItem,
  NavbarBrand,
  NavbarToggler,
  NavbarCollapse,
} from '@/components/ui/Navbar';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from '@/components/ui/Dropdown';

const style = {
  home: `text-white`,
  notHome: `bg-light dark:bg-dark dark:text-white text-custom shadow`,
  header: `fixed z-20 left-0 top-0 px-3 2xl:px-40 w-full md:px-4 lg:px-24 xl:px-28`,
};

export default function Header() {
  const { asPath } = useRouter();
  const { toggle } = useToggle();
  const isMounted = useMounted();
  const { headerRef } = useScrollHeader();

  return (
    <header
      ref={asPath === '/' ? headerRef : null}
      className={`${style.header} ${
        isMounted && asPath === '/' ? style.home : style.notHome
      }`}
    >
      <Navbar className="md:h-16">
        <NavbarBrand href="/">Salvia-Kit</NavbarBrand>
        <NavbarToggler toggle={toggle} />
        <NavbarCollapse>
          <NavbarNav orientation="end">
            <NavbarItem>
              <Dropdown>
                <DropdownToggle>Technologies</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/techno/next">
                    <div className="ml-4">
                      <NextIcon className="w-12 h-8" />
                    </div>
                  </DropdownItem>
                  <DropdownItem href="/techno/vue">
                    <VueIcon className="w-6 h-6" />
                    <span className="mt-0.5 pl-2">Vue</span>
                  </DropdownItem>
                  <DropdownItem href="/techno/nuxt">
                    <NuxtIcon className="w-6 h-6" />
                    <span className="mt-0.5 pl-2">Nuxt</span>
                  </DropdownItem>
                  <DropdownItem href="/techno/react">
                    <ReactIcon />
                    <span className="mt-0.5 pl-2">React</span>
                  </DropdownItem>
                  <DropdownItem href="/techno/solid">
                    <div className="w-6 h-6">
                      <img src="/svg/solid.png" alt="Solid js" />
                    </div>
                    <span className="mt-0.5 pl-3">Solid</span>
                  </DropdownItem>
                  <DropdownItem href="/techno/svelte">
                    <SvelteIcon className="h-6 w-6" />
                    <span className="mt-0.5 pl-2">Svelte</span>
                  </DropdownItem>
                  <DropdownItem href="/techno/angular">
                    <AngularIcon className="w-6 h-6" />
                    <span className="mt-0.5 pl-2">Angular</span>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
            <NavbarItem>
              <Dropdown>
                <DropdownToggle>Versions</DropdownToggle>
                <DropdownMenu>
                  {dashboardVersions.map((item) => (
                    <DropdownItem
                      key={item.id}
                      href={item.link}
                      className="whitespace-pre"
                    >
                      <TailwindIcon />
                      <span className="pl-2">{item.name}</span>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
            <NavbarItem>
              <ThemeSwitcher />
            </NavbarItem>
          </NavbarNav>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}
