//DB
import { SQLiteDatabase } from 'expo-sqlite';
import { CREATE_COUNTER_TABLE_SQL } from '@entities/counter/db/sql/create-counter-table.sql';

const initCounterTable = async (db: SQLiteDatabase) => {
	await db.execAsync(CREATE_COUNTER_TABLE_SQL);
};

export { initCounterTable };
