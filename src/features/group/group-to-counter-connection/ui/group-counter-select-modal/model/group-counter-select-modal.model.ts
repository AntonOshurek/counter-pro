interface GroupCounterSelectModalProps {
	groupId: string;
	useCounterConnection: (args: { counterId: string }) => {
		addConnection: (groupId: string) => void;
		deleteConnection: (groupId: string) => void;
	};
	counters: { counterName: string; counterId: string }[];
}

export { GroupCounterSelectModalProps };
