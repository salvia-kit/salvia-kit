import React from 'react';
import Link from 'next/link';
import { ChildrenType } from '@/src/utils/childrenType';

interface DropdownItemProps {
  children: React.ReactNode;
  href?: string | any;
}

interface IContextValues {
  show?: boolean;
  ref?: any;
  toggle?: () => void;
}

const style = {
  menu: `block z-30 absolute top-0 left-0 bg-white float-left py-2 px-0 text-left rounded-sm mt-0.5 mb-0 mx-0 bg-clip-padding`,
  item: `block w-full py-1 px-8 mb-2 text-gray-700 clear-both text-sm font-medium border-0 hover:bg-gray-200 cursor-pointer`,
};

const Context = React.createContext<IContextValues>({});

export function Dropdown({ children }: ChildrenType) {
  const [show, setShow] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const toggle = React.useCallback(() => {
    setShow((prevState) => !prevState);
  }, []);

  // close dropdown when you click outside
  React.useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (!ref.current?.contains(event.target)) {
        if (!show) return;
        setShow(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [show, ref]);

  // close dropdown when you click on "ESC" key
  React.useEffect(() => {
    const handleEscape = (event: any) => {
      if (!show) return;

      if (event.key === 'Escape') {
        setShow(false);
      }
    };
    document.addEventListener('keyup', handleEscape);
    return () => document.removeEventListener('keyup', handleEscape);
  }, [show]);

  const values = React.useMemo(() => ({ show, ref, toggle }), [show, toggle]);

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

function useToggle() {
  return React.useContext(Context);
}

export function DropdownToggle({ children }: ChildrenType) {
  const { toggle } = useToggle();
  return (
    <button
      onClick={toggle}
      type="button"
      className="font-bold focus:outline-none"
      aria-expanded="true"
      aria-haspopup="true"
    >
      {children}
    </button>
  );
}

export function DropdownMenu({ children }: ChildrenType) {
  const { show } = useToggle();
  return (
    <div className="relative">
      <div
        style={{ transform: 'translate3d(0px, 3px, 0px)' }}
        className={style.menu}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {show && children}
      </div>
    </div>
  );
}

export function DropdownItem({ children, href }: DropdownItemProps) {
  return (
    <Link href={href}>
      <a tabIndex={0} className={style.item} role="menuitem">
        {children}
      </a>
    </Link>
  );
}
