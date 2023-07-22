import {
  NavigationBarDefaultProps,
  NavigationBarProps,
} from '../NavigationBar/NavigationBar.props';

export type NavigationBarMobileProps = NavigationBarProps & {
  navigationClass?: string | string[];

  opened?: boolean;
};

export type NavigationBarMobileEmits = {
  (e: 'update:opened', value: boolean): void;
};

export type NavigationBarMobileSlots = {};

export const NavigationBarMobileDefaultProps = NavigationBarDefaultProps;
