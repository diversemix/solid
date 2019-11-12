import * as fs from 'fs';
import * as path from 'path';
import { Option } from 'funfix';
import { IStoreReader, IStoreWriter } from './types';

export class FileStore implements IStoreReader, IStoreWriter {
  cwd: string = '';

  constructor(cwd: string) {
    this.cwd = cwd;
  }

  private get workingDirectory(): string {
    return this.cwd;
  }

  read(id: number): Option<string> {
    const file = path.join(this.workingDirectory, id + '.txt');
    return Option.of(fs.readFileSync(file).toString());
  }

  save(id: number, message: string): void {
    const file = path.join(this.workingDirectory, id + '.txt');
    fs.writeFileSync(file, message);
  }

}