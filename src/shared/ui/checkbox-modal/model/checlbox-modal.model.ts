interface checkboxModalItems {
	id: string;
	label: string;
	isSelected: boolean;
}

interface CheckboxModalProps {
	visible: boolean;
	title?: string;
	items: checkboxModalItems[];
	onToggle: (id: string) => void;
	onClose: () => void;
}

export { CheckboxModalProps, checkboxModalItems };
