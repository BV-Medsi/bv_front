export type ThemeToggleProps = {
  theme: 'dark' | 'light';
};

export type ThemeToggleEmits = {
  (e: 'update:theme', value: ThemeToggleProps['theme']): void;
};
