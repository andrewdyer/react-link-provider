import { createContext } from 'react';
import type * as React from 'react';

export type LinkContextValue = {
  // Link components accept arbitrary router-specific props, so `any` is intentional.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  LinkComponent: React.ComponentType<any>;
};

const LinkContext: React.Context<LinkContextValue | undefined> = createContext<
  LinkContextValue | undefined
>(undefined);

export default LinkContext;
