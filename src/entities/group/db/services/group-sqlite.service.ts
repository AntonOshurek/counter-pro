//DB
import { SQLiteDatabase } from 'expo-sqlite';
//MODEL
import type { Group } from '../../model/group.model';
//SERVICES
import SqliteService from '@shared/services/abstract/sqlite.service';
//SQL
import {
  SELECT_ALL_GROUPS_QUERY,
  INSERT_GROUP_QUERY,
  DELETE_GROUP_BY_ID_QUERY,
  UPDATE_GROUP_QUERY
} from '../sql/group-commands.sql';
//CONSTANTS
import { GROUP_SQL_TABLE_NAME } from '@shared/constants';

export class GroupSqliteService extends SqliteService<Group> {
	constructor() {
		super(GROUP_SQL_TABLE_NAME);
	}

	private mapDbRowToGroup(row: any): Group {
		return {
      id: row.id,
      name: row.name,
      counters: JSON.parse(row.counters),
      isPinned: Boolean(row.is_pinned),
      createdAt: row.created_at,
      createdAtTimestamp: row.created_at_timestamp
		};
	}

	async getAll(db: SQLiteDatabase): Promise<Record<string, Group>> {
		const rows = await db.getAllAsync<Group>(SELECT_ALL_GROUPS_QUERY);
		return Object.fromEntries(rows.map(item => [item.id, this.mapDbRowToGroup(item)]));
	}

	async insertOne(db: SQLiteDatabase, group: Group): Promise<void> {
		await db.runAsync(
      INSERT_GROUP_QUERY,
      group.id,
      group.name,
      JSON.stringify(group.counters),
      group.isPinned ? 1 : 0,
      group.createdAt,
      group.createdAtTimestamp
		);
	}

	async deleteById(db: SQLiteDatabase, id: string): Promise<void> {
		await db.runAsync(DELETE_GROUP_BY_ID_QUERY, id);
	}

	async updateOne(db: SQLiteDatabase, group: Group): Promise<void> {
		await db.runAsync(
      UPDATE_GROUP_QUERY,
      group.name,
      JSON.stringify(group.counters),
      group.isPinned ? 1 : 0,
      group.createdAt,
      group.createdAtTimestamp,
      group.id
		);
	}
}

const groupSqliteService = new GroupSqliteService();

export default groupSqliteService;
