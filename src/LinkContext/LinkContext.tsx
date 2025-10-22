import { createContext } from 'react';

export type LinkContextValue = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  LinkComponent: React.ComponentType<any>;
};

const LinkContext = createContext<LinkContextValue | undefined>(undefined);

export default LinkContext;
