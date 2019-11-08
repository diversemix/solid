
export interface MessageStore {
  workingDirectory: string;
  read(id: number): string;
  save(id: number, message: string): void;
}
