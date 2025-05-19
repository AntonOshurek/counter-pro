interface DeleteGroupButtonProps {
	groupId: string;
  counterToGroupConnection: () => {
    addGroupToCounter: (counterId: string, groupId: string) => void;
    deleteGroupFromCounter: (counterId: string, groupId: string) => void;
  };
}

export { DeleteGroupButtonProps };
