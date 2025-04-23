//DB
import { SQLiteDatabase } from 'expo-sqlite';
import { CREATE_GROUP_TABLE_SQL } from './sql/group-commands.sql';

const initGroupTable = async (db: SQLiteDatabase) => {
	await db.execAsync(CREATE_GROUP_TABLE_SQL);
};

export { initGroupTable };
