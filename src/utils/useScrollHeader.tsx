import React from 'react';
import { useRouter } from 'next/router';

/*==== CHANGE HEADER BACKGROUND ====*/
// When the scroll is greater than 100px of viewport height, add new classes to the header tag

const homePageClassNames = [
  'shadow',
  'bg-light',
  'text-custom',
  'dark:bg-dark',
  'dark:text-white',
];

const notHomePageClassNames = ['shadow', 'bg-light', 'dark:bg-dark'];

export default function useScrollHeader() {
  const headerRef = React.useRef<HTMLElement>(null);
  const { asPath } = useRouter();

  React.useEffect(() => {
    const scrollHeader = () => {
      if (asPath === '/') {
        if (window.scrollY >= 100) {
          return headerRef.current?.classList.add(...homePageClassNames);
        }
        return headerRef.current?.classList.remove(...homePageClassNames);
      }
      if (asPath !== '/') {
        if (window.scrollY >= 0) {
          return headerRef.current?.classList.add(...notHomePageClassNames);
        }
        return headerRef.current?.classList.remove(...notHomePageClassNames);
      }
    };

    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, [asPath, headerRef]);

  return { headerRef };
}
