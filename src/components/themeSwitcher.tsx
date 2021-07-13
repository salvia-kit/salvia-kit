import { useTheme } from 'next-themes';
import useMounted from '@/src/utils/useMounted';
import SunIcon from '@/src/components/icons/sun';
import MoonIcon from '@/src/components/icons/moon';

interface IThemeSwitcherProps {
  iconClass?: string;
  text?: string;
}

interface UseThemeProps {
  theme?: string;
  setTheme?: (theme: string) => void;
}

export default function ThemeSwitcher({
  iconClass,
  text,
}: IThemeSwitcherProps) {
  const { theme, setTheme }: UseThemeProps = useTheme();
  const isMounted = useMounted();

  const setDarkTheme = () => {
    setTheme('dark');
  };

  const setLightTheme = () => {
    setTheme('light');
  };

  return (
    <>
      {isMounted && theme === 'light' && (
        <button onClick={setDarkTheme} className="flex">
          <MoonIcon /> <span className="pl-2">Dark</span>
        </button>
      )}
      {isMounted && theme === 'dark' && (
        <button onClick={setLightTheme} className="flex">
          <SunIcon /> <span className="pl-2">Light</span>
        </button>
      )}
    </>
  );
}
