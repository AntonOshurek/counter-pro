interface ISwitcherProps<T> {
  value: T;
  onChange: (value: T) => void;
  isChecked: boolean;
  label: string;
}

export { ISwitcherProps };
