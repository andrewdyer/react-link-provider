import React from 'react';

import { LinkContext } from '../LinkContext';
import type {
  ComponentPropsDefault,
  ComponentType,
  ContextDefault,
  ContextProps,
  GenericProps,
} from '../types';

export type LinkProviderProps<T extends GenericProps = ComponentPropsDefault> = {
  LinkComponent: ComponentType<T>;
  children: React.ReactNode;
};

const LinkProvider = <T extends GenericProps = ComponentPropsDefault>({
  LinkComponent,
  children,
}: LinkProviderProps<T>) => {
  const value = React.useMemo<ContextProps<T>>(
    () => ({ LinkComponent }),
    [LinkComponent]
  );

  return (
    <LinkContext.Provider value={value as ContextDefault}>
      {children}
    </LinkContext.Provider>
  );
};

export default LinkProvider;
