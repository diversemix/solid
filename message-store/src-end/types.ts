import { Option } from 'funfix';

export interface IStoreReader {
  read(id: number): Option<string>;
}

export interface IStoreWriter {
  save(id: number, message: string): void;
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

/**
 * This interface is not used but is part of on exercise
 */
export interface ICacheLogger {
  cacheHit(id: number, message: string): void;
  savingMiss(id: number): void;
}
