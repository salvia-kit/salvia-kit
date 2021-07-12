import Image from 'next/image';
import useScrollHeader from '@/src/utils/useScrollHeader';
import { NuxtIcon, ReactIcon, VueIcon } from '@/src/components/icons';

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
  return (
    <header
      ref={headerRef}
      className="fixed z-20 left-0 top-0 px-3 2xl:px-40 w-full text-white md:px-4 lg:px-24 xl:px-28"
    >
      <Navbar className="md:h-16">
        <NavbarBrand href="/">Salvia-Kit</NavbarBrand>
        <NavbarToggler toggle={() => console.log('issou')} />
        <NavbarCollapse>
          <NavbarNav orientation="end">
            <NavbarItem>
              <Dropdown>
                <DropdownToggle>Technologies</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/">
                    <Image
                      src="/svg/nextjs.svg"
                      height={25}
                      width={50}
                      alt="Next.js logo"
                    />
                  </DropdownItem>
                  <DropdownItem href="/">
                    <ReactIcon />
                    <span className="mt-0.5 pl-2">React</span>
                  </DropdownItem>
                  <DropdownItem href="/">
                    <VueIcon className="w-6 h-6" />
                    <span className="mt-0.5 pl-2">Vue</span>
                  </DropdownItem>
                  <DropdownItem href="/">
                    <NuxtIcon className="w-6 h-6" />
                    <span className="mt-0.5 pl-2">Nuxt</span>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="#">Contributions</NavbarLink>
            </NavbarItem>
          </NavbarNav>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}
