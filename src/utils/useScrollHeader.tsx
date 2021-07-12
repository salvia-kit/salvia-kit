import React from 'react';

/*==================== CHANGE HEADER BACKGROUND====================*/
// When the scroll is greater than 100px of viewport height, add new classes to the header tag

export default function useScrollHeader() {
  const headerRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const scrollHeader = () => {
      if (window.scrollY >= 100) {
        headerRef.current?.classList.add('bg-white', 'text-custom', 'shadow');
      } else {
        headerRef.current?.classList.remove(
          'bg-white',
          'text-custom',
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
