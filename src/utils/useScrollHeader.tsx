import React from 'react';
import { useRouter } from 'next/router';

/*==== CHANGE HEADER BACKGROUND ====*/
// When the scroll is greater than 100px of viewport height, add new classes to the header tag

const classNames = [
  'bg-body',
  'shadow',
  'text-custom',
  'dark:bg-body-dark',
  'dark:text-white',
];

export default function useScrollHeader() {
  const headerRef = React.useRef<HTMLElement>(null);
  const { asPath } = useRouter();

  React.useEffect(() => {
    const scrollHeader = () => {
      if (asPath === '/') {
        if (window.scrollY >= 100) {
          return headerRef.current?.classList.add(...classNames);
        }
        return headerRef.current?.classList.remove(...classNames);
      }
    };

    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, [asPath, headerRef]);

  return { headerRef };
}
