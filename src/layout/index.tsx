import Main from '@/src/layout/main';
import Header from '@/src/layout/header';
import Footer from '@/src/layout/footer';
import { ChildrenType } from '@/src/utils/childrenType';
import LayoutProvider from '@/src/layout/context';
import Sidenavigation from '@/src/layout/sidenavigation';
import Overlay from '@/src/components/overlay';

const Layout = ({ children }: ChildrenType) => (
  <LayoutProvider>
    <Header />
    <Overlay />
    <Sidenavigation />
    <Main>{children}</Main>
    <Footer />
  </LayoutProvider>
);

export default Layout;
