const truncateWithEllipsis = (inputString: string, maxLength: number): string => {
	return inputString.length > maxLength
		? inputString.substring(0, maxLength) + '...'
		: inputString;
};

export { truncateWithEllipsis };
