const CREATE_COUNTER_TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS counters (
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

export { CREATE_COUNTER_TABLE_SQL }
