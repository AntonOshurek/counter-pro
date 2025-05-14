import { Counter } from '../../model/counter.model';
import { SortOptions } from '@shared/constants/sort';
import { ICounterState } from '@entities/counter/store/model/counter-state.model';

interface IUpdateState {
	newState: ICounterState;
}

interface IIncrementAction {
	amount: number;
	counterId: string;
}

interface IDecrementAction {
	amount: number;
	counterId: string;
}

interface IResetAction {
	counterId: string;
}

interface ISetStepAction {
	newStep: number;
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

interface ISetListSortTypeAction {
	sortType: SortOptions;
}

interface ISetIsPinnedAction {
	isPinned: boolean;
	counterId: string;
}

interface IDeleteConnectionWithGroupAction {
	groupId: string;
	counterId: string;
}

interface IAddConnectionToGroupAction {
	groupId: string;
	counterId: string;
}

interface ISetVibrationOnCounterClick {
	vibration: boolean;
}

export {
	IIncrementAction,
	IDecrementAction,
	ISetStepAction,
	ISetNameAction,
	ICreateCounterAction,
	IDeleteCounterAction,
	IResetAction,
	ISetListSortTypeAction,
	ISetIsPinnedAction,
	IDeleteConnectionWithGroupAction,
	IAddConnectionToGroupAction,
	ISetVibrationOnCounterClick,
	IUpdateState
};
