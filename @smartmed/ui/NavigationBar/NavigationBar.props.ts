import { Component, VNode } from 'vue';
import { RouteLocationRaw } from 'vue-router';

export type _NavigationChildren = {
  title: string;
  disabled?: boolean | string;
} & (
  | {
      to: RouteLocationRaw;
    }
  | {
      children: {
        title: string;
        disabled?: boolean | string;
        to: RouteLocationRaw;
      }[];
    }
);

type NavigationSection = {
  title: string;

  disabled?: boolean | string;

  icon?: string | Component;
} & (
  | {
      to: RouteLocationRaw;
    }
  | {
      children: _NavigationChildren[];
    }
);

export type NavigationBarProps = {
  sections: NavigationSection[];

  autofocusOnSearch?: boolean;
};

export type NavigationBarSlots = {
  header?: (props: {}) => ReadonlyArray<VNode>;

  footer?: (props: {}) => ReadonlyArray<VNode>;
};

export const NavigationBarDefaultProps = {} as const;
