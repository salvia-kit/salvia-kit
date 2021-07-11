import useScrollHeader from '@/src/utils/useScrollHeader';

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
                    <div className="flex">
                      <span className="mt-4">React</span>
                    </div>
                  </DropdownItem>
                  <DropdownItem href="/">
                    <span>Next.js</span>
                  </DropdownItem>
                  <DropdownItem href="/">
                    <span className="pl-1">Vue</span>
                  </DropdownItem>
                  <DropdownItem href="/">Nuxt</DropdownItem>
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
