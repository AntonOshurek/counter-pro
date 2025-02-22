import { Counter } from '../../model/counter.model';

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

interface ICreateCounterAction {
	newCounter: Counter;
}

interface IDeleteCounterAction {
	counterId: string;
}

export {
	IIncrementAction,
	IDecrementAction,
	ISetStepAction,
	ISetToGroupAction,
	ISetNameAction,
	ICreateCounterAction,
	IDeleteCounterAction
};
