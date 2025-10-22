import React from 'react';

import { LinkContext } from '../LinkContext';
import type { LinkComponent, LinkContextValue } from '../types';

export type LinkProviderProps = {
  LinkComponent: LinkComponent;
  children: React.ReactNode;
};

const LinkProvider = ({ LinkComponent, children }: LinkProviderProps) => {
  const value = React.useMemo<LinkContextValue>(
    () => ({ LinkComponent }),
    [LinkComponent]
  );

  return <LinkContext.Provider value={value}>{children}</LinkContext.Provider>;
};

export default LinkProvider;
