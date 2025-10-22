import React from 'react';

import type { LinkContextValue } from '../types';

const LinkContext = React.createContext<LinkContextValue | undefined>(
  undefined
);

export default LinkContext;
