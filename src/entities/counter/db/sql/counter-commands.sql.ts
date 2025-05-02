//CONSTANTS
import { COUNTER_SQL_TABLE_NAME } from '@shared/constants';

const CREATE_COUNTER_TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS ${COUNTER_SQL_TABLE_NAME} (
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    step INTEGER NOT NULL,
    count INTEGER NOT NULL,
    group_name TEXT NOT NULL,
    created_at TEXT NOT NULL,
    is_pinned INTEGER NOT NULL,
    created_at_timestamp INTEGER NOT NULL
  );
`;

const SELECT_ALL_COUNTERS_QUERY = `SELECT * FROM ${COUNTER_SQL_TABLE_NAME}`;

const INSERT_COUNTER_QUERY = `
  INSERT INTO ${COUNTER_SQL_TABLE_NAME} (
    id, name, step, count, group_name, created_at, is_pinned, created_at_timestamp
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

const DELETE_COUNTER_BY_ID_QUERY = `DELETE FROM ${COUNTER_SQL_TABLE_NAME} WHERE id = ?`;

const UPDATE_COUNTER_QUERY = `
  UPDATE ${COUNTER_SQL_TABLE_NAME} SET
    name = ?,
    step = ?,
    count = ?,
    group_name = ?,
    created_at = ?,
    is_pinned = ?,
    created_at_timestamp = ?
  WHERE id = ?`;

export {
  CREATE_COUNTER_TABLE_SQL,
  SELECT_ALL_COUNTERS_QUERY,
  INSERT_COUNTER_QUERY,
  DELETE_COUNTER_BY_ID_QUERY,
  UPDATE_COUNTER_QUERY
};
