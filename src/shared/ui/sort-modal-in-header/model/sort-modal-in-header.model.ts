interface SortModalInHeaderProps<T> {
	options: T[];
	currentOption: T;
  onOptionListener: (option: T) => void;
}

export { SortModalInHeaderProps };
