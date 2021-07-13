import { useRouter } from 'next/router';
import { useToggle } from '@/src/layout/context';
import NuxtIcon from '@/src/components/icons/nuxt';
import NextIcon from '@/src/components/icons/next';
import ReactIcon from '@/src/components/icons/react';
import { VueIcon } from '@/src/components/icons/icons';
import useScrollHeader from '@/src/utils/useScrollHeader';
import ThemeSwitcher from '@/src/components/themeSwitcher';

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavbarCollapse,
  NavbarNav,
  NavbarItem,
  NavbarLink,
} from '@/src/components/ui/navbar';

import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from '@/src/components/ui/dropdown';

export default function Header() {
  const { headerRef } = useScrollHeader();
  const { asPath } = useRouter();
  const { toggle } = useToggle();

  return (
    <header
      ref={headerRef}
      className={`fixed z-20 left-0 top-0 px-3 2xl:px-40 w-full md:px-4 lg:px-24 xl:px-28
        ${
          asPath !== '/'
            ? 'bg-body dark:bg-body-dark dark:text-white text-custom shadow'
            : 'text-white'
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
                  <DropdownItem href="/dashboard/technologie?name=next">
                    <NextIcon className="w-12 h-8" />
                  </DropdownItem>
                  <DropdownItem href="/dashboard/technologie?name=react">
                    <ReactIcon />
                    <span className="mt-0.5 pl-2">React</span>
                  </DropdownItem>
                  <DropdownItem href="/dashboard/technologie?name=vue">
                    <VueIcon className="w-6 h-6" />
                    <span className="mt-0.5 pl-2">Vue</span>
                  </DropdownItem>
                  <DropdownItem href="/dashboard/technologie?name=nuxt">
                    <NuxtIcon className="w-6 h-6" />
                    <span className="mt-0.5 pl-2">Nuxt</span>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="#">Contributions</NavbarLink>
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
