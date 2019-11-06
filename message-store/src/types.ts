export interface MessageEventArgs {
  message: string;
}

export type EventHander<T> = (sender: object, args: T) => void;

export interface MessageStore {
  workingDirectory: string;
  messageRead: EventHander<MessageEventArgs>;
  read(id: number): void;
  save(id: number, message: string): string;
}
