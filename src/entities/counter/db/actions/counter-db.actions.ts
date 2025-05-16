//DB
import { SQLiteDatabase } from 'expo-sqlite';
//SERVICES
import counterSqliteService from '@entities/counter/store/services/counter-sqlite.service';
//TYPES
import type { RootState } from '@shared/store';
//MODEL
import type { Counter } from '../../model/counter.model';
//SQL COMMANDS
import { CREATE_COUNTER_TABLE_SQL } from '../sql/counter-commands.sql';

const initCounterTableAction = async (db: SQLiteDatabase) => {
	await db.execAsync(CREATE_COUNTER_TABLE_SQL);
};

const updateOne = async (
	getState: () => RootState,
	counterId: string,
	db: SQLiteDatabase
) => {
	const state = getState();
	const counter = state.counter.counters[counterId];

	if (!counter) return;
	await counterSqliteService.updateOne(db, counter);
};

const insertOne = async (counter: Counter, db: SQLiteDatabase) => {
	if (!counter) return;
	await counterSqliteService.insertOne(db, counter);
};

const deleteOne = async (counterId: string, db: SQLiteDatabase) => {
	await counterSqliteService.deleteById(db, counterId);
};

export { insertOne, updateOne, deleteOne, initCounterTableAction };
