export type ToggleProps = {
  modelValue: boolean;

  size?: 'sm' | 'md' | 'lg';

  disabled?: boolean;

  id?: string;
};

export type ToggleEmits = {
  (e: 'update:modelValue', value: boolean): void;
};
