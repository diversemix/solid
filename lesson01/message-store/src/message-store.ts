import * as fs from 'fs';
import * as path from 'path';
import { MessageStore, MessageEventArgs } from './types';

export class MessageStoreImplementation implements MessageStore {

  private dir: string = '';

  public get workingDirectory(): string {
    return this.dir;
  }

  public save(id: number, message: string): string {
    const file = path.join(this.dir, id + '.txt');
    fs.appendFileSync(file, message);
    return file;
  }

  public messageEventHandler(sender: object, args: MessageEventArgs): void {
    throw new Error('Method not implemented.');
  }

  public read(id: number): void {
    throw new Error('Method not implemented.');
  }

}
