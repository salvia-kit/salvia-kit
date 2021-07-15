import Main from '@/src/layout/main';
import Header from '@/src/layout/header';
import Footer from '@/src/layout/footer';
import Overlay from '@/src/components/overlay';
import LayoutProvider from '@/src/layout/context';
import { ChildrenType } from '@/src/utils/globalTypes';
import Sidenavigation from '@/src/layout/sidenavigation';

function Layout({ children }: ChildrenType) {
  return (
    <LayoutProvider>
      <Header />
      <Overlay />
      <Sidenavigation />
      <Main>{children}</Main>
      <Footer />
    </LayoutProvider>
  );
}

export default Layout;
