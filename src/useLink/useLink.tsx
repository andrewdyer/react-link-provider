import { useContext } from 'react';
import type * as React from 'react';

import { LinkContext } from '../LinkContext';

const useLink = (): React.ComponentType<
  // Link components accept arbitrary router-specific props, so `any` is intentional.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { to: string } & Record<string, any>
> => {
  const context = useContext(LinkContext);

  if (context) return context.LinkComponent;

  return ({
    to,
    children,
    ...props
  }: {
    to: string;
    children?: React.ReactNode;
  }) => (
    <a {...props} href={to}>
      {children}
    </a>
  );
};

export default useLink;
