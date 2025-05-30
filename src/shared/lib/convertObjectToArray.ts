const convertObjectToArray = <T>(obj: Record<string, T>): T[] => {
	return Object.values(obj);
};

export { convertObjectToArray };
