// DB
import { SQLiteDatabase } from 'expo-sqlite';
//ENTITIES
import { initCounterTable } from '@entities/counter';
// import { initGroupTable } from '@entities/group';

const initAppDatabase = async (db: SQLiteDatabase) => {
	await db.execAsync(`PRAGMA journal_mode = WAL;`);

	await initCounterTable(db);
	// await initGroupTable(db);
};

export { initAppDatabase };
