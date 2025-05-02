import type { SQLiteDatabase } from 'expo-sqlite';

abstract class SqliteService<T> {
  protected tableName: string;

  constructor(tableName: string) {
    this.tableName = tableName;
  }

  abstract getAll(db: SQLiteDatabase): Promise<Record<string, T>>;

  abstract insertOne(db: SQLiteDatabase, item: T): Promise<void>;

  abstract deleteById(db: SQLiteDatabase, id: string): Promise<void>;

  abstract updateOne(db: SQLiteDatabase, item: T): Promise<void>;
}

export default SqliteService;
