import Main from '@/layout/main';
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import Overlay from '@/components/overlay';
import LayoutProvider from '@/layout/context';
import { ChildrenType } from '@/utils/globalTypes';
import Sidenavigation from '@/layout/sidenavigation';
import useMediaQueries from '@/hooks/useMediaQueries';
import Alert from '@/components/alert';
import useMounted from '@/hooks/useMounted';

function Layout({ children }: ChildrenType) {
  const { isMediumOrSmallScreen } = useMediaQueries();
  const isMounted = useMounted();
  return (
    <LayoutProvider>
      {isMounted && <Alert />}
      <Header />
      <Overlay />
      {isMediumOrSmallScreen && <Sidenavigation />}
      <Main>{children}</Main>
      <Footer />
    </LayoutProvider>
  );
}

export default Layout;
