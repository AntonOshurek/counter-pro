//DB
import { SQLiteDatabase } from 'expo-sqlite';
import { CREATE_COUNTER_TABLE_SQL } from './sql/counter-commands.sql';

const initCounterTable = async (db: SQLiteDatabase) => {
	await db.execAsync(CREATE_COUNTER_TABLE_SQL);
};

export { initCounterTable };
