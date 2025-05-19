interface UseDeleteCounterProps {
	counterId: string;
	groupToCounterConnection: () => {
		addCounterToGroup: (counterId: string, groupId: string) => void;
		deleteCounterFromGroup: (counterId: string, groupId: string) => void;
	};
}

export { UseDeleteCounterProps };
