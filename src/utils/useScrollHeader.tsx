import React from 'react';
import { useRouter } from 'next/router';

/*==================== CHANGE HEADER BACKGROUND====================*/
// When the scroll is greater than 100px of viewport height, add new classes to the header tag

export default function useScrollHeader() {
  const headerRef = React.useRef<HTMLElement>(null);
  const { asPath } = useRouter();

  React.useEffect(() => {
    const scrollHeader = () => {
      if (asPath === '/') {
        if (window.scrollY >= 100) {
          headerRef.current?.classList.add(
            'bg-body',
            'text-custom',
            'shadow',
            'dark:bg-body-dark',
            'dark:text-white',
          );
        } else {
          headerRef.current?.classList.remove(
            'bg-body',
            'text-custom',
            'shadow',
            'dark:bg-body-dark',
            'dark:text-white',
          );
        }
      }
    };
    window.addEventListener('scroll', scrollHeader);

    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, [asPath, headerRef]);

  return { headerRef };
}
