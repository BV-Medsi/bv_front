import { VNode } from 'vue';

export type RotatableListProps<T> = {
  /**
   * Активный элемент в списке
   */
  modelValue: number;

  /**
   * Элементы списка
   */
  items?: ReadonlyArray<T>;

  /**
   * Ширина списка
   */
  width: number;

  /**
   * Высота списка
   */
  height: number;
};

export type RotatableListSlots<T> = {
  default: (props: { item: T; isActive: boolean }) => ReadonlyArray<VNode>;
};

export const RotatableListDefaultProps = {
  items: () => [],
} as const;
