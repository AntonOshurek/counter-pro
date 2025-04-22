//DB
import { SQLiteDatabase } from 'expo-sqlite';
import { initCounterTable } from '@entities/counter';
// import { initGroupTable } from '@/entities/group/lib/initGroupTable';

const initAppDatabase = async (db: SQLiteDatabase) => {
	await db.execAsync(`PRAGMA journal_mode = WAL;`);

	await initCounterTable(db);
	// await initGroupTable(db);

	console.log('[SQLite] Database initialized');
};

export { initAppDatabase };
