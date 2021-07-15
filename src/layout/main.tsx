import React from 'react';
import { ChildrenType } from '@/src/utils/globalTypes';

function Main({ children }: ChildrenType) {
  return <main>{children}</main>;
}

export default React.memo(Main);
