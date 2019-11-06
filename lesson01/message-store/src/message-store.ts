import * as fs from 'fs';
import * as path from 'path';
import { MessageStore, MessageEventArgs, EventHander } from './types';

export class MessageStoreImplementation implements MessageStore {
  messageRead: EventHander<MessageEventArgs>;

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
    const file = path.join(this.dir, id + '.txt');
    const message = fs.readFileSync(file).toString();
    this.messageRead(this, { message } );
  }

}
