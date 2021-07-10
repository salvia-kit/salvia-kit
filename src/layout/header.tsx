import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavbarCollapse,
  NavbarNav,
  NavbarItem,
  NavbarLink,
} from '@/src/components/ui/navbar';
import useScrollHeader from '@/src/utils/useScrollHeader';

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
              <NavbarLink href="#">Documents</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="#">React</NavbarLink>
            </NavbarItem>
          </NavbarNav>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}
