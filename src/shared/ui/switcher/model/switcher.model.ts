interface SwitcherProps<T> {
  value: T;
  onChange: (value: T) => void;
  isChecked: boolean;
  label: string;
}

export { SwitcherProps };
