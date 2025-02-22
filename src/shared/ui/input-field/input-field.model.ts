interface InputFieldProps {
	label: string;
	value: string;
	onChange: (text: string) => void;
	inputType?: 'numeric' | 'default';
}

export { InputFieldProps };
