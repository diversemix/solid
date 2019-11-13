import { Option } from 'funfix';
import { ILogger, IStore, IStoreLogger, IStoreReader, IStoreWriter } from './types';

export class StoreLogger implements IStore, IStoreLogger {

  public reader: IStoreReader;
  public writer: IStoreWriter;
  public logger: ILogger;
  public context: string;

  constructor(context: string, log: ILogger, store: IStore) {
    this.context = context;
    this.logger = log;
    this.reader = store;
    this.writer = store;
  }

  public read(id: number): Option<string> {
    this.log.info(`  ${this.context}::read() for id ${id}`);
    const value: Option<string> = this.reader.read(id);
    if (value.isEmpty()) {
      this.log.debug(`  ${this.context}::read() found no message.`);
    } else {
      this.log.debug(`  ${this.context}::read() found message: ${value.get()}`);
    }
    return value;
  }

  public save(id: number, message: string): void {
    this.log.debug(`  ${this.context}::save() started for id ${id}`);
    this.writer.save(id, message);
    this.log.debug(`  ${this.context}::save() done for id ${id}`);
  }

  private get log(): ILogger {
    return this.logger;
  }

  public saving(id: number, message: string): void {
    this.log.info(`> ${this.context}::SAVING, ${id}, "${message}"`);
  }

  public savingDone(id: number, message: string): void {
    this.log.info(`< ${this.context}::SAVED, ${id}, "${message}"`);
  }

  public reading(id: number): void {
    this.log.info(`> ${this.context}::READING, ${id}`);
  }

  public readingDone(id: number): void {
    this.log.info(`< ${this.context}::READ, ${id}`);
  }
}
