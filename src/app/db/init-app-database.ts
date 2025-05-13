// DB
import { SQLiteDatabase } from 'expo-sqlite';
//ENTITIES
import { initCounterTableAction } from '@entities/counter';
// import { initGroupTable } from '@entities/group';

const initAppDatabase = async (db: SQLiteDatabase) => {
	await db.execAsync(`PRAGMA journal_mode = WAL;`);

	await initCounterTableAction(db);
	// await initGroupTable(db);
};

export { initAppDatabase };
