import { createContext } from 'react';

export type LinkContextValue = {
  LinkComponent: React.ComponentType<{ to: string; children: React.ReactNode }>;
};

const LinkContext = createContext<LinkContextValue | undefined>(undefined);

export default LinkContext;
