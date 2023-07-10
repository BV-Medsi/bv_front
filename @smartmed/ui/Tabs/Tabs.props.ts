import { VNode } from 'vue';

export type TabsProps<T, U> = {
  modelValue?: T;

  asRouter?: boolean;

  routeExactMatch?: boolean;

  // Для modelValue или tabs как объекты
  compare?: (modelValue: T, item: U) => boolean;

  // Для табов как объекты
  tabKey?: keyof U & keyof T;

  tabs?: ReadonlyArray<U>;

  type?: 'boxed' | 'underline';

  wide?: boolean;

  size?: 'sm' | 'md';

  underlineInactiveBorder?: boolean;
};

export type TabsSlots<T> = {
  default: (props: { tab: T; active: boolean }) => ReadonlyArray<VNode>;
};

export type TabsEmits<T> = {
  (e: 'update:modelValue', value: T): void;
};

export const TabsDefaultProps = {
  modelValue: null,
  type: 'boxed',
  size: 'md',
  wide: false,
  tabs: () => [],
  tabKey: 'id',
  underlineInactiveBorder: true,
} as const;
