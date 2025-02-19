interface IIncrementAction {
	amount: number;
  counterId: string;
}

interface IDecrementAction {
	amount: number;
  counterId: string;
}

interface ISetStepAction {
	newStep: number;
  counterId: string;
}

interface ISetToGroupAction {
	newGroupId: string;
  counterId: string;
}

interface ISetNameAction {
	newName: string;
  counterId: string;
}

export {
	IIncrementAction,
	IDecrementAction,
	ISetStepAction,
	ISetToGroupAction,
	ISetNameAction
};
