import Link from 'next/link';
import { ChildrenType } from '@/src/utils/childrenType';

interface INavbarProps extends ChildrenType {
  className?: string;
}

interface INavbarLinkProps extends ChildrenType {
  href: string;
}

interface INavbarBrandProps extends INavbarLinkProps {}

interface INavbarToggleProps {
  toggle: () => void;
}

interface INavbarNavProps extends ChildrenType {
  orientation: 'start' | 'end';
}

const style = {
  nav: {
    start: `pl-0 mb-0 mr-auto flex`,
    end: `pl-0 mb-0 ml-auto flex`,
  },
  collapse: `hidden lg:flex-grow lg:items-center lg:flex`,
  link: `cursor-pointer`,
  item: `py-1.5 md:py-1 px-4 font-bold`,
  toggler: `float-right block lg:hidden pt-1.5 text-3xl focus:outline-none focus:shadow`,
  brand: `inline-block pt-1.5 pb-1.5 mr-4 cursor-pointer text-2xl font-bold whitespace-nowrap`,
  navbar: `font-light lg:relative lg:flex lg:items-center py-2 lg:flex lg:flex-row lg:justify-start`,
};

export function Navbar({ className, children }: INavbarProps) {
  return <nav className={`${className} ${style.navbar}`}>{children}</nav>;
}

export function NavbarBrand({ children, href }: INavbarBrandProps) {
  return (
    <Link href={href}>
      <a className={style.brand}>
        <strong>{children}</strong>
      </a>
    </Link>
  );
}

export function NavbarToggler({ toggle }: INavbarToggleProps) {
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

export function NavbarCollapse({ children }: ChildrenType) {
  return <div className={style.collapse}>{children}</div>;
}

export function NavbarNav({ children, orientation }: INavbarNavProps) {
  return <ul className={style.nav[orientation]}>{children}</ul>;
}

export function NavbarItem({ children }: ChildrenType) {
  return <li className={style.item}>{children}</li>;
}

export function NavbarLink({ children, href, ...rest }: INavbarLinkProps) {
  return (
    <Link href={href} {...rest}>
      <a href={href} className={style.link}>
        {children}
      </a>
    </Link>
  );
}
