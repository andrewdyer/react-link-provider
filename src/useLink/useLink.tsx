import React, { type ComponentType } from 'react';

import { LinkContext } from '../LinkContext';

const useLink = (): ComponentType<{
  to: string;
  children: React.ReactNode;
}> => {
  const context = React.useContext(LinkContext);

  if (context) return context.LinkComponent;

  return ({ to, ...props }: { to: string; children: React.ReactNode }) => (
    <a {...props} href={to} />
  );
};

export default useLink;
