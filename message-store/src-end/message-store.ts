import { Option } from 'funfix';
import { IStore, IStoreReader, IStoreWriter } from './types';

/*
 The MessageStore class is agnostic of the behaviour that is supplied to the
 constructor. However, it modifies the behaviour through following the
 `Composition` and `Decorator` patterns. This ensures the principle of
 "Single Responsibility" is followed.
 */
export class MessageStore implements IStore {
  public reader: IStoreReader;
  public writer: IStoreWriter;

  constructor(reader: IStoreReader, writer: IStoreWriter) {
    this.writer = writer;
    this.reader = reader;
  }

  public save(id: number, message: string): void {
    this.writer.save(id, message);
  }

  public read(id: number): Option<string> {
    return this.reader.read(id);
  }

}
