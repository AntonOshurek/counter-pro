//CONSTANTS
import { GROUP_SQL_TABLE_NAME } from '@shared/constants';

const CREATE_GROUP_TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS ${GROUP_SQL_TABLE_NAME} (
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    counters TEXT NOT NULL,
    is_pinned INTEGER NOT NULL,
    created_at TEXT NOT NULL,
    created_at_timestamp INTEGER NOT NULL
  );
`;

const SELECT_ALL_GROUPS_QUERY = `SELECT * FROM ${GROUP_SQL_TABLE_NAME}`;

const INSERT_GROUP_QUERY = `
  INSERT INTO ${GROUP_SQL_TABLE_NAME} (
    id, name, counters, is_pinned, created_at, created_at_timestamp
  ) VALUES (?, ?, ?, ?, ?, ?)`;

const DELETE_GROUP_BY_ID_QUERY = `DELETE FROM ${GROUP_SQL_TABLE_NAME} WHERE id = ?`;

const UPDATE_GROUP_QUERY = `
  UPDATE ${GROUP_SQL_TABLE_NAME} SET
    name = ?,
    counters = ?,
    is_pinned = ?,
    created_at = ?,
    created_at_timestamp = ?
  WHERE id = ?`;

export {
  CREATE_GROUP_TABLE_SQL,
  SELECT_ALL_GROUPS_QUERY,
  INSERT_GROUP_QUERY,
  DELETE_GROUP_BY_ID_QUERY,
  UPDATE_GROUP_QUERY
}
