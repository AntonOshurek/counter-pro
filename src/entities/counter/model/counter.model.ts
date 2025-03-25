interface Counter {
	id: string;
	name: string;
	step: number;
	count: number;
	group: string;
	createdAt: string;
	isPinned: boolean;
	createdAtTimestamp: number;
}

export { Counter };
