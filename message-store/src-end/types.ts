import { Option } from 'funfix';

export interface IStoreReader {
  read(id: number): Option<string>;
}

export interface IStoreWriter {
  save(id: number, message: string): void;
}

export interface IStore extends IStoreReader, IStoreWriter {

}

export interface ILogger {
  info(message: string): void;
  debug(message: string): void;
  error(message: string): void;
}

export interface IStoreLogger {
  saving(id: number, message: string): void;
  savingDone(id: number, message: string): void;
  reading(id: number): void;
  readingDone(id: number): void;
}