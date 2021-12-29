import useMounted from '@/hooks/useMounted';

function useMediaQueries() {
  const isMounted = useMounted();

  return {
    isMediumOrSmallScreen: isMounted && window.innerWidth < 1024,
  };
}

export default useMediaQueries;
