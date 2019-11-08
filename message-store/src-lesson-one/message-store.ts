import * as fs from 'fs';
import * as path from 'path';
import { MessageStore } from './types';

export class MessageStoreImplementation implements MessageStore {
  private dir: string = '';

  public get workingDirectory(): string {
    return this.dir;
  }

  public save(id: number, message: string): void {
    const file = this.getFilename(id);
    fs.appendFileSync(file, message);
  }

  public read(id: number): string {
    const file = this.getFilename(id);
    return fs.readFileSync(file).toString();
  }

  public getFilename(id: number): string {
    return path.join(this.dir, id + '.txt');
  }
}
