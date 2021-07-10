import { ChildrenType } from '@/src/childrenType';

export default function Container({ children }: ChildrenType) {
  return <div className="px-3 lg:px-28">{children}</div>;
}
