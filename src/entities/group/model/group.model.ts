interface Group {
	id: string;
	name: string;
	counters: string[];
	isPinned: boolean;
	createdAt: string;
	createdAtTimestamp: number;
}

export { Group };
