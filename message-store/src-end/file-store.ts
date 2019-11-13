import * as fs from 'fs';
import { Option } from 'funfix';
import * as path from 'path';
import { IStoreReader, IStoreWriter } from './types';

/**
 * This File:
 *
 * Contains the class `FileStore` - An implementation that uses the file system.
 *
 * This demonstrates the "Interface Segregation Principle" which is the "I" in
 * SOLID. Note that we could easily define an `IStore` interface in `types.ts`
 * which would extend both `IStoreReader` and `IStoreWriter` - but this would be
 * premature as this would constrain the way the `FileStore` class could be
 * used too early. This constraint is part of `index.ts` which does indeed
 * define this interface `IStore` for convenience.
 */
export class FileStore implements IStoreReader, IStoreWriter {
  public cwd: string = '';

  constructor(cwd: string) {
    this.cwd = cwd;
  }

  private get workingDirectory(): string {
    return this.cwd;
  }

  public read(id: number): Option<string> {
    const file = path.join(this.workingDirectory, id + '.txt');
    let value: Option<string>;
    try {
      value = Option.of(fs.readFileSync(file).toString());
    } catch (error) {
      // how do we communicate this error?
      value = Option.none();
    }
    return value;
  }

  public save(id: number, message: string): void {
    const file = path.join(this.workingDirectory, id + '.txt');
    fs.writeFileSync(file, message);
  }

}
