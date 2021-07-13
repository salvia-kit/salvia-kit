import React from 'react';
import Link from 'next/link';
import { useToggle } from '@/src/layout/context';
import { ChildrenType } from '@/src/utils/childrenType';

interface IContextProps {
  open?: boolean;
  toggle?: () => void;
  ref?: any;
}

interface ISidenavSectionProps extends ChildrenType {
  className?: string;
}

interface ISidenavItemProps extends ChildrenType {
  href?: string | any;
  isLink?: boolean;
}

const style = {
  section: 'pl-5 text-2xl font-medium',
  item: `flex justify-start cursor-pointer font-medium ml-8 mb-8`,
  sidenav: {
    close: `w-0 bg-gray-800 text-white overflow-x-hidden`,
    open: `w-7/12  bg-body dark:bg-body-dark overflow-x-hidden`,
    default: `block h-screen fixed z-40 top-0 right-0 transition-all ease duration-200 lg:hidden`,
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
  return (
    <>
      {isLink ? (
        <Link href={href}>
          <a className={style.item}>{children}</a>
        </Link>
      ) : (
        <a className={style.item}>{children}</a>
      )}
    </>
  );
}

export { Sidenav, SidenavSection, SidenavItem };
