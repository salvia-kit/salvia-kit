import Main from '@/src/layout/main';
import Header from '@/src/layout/header';
import { ChildrenType } from '@/src/utils/childrenType';

const Layout = ({ children }: ChildrenType) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
);

export default Layout;
