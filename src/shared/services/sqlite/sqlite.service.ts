import { SQLiteDatabase } from 'expo-sqlite';

class SQLiteService {
	private db: SQLiteDatabase;

	constructor(db: SQLiteDatabase) {
		this.db = db;
	}

	/**
	 * Executes one or more SQL statements without parameters.
	 * Use this for schema setup (CREATE TABLE, PRAGMA, etc.) or batch scripts.
	 *
	 * ⚠️ Does not support parameter binding — avoid using for dynamic values.
	 *
	 * @param query - Raw SQL string (can contain multiple statements).
	 */
	async exec(query: string): Promise<void> {
		await this.db.execAsync(query);
	}

	/**
	 * Runs a single SQL statement with parameter binding.
	 * Best for INSERT, UPDATE, DELETE operations.
	 *
	 * ✅ Parameters are safely escaped.
	 *
	 * @param query - SQL query with placeholders (e.g., `?`)
	 * @param params - Values to be bound to the query placeholders
	 */
	async run(query: string, ...params: any[]): Promise<void> {
		await this.db.runAsync(query, ...params);
	}

	/**
	 * Executes a SELECT query and returns all matching rows.
	 * Use this to fetch multiple results from the database.
	 *
	 * @param query - SELECT query with placeholders
	 * @param params - Values to be bound to the query placeholders
	 * @returns An array of typed rows (T[])
	 */
	async getAll<T>(query: string, ...params: any[]): Promise<T[]> {
		return await this.db.getAllAsync<T>(query, ...params);
	}

	/**
	 * Executes a SELECT query and returns the first matching row.
	 * Use this when expecting only a single result.
	 *
	 * @param query - SELECT query with placeholders
	 * @param params - Values to be bound to the query placeholders
	 * @returns A single typed result (T) or null if no match
	 */
	async getFirst<T>(query: string, ...params: any[]): Promise<T | null> {
		return await this.db.getFirstAsync<T>(query, ...params);
	}
}

export default SQLiteService;
