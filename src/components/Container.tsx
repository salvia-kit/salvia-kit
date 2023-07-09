import { ChildrenType } from '@/utils/globalTypes';

export default function Container({ children }: ChildrenType) {
  return (
    <div className="px-3 2xl:px-40 md:px-4 lg:px-24 xl:px-28">{children}</div>
  );
}
