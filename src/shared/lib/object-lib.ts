const omitKey = <T extends object, K extends keyof T>(key: K, obj: T): Omit<T, K> => {
	const { [key]: _, ...rest } = obj;
	return rest;
};

export { omitKey };
