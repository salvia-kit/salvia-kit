import Main from '@/src/layout/main';
import Header from '@/src/layout/header';
import { ChildrenType } from '@/src/childrenType';

export default function Layout({ children }: ChildrenType) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
