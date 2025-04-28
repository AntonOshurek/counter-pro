import SQLiteService from '../sqlite/sqlite.service';

abstract class SQLiteRepository<T> {
	protected sqliteService: SQLiteService;
	protected tableName: string;

	constructor(sqliteService: SQLiteService, tableName: string) {
		this.sqliteService = sqliteService;
		this.tableName = tableName;
	}

	abstract getAll(): Promise<Record<string, T>>;

	abstract insertOne(item: T): Promise<void>;

	abstract deleteById(id: string): Promise<void>;

	abstract updateOne(item: T): Promise<void>;
}

export default SQLiteRepository;
