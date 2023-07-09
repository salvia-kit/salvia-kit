import Main from '@/layout/Main';
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import { Alert } from '@/components/Alert';
import Overlay from '@/components/Overlay';
import useMounted from '@/hooks/useMounted';
import LayoutProvider from '@/layout/Provider';
import { ChildrenType } from '@/utils/globalTypes';
import useMediaQueries from '@/hooks/useMediaQueries';
import { SideNavigation } from '@/layout/SideNavigation';

function Layout({ children }: ChildrenType) {
  const { isMediumOrSmallScreen } = useMediaQueries();
  const isMounted = useMounted();
  return (
    <LayoutProvider>
      {isMounted && <Alert />}
      <Header />
      <Overlay />
      {isMediumOrSmallScreen && <SideNavigation />}
      <Main>{children}</Main>
      <Footer />
    </LayoutProvider>
  );
}

export default Layout;
