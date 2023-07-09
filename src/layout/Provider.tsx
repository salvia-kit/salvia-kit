import React from 'react';
import { useRouter } from 'next/router';
import { ChildrenType } from '@/utils/globalTypes';

interface IContextProps {
  open?: boolean;
  toggle?: () => void;
  ref?: React.Ref<HTMLElement>;
}

const Provider = React.createContext<IContextProps>({});

export default function LayoutProvider({ children }: ChildrenType) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLElement>(null);
  const router = useRouter();

  const toggle = React.useCallback(() => {
    setOpen(!open);
  }, [open]);

  // set the html tag overflow to hidden when sidenav is open
  // close side navigation on mobile when route starts changing
  // it's triggered when viewport is less than 1024px
  React.useEffect(() => {
    if (open && window.innerWidth < 1024) {
      router.events.on('routeChangeStart', () => setOpen(false));
      document.documentElement.style.overflow = 'hidden';
    }

    return () => {
      if (open && window.innerWidth < 1024) {
        router.events.off('routeChangeStart', () => setOpen(false));
        document.documentElement.style.overflow = '';
      }
    };
  }, [open, router]);

  // close side navigation on click outside when viewport is less than 1024px
  React.useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (!ref.current?.contains(event.target)) {
        if (!open) return;
        setOpen(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [open, ref]);

  return (
    <Provider.Provider value={{ open, ref, toggle }}>
      {children}
    </Provider.Provider>
  );
}

// custom hook to consume all context values { open, ref, toggle }
export function useToggle() {
  return React.useContext(Provider);
}
