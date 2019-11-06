import { MessageStoreImplementation } from './message-store';

const log = console;

log.log('Starting...');
const ms = new MessageStoreImplementation();
const file = ms.save(123, 'message1');
log.log(`    written to ${file}`);
log.log('Done!');
