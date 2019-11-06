export type MessageEventArgs = {
  message: string;
}

export type EventHander<T> = (sender: object, args: T) => void;

export interface MessageStore {
  workingDirectory: string;
  save(id: number, message: string): string;
  messageRead: EventHander<MessageEventArgs>;
  read(id: number): void;
}
