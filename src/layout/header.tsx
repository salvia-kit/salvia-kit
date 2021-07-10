import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavbarCollapse,
  NavbarNav,
  NavbarItem,
  NavbarLink,
} from '@/src/components/ui/navbar';

export default function Header() {
  return (
    <header className="fixed z-20 left-0 top-0 px-3 w-full lg:px-28">
      <Navbar bgColor="bg-transparent" textColor="text-white">
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
