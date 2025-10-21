import React from 'react';

export type ComponentPropsDefault = Record<string, unknown>;

export type ComponentType<
  TProps extends ComponentPropsDefault = ComponentPropsDefault,
> = React.ComponentType<TProps>;

export type ContextProps<
  TProps extends ComponentPropsDefault = ComponentPropsDefault,
> = {
  LinkComponent: ComponentType<TProps>;
};

export type ContextDefault = ContextProps<ComponentPropsDefault>;

export type GenericProps<
  T extends ComponentPropsDefault = ComponentPropsDefault,
> = T;
