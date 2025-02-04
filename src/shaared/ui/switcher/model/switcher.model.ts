interface ISwitcherProps<T> {
  value: T;
  onChange: (value: T) => void;
  isChecked: boolean;
  placeholder: string;
}

export { ISwitcherProps };
