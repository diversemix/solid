import { Option } from 'funfix';
import { IStoreReader, IStoreWriter } from './types';

export class StoreCache implements IStoreReader, IStoreWriter {

  reader: IStoreReader;
  writer: IStoreWriter;
  cache: {[id: number]: string; }

  constructor(writer: IStoreWriter, reader: IStoreReader) {
    this.cache = {};
    this.reader = reader;
    this.writer = writer;
  }

  read(id: number): Option<string> {
    if (id in this.cache) {
      return Option.of(this.cache[id]);
    }

    const value: Option<string> = this.reader.read(id);

    if (!value.isEmpty()) {
      this.cache[id] = value.get();
    }

    return value;
  }

  save(id: number, message: string): void {
    this.writer.save(id, message);
    this.cache[id] = message;
  }
}
