import React, { type ComponentType } from 'react';

import { LinkContext } from '../LinkContext';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useLink = (): ComponentType<{ to: string } & Record<string, any>> => {
  const context = React.useContext(LinkContext);

  if (context) return context.LinkComponent;

  return ({ to, ...props }: { to: string }) => <a {...props} href={to} />;
};

export default useLink;
