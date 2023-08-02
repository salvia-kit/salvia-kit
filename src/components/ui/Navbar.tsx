import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import { ChildrenType } from '@/utils/globalTypes';

interface INavbarProps extends ChildrenType {
  className?: string;
}

interface INavbarLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
}

interface INavbarBrandProps extends INavbarLinkProps {}

interface INavbarToggleProps {
  toggle: any;
}

interface INavbarNavProps extends ChildrenType {
  orientation: 'start' | 'end';
}

const style = {
  nav: {
    start: `pl-0 mb-0 mr-auto flex`,
    end: `pl-0 mb-0 ml-auto flex`,
  },
  link: `cursor-pointer`,
  item: `py-1.5 md:py-1 px-4 font-bold`,
  collapse: `hidden lg:flex-grow lg:items-center lg:flex`,
  toggler: `float-right block lg:hidden -mt-0.5 text-4xl focus:outline-none focus:shadow`,
  navbar: `font-light lg:relative lg:flex lg:items-center py-2 lg:flex lg:flex-row lg:justify-start`,
  brand: `inline-block pt-1.5 pb-1.5 mr-4 cursor-pointer text-2xl md:text-3xl font-bold whitespace-nowrap`,
};

function Navbar({ className, children }: INavbarProps) {
  return <nav className={`${className} ${style.navbar}`}>{children}</nav>;
}

function NavbarBrand({ children, href }: INavbarBrandProps) {
  return (
    <Link href={href}>
      <a className={style.brand}>
        <strong>{children}</strong>
      </a>
    </Link>
  );
}

function NavbarToggler({ toggle }: INavbarToggleProps) {
  return (
    <button
      type="button"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className={style.toggler}
      onClick={toggle}
    >
      &#8801;
    </button>
  );
}

function NavbarCollapse({ children }: ChildrenType) {
  return <div className={style.collapse}>{children}</div>;
}

function NavbarNav({ children, orientation }: INavbarNavProps) {
  return <ul className={style.nav[orientation]}>{children}</ul>;
}

function NavbarItem({ children }: ChildrenType) {
  return <li className={style.item}>{children}</li>;
}

export {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavbarCollapse,
  NavbarNav,
  NavbarItem,
};
