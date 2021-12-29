import Main from '@/layout/main';
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import Overlay from '@/components/overlay';
import LayoutProvider from '@/layout/context';
import { ChildrenType } from '@/utils/globalTypes';
import Sidenavigation from '@/layout/sidenavigation';
import useMediaQueries from '@/hooks/useMediaQueries';

function Layout({ children }: ChildrenType) {
  const { isMediumOrSmallScreen } = useMediaQueries();
  return (
    <LayoutProvider>
      <Header />
      <Overlay />
      {isMediumOrSmallScreen && <Sidenavigation />}
      <Main>{children}</Main>
      <Footer />
    </LayoutProvider>
  );
}

export default Layout;
