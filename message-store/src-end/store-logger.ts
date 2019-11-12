import { Option } from 'funfix';
import { IStoreReader, IStoreWriter, ILogger, IStore, IStoreLogger } from './types';

export class StoreLogger implements IStore, IStoreLogger {

  reader: IStoreReader;
  writer: IStoreWriter;
  logger: ILogger;
  context: string;

  constructor(context: string, log: ILogger, store: IStore) {
    this.context = context;
    this.logger = log;
    this.reader = store;
    this.writer = store;
  }

  read(id: number): Option<string> {
    this.log.info(`  ${this.context}::read() for id ${id}`);
    const value: Option<string> = this.reader.read(id);
    if (value.isEmpty()) {
      this.log.info(`  ${this.context}::read() found no message.`);
    } else {
      this.log.info(`  ${this.context}::read() found message: ${value.get()}`)
    }
    return value;
  }

  save(id: number, message: string): void {
    this.log.info(`  ${this.context}::save() started for id ${id}`);
    this.writer.save(id, message);
    this.log.info(`  ${this.context}::save() done for id ${id}`);
  }

  private get log() : ILogger {
    return this.logger;
  }

  saving(id: number, message: string) {
    this.log.info(`> ${this.context}::SAVING, ${id}, "${message}"`);
  }

  savingDone(id: number, message: string) {
    this.log.info(`< ${this.context}::SAVED, ${id}, "${message}"`);
  }

  reading(id: number) {
    this.log.info(`> ${this.context}::READING, ${id}`);
  }

  readingDone(id: number) {
    this.log.info(`< ${this.context}::READ, ${id}`);
  }
}
