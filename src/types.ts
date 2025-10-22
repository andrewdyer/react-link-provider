import React from 'react';

export type LinkComponent = React.ComponentType<Record<string, unknown>>;

export type LinkContextValue = {
  LinkComponent: LinkComponent;
};

export type ComponentPropsDefault = Record<string, unknown>;

export type AnyLinkComponent = LinkComponent;
