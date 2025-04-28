//MODEL
import type { Counter } from '../../model/counter.model';
//SERVICES
import SQLiteRepository from '@shared/services/abstract/sqlite.repository';
import SQLiteService from '@shared/services/sqlite/sqlite.service';
//SQL
import {
	DELETE_COUNTER_BY_ID_QUERY,
	INSERT_COUNTER_QUERY,
	SELECT_ALL_COUNTERS_QUERY,
	UPDATE_COUNTER_QUERY
} from '../../db/sql/counter-commands.sql';

export class CounterRepository extends SQLiteRepository<Counter> {
	constructor(service: SQLiteService) {
		super(service, 'counters');
	}

	async getAll(): Promise<Record<string, Counter>> {
		const rows = await this.sqliteService.getAll<Counter>(SELECT_ALL_COUNTERS_QUERY);
		return Object.fromEntries(rows.map(item => [item.id, item]));
	}

	async insertOne(counter: Counter): Promise<void> {
		await this.sqliteService.run(
			INSERT_COUNTER_QUERY,
			counter.id,
			counter.name,
			counter.step,
			counter.count,
			counter.group,
			counter.createdAt,
			counter.isPinned ? 1 : 0,
			counter.createdAtTimestamp
		);
	}

	async deleteById(id: string): Promise<void> {
		await this.sqliteService.run(DELETE_COUNTER_BY_ID_QUERY, id);
	}

	async updateOne(counter: Counter): Promise<void> {
		await this.sqliteService.run(
			UPDATE_COUNTER_QUERY,
			counter.name,
			counter.step,
			counter.count,
			counter.group,
			counter.createdAt,
			counter.isPinned ? 1 : 0,
			counter.createdAtTimestamp,
			counter.id
		);
	}
}

export default CounterRepository;
