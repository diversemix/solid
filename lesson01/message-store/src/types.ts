export interface MessageEventArgs {
  message: string;
}

export interface MessageStore {
  workingDirectory: string;
  save(id: number, message: string): string;
  messageEventHandler(sender: object, args: MessageEventArgs): void;
  read(id: number): void;
}
