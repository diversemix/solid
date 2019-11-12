import { Option } from 'funfix';
import { IStoreReader, IStoreWriter, IStore } from './types';

/*
 The MessageStore class is agnostic of the behaviour that is supplied to the
 constructor. However, it modifies the behaviour through following the
 `Composition` and `Decorator` patterns. This ensures the principle of
 "Single Responsibility" is followed.
 */
export class MessageStore implements IStore {
  reader: IStoreReader;
  writer: IStoreWriter;

  constructor(reader: IStoreReader, writer: IStoreWriter) {
    this.writer = writer;
    this.reader = reader;
  }

  save(id: number, message: string): void {
    this.writer.save(id, message);
  }

  read(id: number): Option<string> {
    return this.reader.read(id);
  }

}
