const CREATE_GROUP_TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS groups (
  id TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  counters TEXT NOT NULL, -- as json
  is_pinned INTEGER NOT NULL,
  created_at TEXT NOT NULL,
  created_at_timestamp INTEGER NOT NULL
  );
`;

export { CREATE_GROUP_TABLE_SQL }
