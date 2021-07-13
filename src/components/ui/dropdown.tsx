import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChildrenType } from '@/src/utils/childrenType';

interface DropdownItemProps extends ChildrenType {
  href?: string | any;
}

interface IContextValues {
  show?: boolean;
  ref?: any;
  toggle?: () => void;
}

const style = {
  menu: `block z-30 absolute top-0 left-0 bg-white dark:bg-dropdown float-left py-3 px-0 text-left shadow-md rounded-lg mt-0.5 mb-0 mx-0 bg-clip-padding`,
  item: `flex w-full py-3 px-12 text-custom dark:text-white clear-both text-sm font-medium border-0 hover:bg-gray-200 dark:hover:bg-body-dark cursor-pointer`,
};

const Context = React.createContext<IContextValues>({});

function Dropdown({ children }: ChildrenType) {
  const [show, setShow] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggle = React.useCallback(() => {
    setShow((prevState) => !prevState);
  }, []);

  // close dropdown when click outside
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

  // close dropdown when route changes
  React.useEffect(() => {
    const handleRouteChange = (event: any) => {
      if (!show) return;
      setShow(false);
    };
    document.addEventListener('keyup', handleRouteChange);
    return () => document.removeEventListener('keyup', handleRouteChange);
  }, [show]);

  const values = React.useMemo(() => ({ show, ref, toggle }), [show, toggle]);

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

function useToggle() {
  return React.useContext(Context);
}

function DropdownToggle({ children }: ChildrenType) {
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

function DropdownMenu({ children }: ChildrenType) {
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

function DropdownItem({ children, href }: DropdownItemProps) {
  return (
    <Link href={href}>
      <a tabIndex={0} className={style.item} role="menuitem">
        {children}
      </a>
    </Link>
  );
}

export { Dropdown, DropdownToggle, DropdownMenu, DropdownItem };
