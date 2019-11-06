import { MessageStoreImplementation } from './message-store';
import { MessageEventArgs } from './types';

const log = console;

log.log('Creating and Configuring...');

const testId = 123;
const ms = new MessageStoreImplementation();
ms.messageRead = (sender: object, args: MessageEventArgs) => {
  log.log(`  read ${args.message} sent by ${sender}`);
};

log.log('Running...');

const file = ms.save(testId, 'message1');
log.log(`  written to ${file}`);
log.log(`  reading...`);
ms.read(testId);

log.log('Done!');
