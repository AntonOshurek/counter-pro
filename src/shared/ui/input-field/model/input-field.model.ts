interface InputFieldProps {
	label: string;
	additionalLabel?: string;
	value: string;
	onChange: (text: string) => void;
	inputType?: 'numeric' | 'default';
}

export { InputFieldProps };
