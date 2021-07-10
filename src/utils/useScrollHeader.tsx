import React from 'react';

/*==================== CHANGE BACKGROUND HEADER ====================*/
// When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag

export default function useScrollHeader() {
  const headerRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const scrollHeader = () => {
      if (window.scrollY >= 100) {
        headerRef.current?.classList.add('bg-white', 'text-gray-700', 'shadow');
      } else {
        headerRef.current?.classList.remove(
          'bg-white',
          'text-gray-700',
          'shadow',
        );
      }
    };
    window.addEventListener('scroll', scrollHeader);

    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);

  return { headerRef };
}
