//DB
import { SQLiteDatabase } from 'expo-sqlite';
//SERVICES
import groupSqliteService from '@entities/group/db/services/group-sqlite.service';
//TYPES
import type { RootState } from '@shared/store';
//MODEL
import type { Group } from '../../model/group.model';
//SQL COMMANDS
import { CREATE_GROUP_TABLE_SQL } from '../sql/group-commands.sql';

const initGroupTable = async (db: SQLiteDatabase) => {
	await db.execAsync(CREATE_GROUP_TABLE_SQL);
};

const updateOne = async (
	getState: () => RootState,
	groupId: string,
	db: SQLiteDatabase
) => {
	const state = getState();
	const group = state.group.groups[groupId];

	if (!group) return;
	await groupSqliteService.updateOne(db, group);
};

const insertOne = async (group: Group, db: SQLiteDatabase) => {
	if (!group) return;
	await groupSqliteService.insertOne(db, group);
};

const deleteOne = async (groupId: string, db: SQLiteDatabase) => {
	await groupSqliteService.deleteById(db, groupId);
};

export { initGroupTable, updateOne, insertOne, deleteOne };
