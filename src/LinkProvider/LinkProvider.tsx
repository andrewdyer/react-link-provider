import { type ReactNode, useMemo } from 'react';

import { LinkContext } from '../LinkContext';
import type { LinkComponent } from '../types';

export type LinkProviderProps = {
  LinkComponent: LinkComponent;
  children: ReactNode;
};

const LinkProvider = ({ LinkComponent, children }: LinkProviderProps) => {
  const value = useMemo(() => ({ LinkComponent }), [LinkComponent]);

  return <LinkContext.Provider value={value}>{children}</LinkContext.Provider>;
};

export default LinkProvider;
