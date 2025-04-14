interface checkboxModalItems {
	id: string;
	label: string;
	isSelected: boolean;
}

interface CheckboxModalProps {
	visible: boolean;
	title: string;
	items: checkboxModalItems[];
	onToggle: (id: string, newIsSelectedValue: boolean) => void;
	onClose: () => void;
	itemsIsEmptyText?: string;
}

export { CheckboxModalProps, checkboxModalItems };
