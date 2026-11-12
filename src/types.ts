import type * as React from 'react';

// Link components accept arbitrary router-specific props, so `any` is intentional.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LinkComponent = React.ComponentType<any>;
