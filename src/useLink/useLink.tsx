import React from 'react';

import { LinkContext } from '../LinkContext';
import type { ComponentPropsDefault, ComponentType } from '../types';

const useLink = <
  TProps extends ComponentPropsDefault = ComponentPropsDefault,
>(): ComponentType<TProps> => {
  const context = React.useContext(LinkContext);

  if (context) return context.LinkComponent as ComponentType<TProps>;

  return (({ to, ...props }: { to?: string } & ComponentPropsDefault) => (
    <a {...props} href={to} />
  )) as unknown as ComponentType<TProps>;
};

export default useLink;
