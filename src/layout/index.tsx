import Main from '@/src/layout/main';
import Header from '@/src/layout/header';
import Footer from '@/src/layout/footer';
import { ChildrenType } from '@/src/utils/childrenType';

const Layout = ({ children }: ChildrenType) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

export default Layout;
