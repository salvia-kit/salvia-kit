import { useToggle } from '@/layout/Provider';

const style = {
  open: `bg-black fixed h-screen left-0 opacity-40 top-0 w-screen z-30 lg:hidden`,
};

// The overlay will only be visible on small screens to emphasize the focus on the side navigation when it is open.
export default function Overlay() {
  const { open } = useToggle();
  return <div className={open ? style.open : ''} />;
}
