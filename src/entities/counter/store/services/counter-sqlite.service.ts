//DB
import { SQLiteDatabase } from 'expo-sqlite';
//MODEL
import type { Counter } from '../../model/counter.model';
//SERVICES
import SqliteService from '@shared/services/abstract/sqlite.service';
//SQL
import {
	DELETE_COUNTER_BY_ID_QUERY,
	INSERT_COUNTER_QUERY,
	SELECT_ALL_COUNTERS_QUERY,
	UPDATE_COUNTER_QUERY
} from '../../db/sql/counter-commands.sql';
//CONSTANTS
import { COUNTER_SQL_TABLE_NAME } from '@shared/constants';

export class CounterSqliteService extends SqliteService<Counter> {
	constructor() {
		super(COUNTER_SQL_TABLE_NAME);
	}

	async getAll(db: SQLiteDatabase): Promise<Record<string, Counter>> {
		const rows = await db.getAllAsync<Counter>(SELECT_ALL_COUNTERS_QUERY);
		return Object.fromEntries(rows.map(item => [item.id, item]));
	}

	async insertOne(db: SQLiteDatabase, counter: Counter): Promise<void> {
		await db.runAsync(
			INSERT_COUNTER_QUERY,
			counter.id,
			counter.name,
			counter.step,
			counter.count,
			counter.group,
			counter.createdAt,
			counter.isPinned ? 1 : 0,
			counter.createdAtTimestamp
		);
	}

	async deleteById(db: SQLiteDatabase, id: string): Promise<void> {
		await db.runAsync(DELETE_COUNTER_BY_ID_QUERY, id);
	}

	async updateOne(db: SQLiteDatabase, counter: Counter): Promise<void> {
		await db.runAsync(
			UPDATE_COUNTER_QUERY,
			counter.name,
			counter.step,
			counter.count,
			counter.group,
			counter.createdAt,
			counter.isPinned ? 1 : 0,
			counter.createdAtTimestamp,
			counter.id
		);
	}
}

const counterSqliteService = new CounterSqliteService();

export default counterSqliteService;
