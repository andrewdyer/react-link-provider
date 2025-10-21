import React from 'react';

import type { ContextDefault } from '../types';

const LinkContext = React.createContext<ContextDefault | undefined>(undefined);

export default LinkContext;
