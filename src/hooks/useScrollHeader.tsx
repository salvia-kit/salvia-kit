import React from 'react';

/*==== CHANGE HEADER BACKGROUND ====*/
// When the scroll is greater than 100px of viewport height, add new classes to the header tag

const classNames = [
  'shadow',
  'bg-light',
  'text-custom',
  'dark:bg-dark',
  'dark:text-white',
];

const classText = ['text-white'];

export default function useScrollHeader() {
  const headerRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const scrollHeader = () => {
      if (window.scrollY < 100) {
        headerRef.current?.classList.add(...classText);
        headerRef.current?.classList.remove(...classNames);
        return;
      }

      if (window.scrollY > 100) {
        headerRef.current?.classList.add(...classNames);
        headerRef.current?.classList.remove(...classText);
      }
    };

    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, [headerRef]);

  return { headerRef };
}
