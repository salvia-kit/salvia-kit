import React from 'react';
import { useTheme } from 'next-themes';
import useMounted from '@/src/hooks/useMounted';
import SunIcon from '@/src/components/icons/sun';
import MoonIcon from '@/src/components/icons/moon';

interface UseThemeProps {
  theme?: string;
  setTheme?: (theme: string) => void;
}

export default function ThemeSwitcher() {
  const { theme, setTheme }: UseThemeProps = useTheme();
  const isMounted = useMounted();

  const toggleTheme = React.useCallback(() => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }, [setTheme, theme]);

  return (
    <>
      {isMounted && theme === 'light' ? (
        <button onClick={toggleTheme} className="flex">
          <MoonIcon className="w-5 h-5 md:w-6 md:h-6" />
          <span className="pl-2">Dark</span>
        </button>
      ) : (
        <button onClick={toggleTheme} className="flex">
          <SunIcon className="w-5 h-5 md:w-6 md:h-6" />
          <span className="pl-2">Light</span>
        </button>
      )}
    </>
  );
}
