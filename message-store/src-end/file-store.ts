import * as fs from 'fs';
import { Option } from 'funfix';
import * as path from 'path';
import { IStoreReader, IStoreWriter } from './types';

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
