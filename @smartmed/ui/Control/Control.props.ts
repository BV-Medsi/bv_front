import { ControlType } from '@smartmed/ui/form';
import { UnwrapRef, VNode } from 'vue';

export type ControlProps<T> = {
  control: ControlType<T>;

  showErrors?: boolean;

  validationErrors?: Record<string, string> | null;
};

export type ControlSlots<T> = {
  default: (props: {
    invalid: boolean;
    model: {
      value: UnwrapRef<T>;
    };
    disabled: boolean;
    valid: boolean;
  }) => ReadonlyArray<VNode>;
};

export const ControlDefaultProps = {
  showErrors: true,
  validationErrors: null,
} as const;
