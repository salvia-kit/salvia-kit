import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useToggle } from '@/layout/Provider';
import { ChildrenType } from '@/utils/globalTypes';

interface SidebarSectionProps extends ChildrenType {
  className?: string;
}

interface SidebarItemProps extends ChildrenType {
  href?: string | any;
  isLink?: boolean;
}

const style = {
  section: 'pl-5 text-2xl font-medium',
  itemActive: 'bg-gray-100 dark:bg-[#1B2A31]',
  item: `flex justify-start whitespace-pre text-sm cursor-pointer font-light pl-8 mb-5 py-2`,
  sidenav: {
    default: `flex flex-col h-screen fixed z-40 top-0 pb-32 right-0 lg:hidden overflow-x-hidden`,
    close: `bg-gray-800 text-white hidden`,
    open: `w-8/12 bg-light dark:bg-dark`,
  },
};

function Sidebar({ children }: ChildrenType) {
  const { open, ref } = useToggle();
  return (
    <aside
      aria-hidden={!open}
      id="sidebar"
      aria-label="Sponsors"
      ref={ref}
      className={`${style.sidenav.default} 
        ${open ? style.sidenav.open : style.sidenav.close}`}
    >
      <div className="mt-12">{children}</div>
    </aside>
  );
}

function SidebarSection({ children, className }: SidebarSectionProps) {
  return <div className={`${style.section} ${className}`}>{children}</div>;
}

function SidebarItem({ children, href, isLink = true }: SidebarItemProps) {
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
  return <span className={style.item}>{children}</span>;
}

export { Sidebar, SidebarSection, SidebarItem };
