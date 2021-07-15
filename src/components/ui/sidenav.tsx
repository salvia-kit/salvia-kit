import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useToggle } from '@/src/layout/context';
import { ChildrenType } from '@/src/utils/globalTypes';

interface ISidenavSectionProps extends ChildrenType {
  className?: string;
}

interface ISidenavItemProps extends ChildrenType {
  href?: string | any;
  isLink?: boolean;
}

const style = {
  section: 'pl-5 text-2xl font-medium',
  itemActive: 'bg-gray-100 dark:bg-dropdown',
  item: `flex justify-start text-sm cursor-pointer font-light pl-8 mb-5 py-2`,
  sidenav: {
    close: `w-0 bg-gray-800 text-white overflow-x-hidden transition-all ease-in duration-200`,
    open: `w-7/12  bg-body dark:bg-body-dark overflow-x-hidden transition-all ease-out duration-200`,
    default: `flex flex-col h-screen fixed z-40 top-0 pb-32 right-0 lg:hidden`,
  },
};

function Sidenav({ children }: ChildrenType) {
  const { open, ref } = useToggle();
  return (
    <aside
      ref={ref}
      className={`${style.sidenav.default} 
        ${open ? style.sidenav.open : style.sidenav.close}`}
    >
      <div className="mt-12">{children}</div>
    </aside>
  );
}

function SidenavSection({ children, className }: ISidenavSectionProps) {
  return <div className={`${style.section} ${className}`}>{children}</div>;
}

function SidenavItem({ children, href, isLink = true }: ISidenavItemProps) {
  const { asPath } = useRouter();
  if (isLink) {
    return (
      <Link href={href}>
        <a
          className={`${style.item} ${asPath === href ? style.itemActive : ''}`}
        >
          {children}
        </a>
      </Link>
    );
  }
  return <a className={style.item}>{children}</a>;
}

export { Sidenav, SidenavSection, SidenavItem };
