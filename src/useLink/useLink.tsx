import React from 'react';

import { LinkContext } from '../LinkContext';
import type { LinkComponent } from '../types';

const useLink = (): LinkComponent => {
  const context = React.useContext(LinkContext);

  if (context) return context.LinkComponent;

  return ({ to, ...props }: { to?: string; [key: string]: unknown }) => (
    <a {...props} href={to} />
  );
};

export default useLink;
