import { useRouter } from 'next/router';
import useMounted from '@/hooks/useMounted';
import { useToggle } from '@/layout/context';
import NuxtIcon from '@/components/icons/nuxt';
import NextIcon from '@/components/icons/next';
import ReactIcon from '@/components/icons/react';
import SvelteIcon from '@/components/icons/svelte';
import { VueIcon } from '@/components/icons/icons';
import dashboardVersions from '@/data/versions.json';
import useScrollHeader from '@/hooks/useScrollHeader';
import TailwindIcon from '@/components/icons/tailwind';
import ThemeSwitcher from '@/components/themeSwitcher';

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavbarCollapse,
  NavbarNav,
  NavbarItem,
} from '@/components/ui/navbar';

import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from '@/components/ui/dropdown';

const style = {
  home: `text-white`,
  notHome: `bg-light dark:bg-dark dark:text-white text-custom shadow`,
  header: `fixed z-20 left-0 top-0 px-3 2xl:px-40 w-full md:px-4 lg:px-24 xl:px-28`,
};

export default function Header() {
  const { asPath } = useRouter();
  const { toggle } = useToggle();
  const { headerRef } = useScrollHeader();
  const isMounted = useMounted();

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
                  <DropdownItem href="/techno/react">
                    <ReactIcon />
                    <span className="mt-0.5 pl-2">React</span>
                  </DropdownItem>
                  <DropdownItem href="/techno/svelte">
                    <SvelteIcon />
                    <span className="mt-0.5 pl-2">Svelte</span>
                  </DropdownItem>
                  <DropdownItem href="/techno/vue">
                    <VueIcon className="w-6 h-6" />
                    <span className="mt-0.5 pl-2">Vue</span>
                  </DropdownItem>
                  <DropdownItem href="/techno/nuxt">
                    <NuxtIcon className="w-6 h-6" />
                    <span className="mt-0.5 pl-2">Nuxt</span>
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
